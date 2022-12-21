import React, { useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import { FormikProps } from "formik/dist/types";
import { Button, ImageUploader, RadioGroup, Text, Textarea, TextEditor, DatePicker, TimePicker, Input, Slider, Select } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { useTabletType } from "src/hooks/useTabletType";
import Tooltip from "src/close-part/features/Tooltip";
import { Label, Block } from "../Forms";
import { RegistrationType } from "src/interface";

interface FormValuesModel {
  name?: string;
  date?: Date | undefined;
  description?: string;
  startTime?: Date | undefined;
  endTime?: Date | undefined;
  cover?: string;
  registrationType?: RegistrationType;
  attendeeLimit?: number;
}

interface FormModel extends FormValuesModel {
  onSubmit?: (values: FormValuesModel) => void;
  onSubscribe?: (values: FormValuesModel) => void;
  noTitle?: boolean;
}

const {
  title,
  submit,
  step_info,
  loader,
  registration,
  radioGroup,
  tooltip,
  registration_icon,
  flex,
  flex_center,
  input_short,
  slider,
  date_style,
  time_style,
  time_wrap,
  timezone_style,
  time_and_timezone,
  time_wrap__left_margin,
} = style;


const getText = (text: string) => (
  <Text size={"m"} color={"grayscale900"}>
    {text}
  </Text>
);
const Subscriber = (
  { onSubscribe }: { onSubscribe: (values: FormValuesModel) => void}
) => {
  const { values } = useFormikContext<FormValuesModel>();
  useEffect(() => {
    onSubscribe(values);
  }, [values]);
  return null;
};

const BasicSettings = (props: FormModel) => {
  const {
    onSubmit,
    onSubscribe,
    noTitle = false,
    name,
    date,
    description,
    startTime,
    endTime,
    cover,
    registrationType,
    attendeeLimit,
  } = props;
  const isTablet = useTabletType();
  const registrationTypes = [
    {
      label: "Public",
      value: "public",
      defaultChecked: true,
    }, {
      label: "Private",
      value: "private",
    },
  ];
  const SettingsForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors
  }: FormikProps<FormValuesModel>) => {
    const {
      startTime,
      endTime,
    } = values;
    const textTimeZone = "UTC−08:00 	Alaska Daylight Time";
    const startLimitTime: [number, number] | undefined = startTime ?
      [startTime.getHours(), startTime.getMinutes()] : undefined;
    const endLimitTime: [number, number]| undefined = endTime ?
      [endTime.getHours(), endTime.getMinutes()] : undefined;
    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={style.form}
      >
        {onSubscribe && (
          <Subscriber onSubscribe={onSubscribe} />
        )}
        <div>
          {!noTitle && (
            <div className={title}>
              <Text size={6} bold>Basic settings</Text>
            </div>
          )}
          <div className={step_info}>
            {getText(`
            Name your event, set the date, and highlight its
            benefits for the participants. You can change any details later.
          `)}
          </div>
          <Block>
            <Label>Event name</Label>
            <Textarea
              maxLength={500}
              rows={isTablet ? 1 : 2}
              name="name"
              value={values.name}
              placeholder="Enter a name describing the event theme"
              onChange={handleChange}
              error={!!(errors.name && touched.name)}
              errorMessage={errors.name}
            />
          </Block>
          <Block>
            <Label isOptional>Description</Label>
            <TextEditor
              placeholder={"Give any relevant info, share links, or stir up " +
          "interest with hints about the speakers or event subject matter."}
              onChange={() => handleChange}
            />
          </Block>
          <Block>
            <div className={date_style}>
              <Label>Date</Label>
              <DatePicker
                name="date"
                value={values.date}
                placehalder={""}
                onChange={val => {
                  setFieldValue("date", val);
                }}
              />
            </div>
            <div className={time_and_timezone}>
              <div className={time_wrap}>
                <div className={time_style}>
                  <Label>Start time</Label>
                  <div>
                    <TimePicker
                      name="startTime"
                      value={values.startTime}
                      placehalder={""}
                      beforeTime={endLimitTime}
                      onChange={val => {
                        setFieldValue("startTime", val);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={[time_style, time_wrap__left_margin].join(" ")}
                >
                  <div>
                    <div className={flex}>
                      <Label>End time</Label>
                      <Tooltip className={tooltip}>
                        {[
                          "The Free plan allows you to",
                          "organize events up to",
                          "4 hours long."
                        ]}
                      </Tooltip>
                    </div>
                    <div>
                      <TimePicker
                        name="endTime"
                        value={values.endTime}
                        placehalder={""}
                        afterTime={startLimitTime}
                        onChange={val => {
                          setFieldValue("endTime", val);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={timezone_style}>
                <Label>Time zone</Label>
                <Select
                  size="m"
                  onClick={() => 1 + 1}
                  option={
                    {
                      label: textTimeZone,
                      value: textTimeZone,
                    }
                  }
                  options={[{
                    label: textTimeZone,
                    value: textTimeZone,
                  }]}
                />
              </div>
            </div>
          </Block>
          <Block>
            <Label isOptional>Event cover</Label>
            <div className={loader}>
              <ImageUploader onChange={(e) => {
                setFieldValue("cover", e.currentTarget?.files?.[0]);
              }}/>
              <ul>
                <li>
                  <Text size={"s"} color={"grayscale700"}>
                    PNG or JPG, max. 2MB
                  </Text>
                </li>
                <li>
                  <Text size={"s"} color={"grayscale700"}>
                    High quality image with 16:9 ratio will look the best
                  </Text>
                </li>
              </ul>
            </div>
          </Block>
          <Block>
            <div className={registration}>
              {getText("What type of registration will your event have?")}
              <div className={registration_icon}>
                <Tooltip className={tooltip}>
                  {[
                    "'Public' available for anyone",
                    "and listed in our Catalog.",
                    "'Private' – by invitation only."
                  ]}
                </Tooltip>
              </div>
            </div>
            <RadioGroup
              className={radioGroup}
              items={registrationTypes}
              name="registrationType"
              onChange={handleChange}
            />
          </Block>
          <div>
            <div className={flex}>
              <Label>Attendee limit</Label>
              <Tooltip className={tooltip}>
                {[
                  "While byteee is in beta, you",
                  "can have up to",
                  "50 attendees per event."
                ]}
              </Tooltip>
            </div>
            <div className={flex_center}>
              <div className={slider}>
                <Slider
                  min={0}
                  max={50}
                  step={1}
                  onChange={value => setFieldValue("attendeeLimit", value)}
                />
              </div>
              <div className={input_short}>
                <Input
                  size="m"
                  error={Number(values.attendeeLimit) > 50 ? "no more than 50 is allowed" : ""}
                  name="attendeeLimit"
                  placeholder=""
                  value={`${values.attendeeLimit}`}
                  onChange={
                    e => setFieldValue("attendeeLimit", e.currentTarget.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {onSubmit && (
          <div className={submit}>
            <Button
              htmlType="submit"
            >
              Continue
            </Button>
          </div>
        )}
      </form>
    );
  };
  return (
    <Formik<FormValuesModel>
      validateOnBlur
      initialValues={{
        name,
        date,
        description,
        startTime,
        endTime,
        cover,
        registrationType,
        attendeeLimit
      }}
      validate={(values) => {
        const errors: { [key: string]: string } = {};
        if (!values.name) {
          errors.name = "Please enter event name";
        }
        return errors;
      }}
      onSubmit={(values) => onSubmit && onSubmit(values)}
      component={SettingsForm}
    >
    </Formik>
  );
};
export default BasicSettings;