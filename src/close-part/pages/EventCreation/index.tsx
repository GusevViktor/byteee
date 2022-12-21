import Layout from "src/close-part/features/Layout";
import React, { useState } from "react";
import style from "./style.module.scss";
import { Icons, Text } from "@viktor666/byteee-kit";
import BasicSettings from "./features/BasicSettings";
import EventLineup from "./features/EventLineup";
import EventPreview from "./features/EventPreview";
import createStepper from "./features/Stepper";
import { FinilizerForm } from "./features/Finalizer";
import { useLocation } from "react-router";

const { content, title, preview, content_position } = style;
const { Box, Codesandbox, CheckSquare } = Icons;


const stepsArray = [
  {
    label: "Basic",
    icon: <Box color="grayscale500" size="s" />,
    Component: BasicSettings
  },
  {
    label: "Lineup",
    icon: <Codesandbox color="grayscale500" size="s" />,
    Component: EventLineup
  },
  {
    label: "Preview",
    icon: <CheckSquare color="grayscale500" size="s" />,
    Component: EventPreview
  }
];

const EventCreation = () => {
  const [step, setStep] = useState(1);
  const { search } = useLocation();
  const finilizerType = new URLSearchParams(search).get("type");
  const [StepperHeader, StepperComponent] = createStepper({ stepsArray, setStep });
  return (
    <Layout
      page="event-creation"
      contentClassName={ finilizerType ? content_position : ""}>
      {finilizerType ?
        <FinilizerForm type={finilizerType} />
        :
        <React.Fragment>
          <div className={content}>
            <div className={title}>
              <Text size={[6, 6, 5, 5, 5, 5, 4]} bold font="inter">New event</Text>
            </div>
            <StepperHeader />
          </div>
          <div className={`${content} ${step === 3 && preview}`}>
            <StepperComponent />
          </div>
        </React.Fragment>
      }
    </Layout>);
};
export default EventCreation;
