import style from "./style.module.scss";
import React, { useEffect } from "react";
import { Formik } from "formik";
import { FormikProps } from "formik/dist/types";
import { Button, Input, Text, Icons } from "@viktor666/byteee-kit";
import { useOutletContext } from "react-router-dom";


const { wrap,
  title,
  label,
  input,
  form,
  fullwidth } = style;

const { Twitter, Linkedin, Instagram, Facebook, Globe } = Icons;
interface FormModel {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?:string;
  website?:string;
}

const SocialMedia = ({ setDirty }: { setDirty?: (dirty: boolean) => void }) => {

  const Form = ({
    values,
    handleChange,
    handleSubmit,
    dirty,
  }: FormikProps<FormModel>) => {
    const setDirtyOutlet = useOutletContext<(dirty:boolean) => void>();

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
      >
        <div className={wrap}>
          <div className={title}>
            <Text size={[6, 6, 5, 5, 4]} font="inter" bold>Social media </Text>
            <Button
              size="m"
              theme={"violet"}
              type={"solid"}
              htmlType={"submit"}>Save changes</Button>
          </div>
          <div className={form}>
            <div className={input}>
              <div className={label}>
                <Twitter size={"m"}/>
                <Text size={"m"}>Twitter</Text>
              </div>
              <div className={fullwidth}>
                <Input
                  name={"twitter"}
                  size="m"
                  value={values?.twitter || ""}
                  placeholder={"Your username or profile URL"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="solid"/>
            <div className={input}>
              <div className={label}>
                <Linkedin size={"m"}/>
                <Text size={"m"}>Linkedin</Text>
              </div>
              <div className={fullwidth}>
                <Input
                  name={"linkedin"}
                  size="m"
                  value={values?.linkedin || ""}
                  placeholder={"Your username or profile URL"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="solid"/>
            <div className={input}>
              <div className={label}>
                <Facebook size={"m"}/>
                <Text size={"m"}>Facebook</Text>
              </div>
              <div className={fullwidth}>
                <Input
                  name={"facebook"}
                  size="m"
                  value={values?.facebook || ""}
                  placeholder={"Your username or profile URL"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="solid"/>
            <div className={input}>
              <div className={label}>
                <Instagram size={"m"}/>
                <Text size={"m"}>Instagram</Text>
              </div>
              <div className={fullwidth}>
                <Input
                  name={"instagram"}
                  size="m"
                  value={values?.instagram || ""}
                  placeholder={"Your username or profile URL"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="solid"/>
            <div className={input}>
              <div className={label}>
                <Globe size={"m"}/>
                <Text size={"m"}>Website</Text>
              </div>
              <div className={fullwidth}>
                <Input
                  name="website"
                  size="m"
                  value={values?.website || ""}
                  placeholder={"Your username or profile URL"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <Formik<FormModel>
      initialValues={{ instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        website: "" }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      component={Form}
    />
  );
};

export default React.memo(SocialMedia);