.PHONY: build

stage=dev
profile=byteee-$(stage)


deploy-prod:
	git push prod main:main

deploy-test:
	git push test dev:main

share:
	ngrok http 3000


# SERVERLESS DEPLOYMENT COMMANDS:

install:
	npm install -g serverless aws-sso-credentials-getter serverless-manifest-plugin
	brew install awscli jq
	touch ~/.aws/credentials

sso-configure:
	@echo "\"SSO start URL\": https://byteee.awsapps.com/start/"
	@echo "\"REGION\": us-east-1"
	aws configure sso --profile $(profile)

sso: sso-configure
	aws sso login --profile $(profile)
	ssocred $(profile)

deploy-stack:
	sls deploy --aws-profile $(profile) --stage $(stage) --config serverless.yml

remove-stack:
	sls remove --aws-profile $(profile) --stage $(stage) --config serverless.yml

build:
	#npm run build

deploy: build deploy-stack
	$(eval app_bucket_name = $(shell jq '.$(stage).outputs | .[] | select(.OutputKey=="AppBucketName") | .OutputValue' .serverless/manifest.json))
	$(eval cloudfront_distribution_id = $(shell jq '.$(stage).outputs | .[] | select(.OutputKey=="CloudFrontDistributionId") | .OutputValue' .serverless/manifest.json))

	@echo "app_bucket_name = $(app_bucket_name)"
	@echo "cloudfront_distribution_id = $(cloudfront_distribution_id)"

	aws s3 cp build/ s3://$(app_bucket_name)/ --recursive --profile $(profile)

	aws cloudfront create-invalidation \
				--distribution-id $(cloudfront_distribution_id)  \
				--profile $(profile) \
				--paths "/*" | jq .Invalidation
