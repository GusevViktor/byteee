import React, { ReactElement, useState } from "react";
import style from "./style.module.scss";
import Layout, { typeAlert } from "src/features/Layout";
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Icons,
  TextOP,
  Text
} from "@viktor666/byteee-kit";
import Link from "../../../features/Link";

import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";

const {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Linkedin
} = Icons;
interface FormModel {
  name?: string;
  email?: string;
  message?: string;
}

const ContactUsPage = (): ReactElement => {
  const [isSubmittedOnce, setIsSubmittedOnce] = useState<boolean>(false);
  const [alertFlag, setAlertFlag] = useState<typeAlert | undefined>(undefined);

  const ContactUsForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  }: FormikProps<FormModel>) => (
    <form
      onBlur={handleBlur}
      onSubmit={(e) => {
        setIsSubmittedOnce(true);
        return handleSubmit(e);
      }}
      className={style.contentForms}
    >
      <div className={style.description}>
        <Text size="m" color="grayscale900">
        Have any issues with the platform or want to inquire about something? Use the
        form, Luke!
        </Text>
      </div>
      <div className={style.forms}>
        <Input
          label="Name"
          name={"name"}
          size="m"
          value={values?.name || ""}
          placeholder={"Introduce yourself"}
          onChange={handleChange}
          error={errors.name && touched.name ? errors?.name || "" : ""}
        />
        <Input
          label="Email"
          name="email"
          size="m"
          value={values?.email || ""}
          placeholder={"Type your email"}
          onChange={handleChange}
          error={errors.email && touched.email ? errors?.email || "" : ""}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Textarea
            label={"Message"}
            name="message"
            placeholder={"Tell us what’s on your mind"}
            value={values.message}
            onChange={handleChange}
            error={!!(errors.message && touched.message)}
            errorMessage={errors.message}
            maxLength={1000}
          />
        </div>
      </div>
      <div className={style.copyMessage}>
        <Checkbox size={"m"} label={"Send a copy to my email"} name={"contact"} />
      </div>
      <div>
        <div className={style.button}>
          <Button
            size={"m"}
            style={{ width: "100%" }}
            disabled={isSubmittedOnce}
            htmlType="submit"
          >
            Send message
          </Button>
        </div>
        <div className={style.agreement}>
          <Text
            size={["xs", "xs", "xs", "xs", "xs", "xs", "s"]}
            color="grayscale700"
            as="span"
          >
          By clicking “Send message”, you acknowledge that you have read, understood
          and agree to the byteee{" "}
          </Text>

          <Link
            to={"/"}
            color={"violet"}
            size={"s"}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </form>
  );

  return (
    <Layout gridTemplate={true} alert={alertFlag}>
      <div className={style.container}>
        <div className={style.title}>
          <TextOP
            as="h1"
            size={[5, 5, 3, 3, 3, 2, 1]}
            font="sangbleu"
            bold
          >
            Contact us
          </TextOP>

        </div>
        <Formik<FormModel>
          validateOnBlur
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors: FormModel = {};

            if (!values.name) {
              errors.name = "Please enter your name";
            }

            if (!values.email) {
              errors.email = "Please enter your email";
            } else if (
              // eslint-disable-next-line max-len
              !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                values.email
              )
            ) {
              errors.email = "The email format is incorrect";
            }

            if (!values.message) {
              errors.message = "Please enter your question or feedback";
            }

            if (!errors.email && !errors.name && !errors.message) {
              setIsSubmittedOnce(false);
            }

            return errors;
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            alertFlag
              ? setAlertFlag("success")
              : setAlertFlag("error");
            setIsSubmittedOnce(false);
          }
          }
          component={ContactUsForm}
        />

        <div className={style.contacts}>
          <div style={{ width: "100%", marginBottom: 36 }}>
            <div className={style.description}>
              <Text size={["m"]} color="grayscale900">
              You can also message us at
              </Text>

            </div>
            <div>
              <Link to={"mailto:info@byteee.net"} external={true} color={"violet"}>
                info@byteee.net
              </Link>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={style.description}>Join us</div>
            <div className={style.socialBlock}>
              <Link
                to={"https://www.linkedin.com/company/byteee"}
                external={true}
                hoverUnderLine={false}
                target={"_blank"}
              >
                <Linkedin size={"m"} color={"violet600"}/>
              </Link>
              <Link
                to={"https://twitter.com/byteeehq"}
                external={true}
                hoverUnderLine={false}
                target={"_blank"}
              >
                <TwitterIcon size={"m"} color={"violet600"}/>
              </Link>
              <Link
                to={"https://www.facebook.com/byteeehq"}
                external={true}
                hoverUnderLine={false}
                target={"_blank"}
              >
                <FacebookIcon size={"m"} color={"violet600"} />
              </Link>
              <Link
                to={"https://www.instagram.com/byteeehq"}
                external={true}
                hoverUnderLine={false}
                target={"_blank"}
              >
                <InstagramIcon size={"m"} color={"violet600"}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
