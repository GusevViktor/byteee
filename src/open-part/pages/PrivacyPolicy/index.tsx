import React, { ReactElement } from "react";
import Layout from "src/features/Layout";
import style from "src/open-part/features/Policy/style.module.scss";
import { getTitle, getList, getMainTitle } from "src/open-part/features/Policy";
import Link from "src/features/Link";
import { Text } from "@viktor666/byteee-kit";

const PrivacyPolicyPage = (): ReactElement => (
  <Layout gridTemplate>
    <div className={style.wrapAll}>
      <div className={style.container}>
        {getMainTitle("Privacy Policy")}
        <div className={style.update}>
          <Text size="s">
        Last updated: March 1, 2022
          </Text>
        </div>
        <div className={style.section}>
          {getTitle("1. Introduction")}
          <div className={style.text}>
            <Text size="m">
              {`This Privacy Policy explains how byteee Connect LLC ("byteee",
            "platform", "we", or "us") collects, uses, and discloses information
            about you. This Privacy Policy applies when you use our websites,
            mobile applications, and other online products and services, including
            but not limited to participating in events, contact our support team,
            engage with us on social media, or interact with us otherwise.`}
            </Text>
            <Text size="m">
            We may update this Privacy Policy from time to time. In this case, we
            will revise the date at the top of the document, in some cases, we may
            send you an additional email notification. We encourage you to review
            this Privacy Policy regularly to stay informed about changes.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("2. What personal information we collect")}
          <div className={style.text}>
            <Text size="m">
            The information we collect and process depends on your account settings
            and the choices that you make, including your privacy settings, and
            what services, features, or experiences you use.
            </Text>
            <Text size="m">
            We may collect and process the following categories of personal
            information when you use byteee products:
            </Text>
            {getList([
              [
                "Account information:",
                ` Information you provide when
                you sign up and complete your profile, including your name,
                display name, username, email address, the contents of the
                'About' field, your avatar image, social media links, business
                information, such as your place of work and position, and any
                other information you choose to provide.`
              ],
              [
                "Activity information:",
                ` Planned events and participation
              history, name, description, date, time, duration, and frequency of
              the events, number of participants and other settings and
              characteristics of the event, the statistics of your interaction
              with other users on the platform, pages viewed,
              links clicked and the page
              that you visited before accessing our services.`
              ],
              [
                "Generated content:",
                ` Videos, audio, and messages posted
                and broadcasted on the platform and related files, such as tickets,
                presentations, and accompanying materials. Content may contain your
                voice and image, depending on your event and account settings, as
                well as the permissions and settings on your device. This type of
                content can be placed on the platform before, during, and after the
              `,
              ],
              [
                "Device and usage information:",
                ` Information about the device and network you use, such as your
                hardware model, operating system version, mobile network, IP
                address, unique device identifiers, browser type, and app
                version.
              `,
              ],
              [
                "Information collected by cookies, web beacons,"+
              "and similar tracking technologies:",
                ` We use tracking technologies, such as cookies and web beacons, to
                collect information about you. Cookies are small data files stored
                on your hard drive or in device memory that help us improve our
                services and your experience. Web beacons are electronic images
                that we use to help deliver cookies, count visits, and understand
                usage. We also work with third-party analytics providers that use
                cookies, web beacons, device identifiers, and other technologies
                to collect information about your use of our services.
              `
              ],
              [
                "Communication with byteee:",
                ` Information about your
              interaction with byteee, including support questions and
              communication with us on social networks.`
              ],
            ], true)}
          </div>
        </div>
        <div className={style.section}>
          {getTitle("3. How we use personal information")}
          <div className={[style.text, style.no_margin_p].join(" ")}>
            <Text size="m">
            We use the information we collect to provide, maintain, and improve our
            services, which include publishing and distributing user-generated
            content. We also use the information for the following purposes:
            </Text>
            {getList([
              [

                "Account creation and maintenance:",
                ` To create and maintain
              your account.`
              ],
              [
                "Provide products and services:",
                ` To create and hold
              events, speak at and participate in them, route invitations and
              messages when users send invitations and messages using byteee.`
              ],
              [
                "Research and Development:",
                ` To research and develop byteee products, 
              including content management and product troubleshooting.`
              ],
              [
                "Communication:",
                ` To communicate with you about byteee
              products, features, and services. We also use your information to
              respond to your support requests.`
              ],
              [
                "Security and Protection:",
                ` To detect, investigate, and prevent malicious behavior or
              unsafe experiences, eliminate security threats, and protect
              byteee products.`
              ],
              [
                "Legal Reasons:",
                ` To comply with applicable law or respond
              to valid legal process, including from courts, government
              agencies, and law enforcement, to investigate or participate
              in civil discovery, litigation, or other adversarial legal
              proceedings, and to enforce or investigate potential violations
              of our Terms of Service or policies.`
              ]
            ])}
            <Text size="m">
              {" "}If you close your account, we will delete your account data within
            30 days. We store other personal information for as long as necessary
            to carry out the purposes for which we originally collected it and for
            other legitimate business purposes, including to comply with our legal,
            regulatory, or other compliance obligations.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("4. Who and under what circumstances can see"+
          "and share your personal information")}
          <div className={[style.text, style.no_margin_p].join(" ")}>
            <Text size="m">
            We share personal information in the following circumstances:
            </Text>
            {getList([
              [
                "Platform Activity:",
                ` Other users can see your
              details, including your name, display name, username, email
              address, the contents of the 'About' field, your avatar image,
              social media links, business information such as your place of
              work and position, and any other information you choose to
              provide while using byteee.`
              ],
              [
                "Service Provider Requests:",
                ` We share information with
                consultants and partners that assist us in analytics,
                communications and marketing, fraud prevention, and
                other business-related activities.`
              ],
              [
                "Lawful requests from courts, government"+
              "agencies, and law enforcement:",
                ` If we are going to disclose your personal information in
                response to a legal process, we will notify you so you can
                challenge it, unless we are prohibited by law or believe
                doing so may endanger others or cause illegal conduct.
                We will object to legal requests for information about
                byteee users that we believe are improper.`
              ],
              [
                "Change of control:",
                ` We may share personal information
                with actual or prospective acquirers, their representatives, and
                other participants in the course of negotiations for the sale,
                merger, acquisition, restructuring, or change of control related to
                all or a portion of byteee’s business or assets.`
              ],
            ])}
            <Text size="m">
            We do not and will not sell personal information to third parties. We
            share personal information with third parties for the business purposes
            described in this Privacy Policy.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("5. Children")}
          <div className={style.text}>
            <Text size="m" as="span">
            Our services are not intended for children. We do not knowingly collect
            personal information from children. If you believe we may have
            information from a child, please let us know at{" "}
              <Link to="mailto:privacy@byteee.net" external={true} color="violet">
              privacy@byteee.net
              </Link>
            </Text>
            <p></p>
          </div>
        </div>
        <div className={[style.section, style.no_margin_b].join(" ")}>
          {getTitle("6. How to contact us")}
          <div className={style.text}>
            <Text size="m" as="span">
            If you have any questions about this Privacy Policy, please contact us
            at{" "}
            </Text>
            <Link to="mailto:privacy@byteee.net" external={true} color="violet">
              privacy@byteee.net
            </Link>
            <div className={style.contacts}>
              <div><Text size="m">byteee Am</Text></div>
              <div><Text size="m">24/17 Azatutyan Ave</Text></div>
              <div><Text size="m">Yerevan 0014</Text></div>
              <div><Text size="m">Armenia</Text></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default PrivacyPolicyPage;
