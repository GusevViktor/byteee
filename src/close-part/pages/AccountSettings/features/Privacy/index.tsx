import style from "./style.module.scss";
import React, { useEffect } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import { Button, Text, Checkbox, RadioGroup } from "@viktor666/byteee-kit";
import { ProfileType } from "./ProfileType";
import { useOutletContext } from "react-router-dom";


const { wrap,
  title,
  content,
  form,
  group,
  description,
  profile_types,
  visibility,
  display_none,
  hr_bottom,
  form_width } = style;

interface FormModel {
  profileType:string;
  role:string[];
  profileVisibility:string;
  startChat:boolean;
}
const initialState: FormModel = {
  role: ["organizer"],
  profileType: "public",
  profileVisibility: "",
  startChat: true
};
const visibilityOptions = [
  {
    label: "Anyone",
    value: "anyone",
    defaultChecked: true,
  }, {
    label: "My followers only",
    value: "followers",
  },
];
const Privacy = ({ setDirty }: { setDirty?: (dirty: boolean) => void }) => {
  const Form = ({
    handleSubmit,
    handleChange,
    resetForm,
    values,
    dirty
  }: FormikProps<FormModel>) => {
    const setDirtyOutlet = useOutletContext<(dirty: boolean) => void>();

    useEffect(() => {
      if (setDirtyOutlet) {
        setDirtyOutlet(dirty);
      }
      if (setDirty) {
        setDirty(dirty);
      }
    }, [dirty]);

    return (
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={form_width}
      >
        <div className={wrap}>
          <div className={title}>
            <Text size={[6, 6, 5, 5, 4]} font="inter" bold>Privacy </Text>
            <Button
              size="m"
              theme={"violet"}
              type={"solid"}
              htmlType={"submit"}>
              Save changes
            </Button>
          </div>
          {/*<hr className={`${hr_top} solid`}/>*/}
          <div className={content}>
            <div className={description}>
              <Text size={"m"}>Our platform supports networking and transparency.
                But you decide what type of profile you
                want and what information to share with others.
                Your profile photo and full name (if added)
                always stay visible.</Text>
            </div>
            <div className={form}>
              <div role="group"
                aria-labelledby="my-radio-group"
                className={profile_types}>
                <ProfileType
                  title={"Public"}
                  description={"My profile info and events are visible" +
                  " to those I choose below"}
                  value={"public"}
                  name={"profileType"}
                  onChange={(e) => {
                    handleChange(e);
                    resetForm({ values: initialState });
                  }}
                />
                <ProfileType
                  title={"Private"}
                  description={"Nobody can see my profile info and events"}
                  value={"private"}
                  name={"profileType"}
                  onChange={(e) => {
                    handleChange(e);
                    resetForm({
                      values: {
                        role: [],
                        profileType: "private",
                        profileVisibility: "",
                        startChat: values.startChat
                      }
                    });
                  }}/>
              </div>
              <div
                className={values.profileType === "public" ?
                  visibility : display_none}>
                <Text size={"m"}>Who can see my profile info and my events?</Text>
                <RadioGroup
                  onChange={handleChange}
                  items={visibilityOptions}
                  name={"profileVisibility"}
                  className={group}
                />
                <Text size={"m"}>Show events where I’m:</Text>
                <div role="group" aria-labelledby="checkbox-group" className={group}>
                  <Checkbox label="Organizer"
                    name="role"
                    size="m"
                    value="organizer"
                    checked={values.role.includes("organizer")}
                    onChange={(e) => handleChange(e)}
                  />
                  <Checkbox label="Speaker"
                    name="role"
                    size="m"
                    value="speaker"
                    onChange={(e) => handleChange(e)}
                  />
                  <Checkbox label="Attendee"
                    name="role"
                    size="m"
                    value="attendee"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <hr className={`${hr_bottom} solid`}/>
              <Checkbox
                name="startChat"
                label="Allow other users to start chat dialogs with me"
                size={"m"}
                checked={values.startChat}
                onChange={(e) => handleChange(e)}/>
            </div>
          </div>
        </div>
      </form>);
  };
  return (
    <Formik<FormModel>
      initialValues={{ role: ["organizer"],
        profileType: "public",
        profileVisibility: "anyone",
        startChat: true }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      component={Form}
    />
  );
};

export default React.memo(Privacy);