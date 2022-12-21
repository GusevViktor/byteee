import React, { useEffect, useState } from "react";
import { Button, Text, Input, Textarea, PhotoUploader } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import { FormikProps } from "formik/dist/types";
import { Formik } from "formik";
import Tooltip from "src/close-part/features/Tooltip";
import { UploadAvatarModal } from "src/close-part/features/Modals";
import { fileReader } from "src/helpers/fileReader";
import { useOutletContext } from "react-router-dom";


const { wrap, title, content, form_width } = style;
interface FormModel {
  name?: string;
  surname?: string;
  about?: string;
  company?:string;
  role?:string;
  username?:string;
  avatar?:any;
}


const Personal = ({ setDirty }: { setDirty?: (dirty: boolean) => void }) => {
  const [file, setFile] = useState<string>();
  const setDirtyOutlet = useOutletContext<(dirty:boolean) => void>();

  const Form = ({
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    dirty,
    setFieldValue,
    touched,
  }: FormikProps<FormModel>) => {
    const [symbolsAmount, setSymbolsAmount] = useState(160);
    useEffect(() => {
      values.about && setSymbolsAmount(values.about?.length);
      !values.about && setSymbolsAmount(160);
    }, [values.about?.length]);

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
        onBlur={handleBlur}
        onSubmit={(e) => handleSubmit(e)}
        className={form_width}
      >
        <div className={wrap}>
          <div className={title}>
            <Text size={[6, 6, 5, 5, 4]} font="inter" bold>Personal </Text>
            <Button size="m" theme={"violet"} type={"solid"}
              htmlType={"submit"}
            >
              Save changes
            </Button>
          </div>
          <div className={content}>
            <div>
              <UploadAvatarModal
                file={file}
                onSave={setFile}
                OpenElement={(openModal) => <PhotoUploader
                  onChange={(e) => {
                    fileReader(e, setFile);
                    setFieldValue("avatar", e.currentTarget?.files?.[0]);
                  }}
                  onClickEdit={openModal}
                  srcImage={file}/>}/>
            </div>
            <div className={style.form}>
              <Input
                label={"First name"}
                name={"name"}
                size="m"
                value={values?.name || ""}
                placeholder={"Your first name"}
                onChange={handleChange}
                labelIcon={
                  <Tooltip>
                    Required to use all platform features
                  </Tooltip>
                }
                error={errors.name && touched.name ? errors?.name || "" : ""}
              />
              <Input
                label={"Last name"}
                name="surname"
                size="m"
                value={values?.surname || ""}
                placeholder={"Your family name"}
                onChange={handleChange}
                labelIcon={
                  <Tooltip>
                     Required to use all platform features
                  </Tooltip>
                }
                error={errors.surname && touched.surname ?
                  errors?.surname || "" : ""}
              />
              <Textarea
                label="About"
                name="about"
                symbolsAmount={values.about ? 160 - symbolsAmount : symbolsAmount}
                rows={4}
                placeholder={"Your education, hobbies, interests," +
                " music tastes, or how many ants your ant farm holds."}
                value={values.about}
                onChange={(e) => {
                  handleChange(e);
                }}
                maxLength={160}
              />
              <Input
                label={"Company"}
                name="company"
                size="m"
                value={values?.company || ""}
                placeholder={"Company you work for"}
                onChange={handleChange}
                error={errors.company && touched.company ?
                  errors?.company || "" : ""}
              />
              <Input
                label={"Business role"}
                name="role"
                size="m"
                value={values?.role || ""}
                placeholder={"Your job title or what you do"}
                onChange={handleChange}
                error={errors.role && touched.role ? errors?.role || "" : ""}
              />
              <Input
                label="Username"
                name="username"
                size="m"
                value={values?.username || ""}
                placeholder={""}
                onChange={handleChange}
                error={errors.username && touched.username ?
                  errors?.username || "" : ""}
              />
            </div>
          </div>
        </div>
      </form>);
  };
  return (
    <Formik<FormModel>
      initialValues={{ name: "", surname: "", about: "",
        company: "", username: "darlene123", avatar: "" }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validateOnChange={true}
      validate={(values) => {
        const errors: { [key: string]: string } = {};
        if (values.name && values.name?.length > 25) {
          errors.name = "Too long. Maximum length is 25 characters";
        } else if (values.surname && values.surname?.length > 25){
          errors.surname = "Too long. Maximum length is 25 characters";
        } else if (values.company && values.company?.length > 50){
          errors.company = "Too long. Maximum length is 50 characters";
        } else if (values.role && values.role?.length > 50){
          errors.role = "Too long. Maximum length is 50 characters";
        } else if (!values.username){
          errors.username = "Please enter a username";
        }
        return errors;
      }}
      component={Form}
    />
  );
};
export default React.memo(Personal);