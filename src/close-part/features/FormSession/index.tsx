import React from "react";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import { Label, Block } from "../Forms";
import style from "./style.module.scss";
import { Icons, Input, TextEditor, TimePicker, Select, Button, Text } from "@viktor666/byteee-kit";

type speakerType = {
  value: string;
  label: string;
};

export interface FormSessionValues {
  name?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  speaker?: speakerType;
}

interface FormSessionProps extends FormSessionValues {
  numberSession?: string;
  editMode?: boolean;
  onSubmit?: (values: FormSessionValues) => void;
  onClickArrow?: () => void;
  onDelete?: () => void;
  speakers: speakerType[];
}

const FormSession = (props : FormSessionProps) => {

  const {
    name,
    description,
    startTime,
    endTime,
    speakers,
    speaker,
    editMode = false,
    onClickArrow,
    onSubmit,
    numberSession,
    onDelete,
  } = props;

  const {
    ChevronUp,
  } = Icons;

  const initialValues = {
    name: name || "",
    description: description || "",
    startTime: startTime || undefined,
    endTime: endTime || undefined,
    speakers,
    speaker: speaker || {
      value: "",
      label: "",
    },
  };

  const CustomForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
  }: FormikProps<FormSessionValues>) => {

    const {
      grid_date,
      time,
      select,
      button_wrap,
      wrap,
      number_session,
      chevron_up,
      wrap_border_mobile,
      buttons,
      button_delete,
      grid_date__no_margin,
      speaker_style,
      time_margin
    } = style;

    const isDisabled =
      !values?.name ||
      !values?.startTime ||
      !values?.endTime ||
      !values?.endTime;

    const filterStartTime: [number, number] | undefined = values.startTime ?
      [values.startTime.getHours(), values.startTime.getMinutes()] : undefined;
    const filterEndTime: [number, number]| undefined = values.endTime ?
      [values.endTime.getHours(), values.endTime.getMinutes()] : undefined;

    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={[
          editMode && wrap_border_mobile,
          wrap,
        ].join(" ")}
      >
        <div className={number_session}>
          <Text
            as="span"
            size={["m", "m", "m", 6]}
          >
            {numberSession}
          </Text>
        </div>
        {editMode && (
          <div
            className={chevron_up}
            onClick={onClickArrow}
          >
            <ChevronUp size="m" color="violet600" />
          </div>
        )}
        <Block>
          <Label>Name</Label>
          <Input
            size="m"
            placeholder="Enter a session name"
            value={`${values.name}`}
            onChange={
              e => setFieldValue("name", e.currentTarget.value)
            }
            name="name"

          />
        </Block>
        <Block>
          <Label isOptional>Description</Label>
          <TextEditor
            placeholder={"Enter any details about this session: "
              +"discussion points, links, bonus materials, etc."}
            onChange={() => handleChange}
          />
        </Block>
        <div className={[
          grid_date,
          !editMode ? grid_date__no_margin : ""
        ].join(" ")}>
          <div className={[time, time_margin].join(" ")}>
            <Label>Start time</Label>
            <TimePicker
              name="startTime"
              value={values.startTime}
              placehalder=""
              beforeTime={filterEndTime}
              onChange={val => {
                setFieldValue("startTime", val);
              }}
            />
          </div>
          <div className={time}>
            <Label>End time</Label>
            <TimePicker
              name="endTime"
              value={values.endTime}
              placehalder=""
              afterTime={filterStartTime}
              onChange={val => {
                setFieldValue("endTime", val);
              }}
            />
          </div>
        </div>
        {editMode && (
          <Block className={speaker_style}>
            <Label isOptional>Speaker</Label>
            <div className={select}>
              <Select
                option={values?.speaker || { label: "", value: "" }}
                options={speakers}
                onClick={(val) => setFieldValue("speaker", val)}
                placeholder="Select"
                size="m"
              />
            </div>
          </Block>
        )}
        <div className={buttons}>
          {onSubmit && (
            <div className={button_wrap}>
              <Button
                theme="violet"
                type="outline"
                htmlType="submit"
                disabled={isDisabled}
              >
                Save session
              </Button>
            </div>
          )}
          {(editMode && onDelete) && (
            <div className={button_delete}>
              <Button
                type="flat"
                theme="violet"
                onClick={onDelete}
              >
                Delete session
              </Button>
            </div>
          )}
        </div>
      </form>
    );
  };
  return (
    <Formik<FormSessionValues>
      validateOnBlur
      initialValues={initialValues}
      component={CustomForm}
      onSubmit={(values) => onSubmit && onSubmit(values)}
    >
    </Formik>
  )
  ;
};

export default FormSession;