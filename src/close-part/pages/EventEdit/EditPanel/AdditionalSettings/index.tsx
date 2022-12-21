import React from "react";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import style from "./style.module.scss";
import { Textarea, Checkbox, Text } from "@viktor666/byteee-kit";
import { NotificationsType } from "src/interface";

export interface FormAddirionalSettingsValues {
  notifications?: NotificationsType[],
  welcomeMessage?: string,
}

interface FormAddirionalSettingsProps extends FormAddirionalSettingsValues {
  onSubmit?: (values: FormAddirionalSettingsValues) => void;
}

const FormAddirionalSettings = (props : FormAddirionalSettingsProps) => {

  const {
    notifications,
    welcomeMessage,
    onSubmit,
  } = props;

  const initialValues = {
    notifications,
    welcomeMessage
  };

  const CustomForm = ({
    values,
    handleChange,
    handleSubmit,
  }: FormikProps<FormAddirionalSettingsValues>) => {

    const {
      block,
      block_margin,
      title,
      checkbox_wrap,
      checkbox,
      textarea,
    } = style;

    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={[block, block_margin].join(" ")}>
          <div className={title}>
            <Text color="grayscale1000" size="m">
              Chat and email notifications
            </Text>
          </div>
          <Text color="grayscale700" size="s">
            Choose who gets notified when you change the event details.
          </Text>
          <div className={checkbox_wrap}>
            <div className={checkbox}>
              <Checkbox
                label="Speakers"
                name="notifications"
                size="s"
                value="speakers"
                checked={values.notifications?.includes("speakers")}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Checkbox label="Attendees"
              name="notifications"
              size="s"
              value="attendees"
              checked={values.notifications?.includes("attendees")}
              onChange={(e) => handleChange(e)}
            />
          </div>

        </div>
        <div className={block}>
          <div className={title}>
            <Text color="grayscale1000" size="m">
              Welcome message
            </Text>
          </div>
          <Text color="grayscale700" size="s">
            Add a unique greeting for everyone who registers for the event.
          </Text>
          <div className={textarea}>
            <Textarea
              maxLength={500}
              name="welcomeMessage"
              value={values.welcomeMessage}
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    );
  };
  return (
    <Formik<FormAddirionalSettingsValues>
      validateOnBlur
      initialValues={initialValues}
      component={CustomForm}
      onSubmit={(values) => onSubmit && onSubmit(values)}
    >
    </Formik>
  )
  ;
};

export default FormAddirionalSettings;