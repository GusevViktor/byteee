import React, { ReactElement } from "react";
import style from "src/open-part/features/Policy/style.module.scss";
import { getTitle, getList, getMainTitle } from "src/open-part/features/Policy";
import Layout from "src/features/Layout";
import { Text } from "@viktor666/byteee-kit";
import Link from "src/features/Link";

const ServicetextPage = (): ReactElement => (
  <Layout gridTemplate>
    <div className={style.wrapAll}>
      <div className={style.container}>
        {getMainTitle("Terms of Service")}
        <div className={style.update}>
          <Text size="m">
        Last updated: March 1, 2022
          </Text>
        </div>
        <div className={style.section}>
          {getTitle("1. Introduction")}
          <div className={style.text}>
            <Text size="m">
              These text of Service (“text”) apply to your use of the websites,
              mobile applications, and other online products and services
              (collectively, the “Services”) provided by byteee Connect LLC (“byteee”,
              “platform”, “we”, or “us”). By clicking “Login”, “Sign up” or otherwise
              using our Services, you agree to these text.
            </Text>

            <Text size="m">
            Our Privacy Policy explains how we collect and use your information while
            these text outline your responsibilities when using our Services.
            </Text>
            <Text size="m">
            If you have any questions about these text of Service, please contact us
            at{" "}
              <Link to={"mailto:legal@byteee.net"} external={true} color={"violet"}>
              legal@byteee.net.
              </Link>
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("2. Your account")}
          <div className={style.text}>
            <Text size="m">
            You may be required to provide information about yourself to register and
            use our Services. You agree that such information shall be accurate. You
            are entirely responsible for maintaining the security of your username
            and password. We recommend that you do not share your password with
            others.
            </Text>
            <Text size="m">
            If you accept these text and use the Services on behalf of another
            person or entity, you represent that you are authorized to do so, and in
            that case, the words “you” or “your” in these text include that other
            person or entity.
            </Text>
            <Text size="m">
            You must be at least 18 years of age to use our Services.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("3. Content")}
          <div className={style.text}>
            <Text size="m">
            You agree that you are solely responsible for the content (“Content”)
            created, transmitted, or displayed by you in using the Services, as well
            as for compliance with all laws relating to the Content, including, but
            not limited to, laws requiring you to obtain the consent of a third party
            to use the Content and to provide appropriate notices of third party
            rights.
            </Text>
            <Text size="m">
            Under no circumstances will byteee be liable for any:
            </Text>
          </div >
          {getList([
            ["Content created, transmitted, displayed, " +
          "or viewed while using the Services;"],
            ["Errors in the Content;"],
            ["Loss or damage of any kind incurred as a result of the use of," +
            " access to, or denial of access to Content."],
          ])}
          <div className={style.text}>
            <Text size="m">
              {" "}
            We reserve the right to review and remove any Content at any time and
            without prior notice if we become aware that it violates any provision of
            these text or any law, as well as terminate the accounts of repeat
            infringers.
            </Text>
            <Text size="m">
            If you believe that the content posted on the platform violates the law,
            please report it to us at{" "}
              <Link to={"mailto:legal@byteee.net"} color={"violet"} external={true}>
              legal@byteee.net.
              </Link>
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("4. Rights and ownership")}
          <div className={style.text}>
            <Text size="m">
            You retain your rights to the Content you create, transmit, or display
            through the Services.
            </Text>
            <Text size="m">
            Unless otherwise agreed in writing, by using our Services, you grant
            byteee a nonexclusive, royalty-free, worldwide, fully-paid, and
            sublicensable license to store, use, reproduce, modify, adapt, publish,
            translate, create derivative works from, otherwise process, distribute,
            publicly perform, and display your Content and any name or username
            provided in connection with your Content in all media formats and
            distribution methods now known or later developed on the Services.
            </Text>
            <Text size="m">
            byteee needs this license to distribute your Content on our Services on a
            variety of devices without your permission on a case-by-case basis.
            </Text>
            <Text size="m">
            As long as you comply with these text, byteee grants you a limited,
            personal, non-exclusive, and non-assignable license to access our
            Services.
            </Text>
            <Text size="m">
            We may stop providing the Services within our sole discretion. We also
            reserve the right to change the text and conditions and create limits on
            use and storage and may remove or limit Content distribution on our
            Services.
            </Text>
            <Text size="m">
            These text do not grant you any right to the other byteee{" "}
              {"users' content"}, unless otherwise agreed in writing, or byteee
            trademarks, logos, and brand features.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("5. Termination")}
          <div className={style.text}>
            <Text size="m">
            You can stop using our Services at any time. We reserve the right to
            suspend or terminate your access to the Services with or without notice.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("6. Disclaimer")}
          <div className={style.text}>
            <Text size="m">
            You understand and agree that our Services are provided “as is” and that
            byteee, its affiliates, suppliers, consultants and partners expressly
            disclaim any express or implied warranties of any kind. byteee, its
            affiliates, suppliers, consultants and partners make no warranties or
            representations regarding the results that may be obtained from the use
            of the Services, regarding the accuracy or reliability of any information
            obtained through the Services, or that the Services will meet any{" "}
              {"user's"} requirements or be uninterrupted, timely, secure, or
            error-free. Use of the Services is at your sole risk.
            </Text>
            <Text size="m">
            The use of any materials and data downloaded or otherwise obtained
            through the use of the byteee Services is at your sole risk. You are
            solely responsible for any damage to you resulting from the use of the
            Services.
            </Text>
            <Text size="m">
            You agree to indemnify, defend, and hold harmless byteee, its affiliates,
            officers, directors, employees, representatives, suppliers, consultants,
            and partners from any and all third party claims, liability, damages, and
            costs (including, but not limited to, legal fees) arising from your use
            of our Services, your breach of these text, or your infringement or
            violation of any intellectual property or other rights of any person or
            entity or applicable law.
            </Text>
            <Text size="m">
            byteee is also not responsible for the retention of any user information
            or communications between users.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("7. Limitation of liability")}
          <div className={style.text}>
            <Text size="m">
            To the maximum extent permitted by applicable law, under no circumstances
            will byteee, its affiliates, suppliers, consultants and partners be liable
            for any special, incidental, indirect, exemplary, or consequential
            damages, including, without limitation, loss of profits arising from the
            use or inability to use the Services or provision or failure to provide
            technical or other support services, even if byteee, its affiliates,
            suppliers, consultants and partners have been advised of the possibility
            of such damages.
            </Text>
            <Text size="m">
            In any case, {"byteee's"}, its{" "}
              {"affiliates', suppliers', consultants' and partners'"} cumulative
            liability related to these text will be limited to the amount actually
            paid by you for the Services in the twelve (12) months preceding the
            event or circumstances giving rise to the claim.
            </Text>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("8. Dispute resolution")}
          <div>
            <div className={style.text}>
              <Text size="m">
              We want to address your concerns without needing a formal legal case.
              Before filing a claim against byteee, you agree to contact us and
              attempt to resolve the dispute by sending a written notice of your
              claim to legal@byteee.net or by registered mail to byteee Connect LLC,
              24/17 Azatutyan Ave, Yerevan, Armenia.
              </Text>
              <Text size="m">
              The notice must:
              </Text>
            </div>
            {getList([
              [`Include your name, residence address, email address, and telephone
              number;`],
              ["Describe the nature and basis of the claim;"],
              ["Include your name, residence address, email address," +
                " and telephone number;"],
              ["Describe the nature and basis of the claim;"],
              ["Set forth the specific relief sought."],
            ])}
            <div className={style.text}>
              <Text size="m">
            If we are unable to resolve the issue within thirty (30) days after
            receiving the notice, either party may initiate a formal proceeding.
              </Text>
              <Text size="m">
            The parties expressly waive any right to bring any action, lawsuit, or
            proceeding as a class or collective action, private attorney general
            action, or any other proceeding in which any party acts or proposes to
            act in a representative capacity.
              </Text>
              <Text size="m">
            Any dispute must be filed within one year after the relevant claim arose.
            Otherwise, the dispute is permanently barred, which means that you and
            byteee will not have the right to assert a claim.
              </Text>
            </div>
          </div>
        </div>
        <div className={style.section}>
          {getTitle("9. Amendments")}
          <div className={style.text}>
            <Text size="m">
            We may update these text of Service from time to time. In this case, we
            will revise the date at the top of the document, in some cases, we may
            send you an additional email notification. We encourage you to review
            these text regularly to stay informed about changes.
            </Text>
            <Text size="m">
            If you do not agree to the amended text, you must stop using byteee
            Services.
            </Text>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default ServicetextPage;
