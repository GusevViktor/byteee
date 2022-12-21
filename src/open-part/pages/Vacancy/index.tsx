import React, { ChangeEvent, ReactElement, useRef, useState } from "react";
import style from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "src/features/Layout";
import api from "src/api/api";
import { Button, Input, TextOP, Icons, Text } from "@viktor666/byteee-kit";
import Link from "src/features/Link";
import { Formik, ErrorMessage } from "formik";
import { FormikProps } from "formik/dist/types";
import { scrollTo } from "src/helpers/navigation";
const { Paperclip } = Icons;
interface FormModel {
  name?: string;
  lastName?: string;
  message?: string;
  email?: string;
  format?: string;
  CV: FileList[number] | null;
  coverLetter?: FileList[number] | null | undefined;
}

const Vacancy = (): ReactElement => {
  const [isSubmittedOnce, setIsSubmittedOnce] = useState<boolean>(false);
  const [isCvValue, setIsCvValue] = useState<boolean>(false);
  const location = useLocation();
  const vacancyId = +location.pathname.split("/").slice(-1).
    join("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [vacancy] = api.vacancies().filter((el) => el.id === vacancyId);
  const navigate = useNavigate();

  const aboutbyteee = vacancy.aboutbyteee.
    split("/n").
    map((el) => <Text size={"m"} key={el.slice(10)}>{el}</Text>);
  const { X } = Icons;

  const VacancyForm = ({
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
    handleBlur,
  }: FormikProps<FormModel>) => {
    const refCV = useRef(null);

    return (
      <form
        onSubmit={(e) => {
          setIsSubmittedOnce(true);
          return handleSubmit(e);
        }}
        onBlur={handleBlur}
      >
        <div className={style.contentForms}>
          <div className={style.form}>
            <Input
              label="First Name"
              name="name"
              size="m"
              value={values?.name || ""}
              placeholder={""}
              onChange={handleChange}
              error={errors.name && touched.name ? errors?.name || "" : ""}
            />
            <Input
              label="Last Name"
              name="lastName"
              size="m"
              value={values?.lastName || ""}
              placeholder={""}
              onChange={handleChange}
              error={
                errors.lastName && touched.lastName ? errors?.lastName || "" : ""
              }
            />
            <Input
              label="Email"
              name="email"
              size="m"
              value={values?.email || ""}
              placeholder={""}
              onChange={handleChange}
              error={errors.email && touched.email ? errors?.email || "" : ""}
            />

            <div className={style.mt_resume}>
              <Text size={"m"}>Resume/CV</Text>
            </div>
            {values.CV && !errors.CV ? (
              <div className={style.file}>
                <TextOP as="p" size={[6]} bold>
                  {values.CV.name}
                </TextOP>
                <div
                  onClick={() => {
                    setFieldValue("CV", null);
                  }}
                >
                  <X size="m" color="grayscale500" />
                </div>
              </div>
            ) : (
              <div className={style.addFile}>
                <Paperclip size="m" color="violet600" />
                <span>Add file</span>
                <input
                  type="file"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("CV", e?.currentTarget?.files?.[0]);
                    setIsCvValue(true);
                  }}
                  ref={refCV}
                  name="CV"
                  id="CV"
                />
              </div>
            )}
            {(errors.CV && touched.CV && isCvValue) && (
              <ErrorMessage name="CV">
                {(msg) => (
                  <Text
                    size="xs"
                    color="red600"
                  >
                    {msg}
                  </Text>
                )}
              </ErrorMessage>
            )}
            <div>
              <Text as="span" size={"m"}>
                Cover letter
              </Text>
              &nbsp;
              <Text as="span" size={"m"} color={"grayscale600"}>
                (Optional)
              </Text>
            </div>

            {/* CoverLetter */}
            {values.coverLetter && !errors.coverLetter ? (
              <div className={style.file}>
                <TextOP as="p" size={[6]} bold>
                  {values.coverLetter.name}
                </TextOP>
                <div
                  onClick={() => {
                    setFieldValue("coverLetter", null);
                  }}
                >
                  <X size="m" color="grayscale500" />
                </div>
              </div>
            ) : (
              <div className={style.addFile}>
                <Paperclip size="m" color="violet600" />
                <span>Add file</span>
                <input
                  type="file"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("coverLetter", e?.currentTarget?.files?.[0]);
                  }}
                  name="coverLetter"
                  id="coverLetter"
                />
              </div>
            )}
            {(errors.coverLetter && touched.coverLetter) && (
              <ErrorMessage name="coverLetter">
                {(msg) => (
                  <Text
                    size="xs"
                    color="red600"
                  >
                    {msg}
                  </Text>
                )}
              </ErrorMessage>
            )}
            <div className={style.submit}>
              <Button
                type="solid"
                theme="violet"
                size="m"
                disabled={isSubmittedOnce}
              >
                Submit application
              </Button>
            </div>

            <p>
              By clicking “Submit application”, you acknowledge that you have read,
              understood and agree to the byteee{" "}
              <Link color="violet" to={"/privacy-policy"} size={"s"}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </form>
    );
  };

  return (
    <Layout gridTemplate={true}>
      <>
        <div className={style.vacancy}>
          <div className={style.mb}>
            <TextOP size={[6, 5, 5, 4, 4, 4]} font="sangbleu" as={"h2"} bold>
              {vacancy.title}
            </TextOP>
          </div>
          <p className={style.address}>{vacancy.address}</p>
          <Button
            type="solid"
            theme="violet"
            size="m"
            onClick={() => scrollTo(scrollRef)}
          >
            Apply now
          </Button>
          <h4 className={style.subTitle}>About byteee</h4>
          {aboutbyteee}
          <h4 className={style.subTitle}>What you get</h4>
          <ul>
            {vacancy.offerings.map((el) => (
              <li key={el}><Text size={"m"}>{el}</Text></li>
            ))}
          </ul>
          <h4 className={style.subTitle}>{"What you'll achieve"}</h4>
          <ul>
            {vacancy.duties.map((el) => (
              <li key={el}><Text size={"m"}>{el}</Text></li>
            ))}
          </ul>
          <h4 className={style.subTitle}>What you have</h4>
          <ul>
            {vacancy.requirements.map((el) => (
              <li key={el}><Text size={"m"}>{el}</Text></li>
            ))}
          </ul>
          <Text size={"m"}>{vacancy.description}</Text>
          <div className={style.stripe} ref={scrollRef}></div>
          <div className={style.mb_apply}>
            <TextOP size={[6, 5]} bold>Apply now</TextOP>
          </div>
          <Formik<FormModel>
            validateOnBlur
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              CV: null,
              coverLetter: null,
            }}
            validate={(values) => {
              const formatCV = values?.CV?.type?.split("/")?.slice(-1)?.
                join("");
              const formatCoverLetter = values?.coverLetter?.type?.
                split("/")?.
                slice(-1)?.
                join("");

              const correctFormat = "png" || "pdf" || "docs" || "txt" || "doc";
              const errors: Record<string, string> = {};

              if (!values.name) {
                errors.name = "Please enter your name";
              }
              if (!values.lastName) {
                errors.lastName = "Please enter your surname";
              }
              if (!values.CV) {
                errors.CV = "Please upload the resume/CV file";
              } else if (formatCV !== correctFormat) {
                errors.CV =
                  "Please check the file format. We allow "
                  +"PDF, DOC, DOCX, or TXT formats.";
              } else if (values.CV.size > 10000000) {
                errors.CV = "size";
              }

              if (values.coverLetter && formatCoverLetter !== correctFormat) {
                errors.coverLetter =
                  "Please check the file format. We allow "
                  +"PDF, DOC, DOCX, or TXT formats.";
              }
              if (values.coverLetter && values.coverLetter.size > 10000000) {
                errors.coverLetter = "size";
              }
              if (!values.email) {
                errors.email = "Please enter your email";
              } else if (
                !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  values.email
                )
              ) {
                errors.email = "The email format is incorrect";
              }
              if (!errors.email && !errors.name && !errors.CV && !errors.lastName) {
                setIsSubmittedOnce(false);
              }
              return errors;
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
              setIsSubmittedOnce(false);
            }}
            component={VacancyForm}
          />
        </div>
        <Button
          type="outline"
          theme="violet"
          size="m"
          className={style.seeOpenPositions}
          onClick={() => navigate("/careers")}
        >
          All open positions
        </Button>
      </>
    </Layout>
  );
};

export default Vacancy;
