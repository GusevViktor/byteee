import React from "react";
import style from "./style.module.scss";
import Layout from "src/features/Layout";
import { Button, Text, TextOP, Icons } from "@viktor666/byteee-kit";
import ImageBack from "./images/back.png";

const { BookOpen } = Icons;

const learningText = "We're not scared of today's life setbacks caused by "
  + "travel restrictions, "
  + "political turmoils, gaps in living standards, and technological imperfections. "
  + "Instead, we strive to make every next day better through"
  + "connecting people and giving "
  + "them the freedom to exchange knowledge, emotions, and experience"
  + "/n $We're not scared of today's life setbacks caused by travel restrictions, "
  +"political turmoils, gaps in living standards, and technological "
  +"imperfections.$ /n Thus, our "
  + "core employment values are your talents and personality, and there are no other"
  + " limitations or handicaps.";


const learningText2 = "We're not scared of today's life setbacks caused by travel "
+ "restrictions, political turmoils, gaps in "
+"living standards, and technological imperfections. Instead.";


const learning = [
  {
    id: "1",
    value: [
      {
        title: "Heading",
        text: learningText,
      },
      {
        title: "In a few words",
        text: learningText2,
      },
    ],
  },
  {
    id: "2",
    value: [
      {
        title: "Heading",
        text: learningText,
      },
      {
        title: "In a few words",
        text: learningText2,
      },
    ],
  },
  {
    id: "3",
    value: [
      {
        title: "Heading",
        text: learningText,
      },
      {
        title: "In a few words",
        text: learningText2,
      },
    ],
  },
  {
    id: "4",
    value: [
      {
        title: "Heading",
        text: learningText
      },
      {
        title: "In a few words",
        text: learningText2,
      },
    ],
  },
];

const LerningPage = () => {
  const {
    wrap,
    inner,
    main_subtitle,
    main_title,
    wrap_video,
    button_next_wrap,
    memo,
    book,
    title,
    para,
    subtitle,
    paragraph,
    note,
    paragraph_block,
    margin_none,
    button_all,
  } = style;

  const splitText = (text: string) => text.split("/n");

  const getNoteText = (text: string) => {
    const texts = text.split("$");
    return texts.length === 3 ? texts[1] : "";
  };

  return (
    <Layout gridTemplate>
      <div className={wrap}>
        <div className={inner}>
          <p className={main_subtitle}>
            <Text as="p" size={["xs", "xs", "s"]}>
              Season 1. Episode 2
            </Text>
          </p>
          <h1 className={main_title}>
            <TextOP as="p" bold font="inter" size={[6, 6, 5, 4]}>
              Signup. Profile settings
            </TextOP>
          </h1>
          <img
            width="100%"
            height="100%"
            className={wrap_video}
            src={ImageBack}
            alt="Video"
          />
          <div className={button_next_wrap}>
            <Button type="outline" size="m">
              Go to next episode
            </Button>
          </div>
          <p className={memo}>
            <div className={book}>
              <BookOpen size="s" color="grayscale600" />
            </div>
            <Text as="p" color="grayscale600" size="s">
              Text version
            </Text>
          </p>
          {learning.map(({ id, value }, learningIndex) => (
            <p
              key={id}
              className={[
                paragraph,
                learningIndex === learning.length - 1 ? margin_none : "",
              ].join(" ")}
            >
              {value.map((element, index) => (
                <p className={paragraph_block} key={`${id} ${element.title}`}>
                  {index === 0 ? (
                    <h3 className={title}>
                      <TextOP as="p" font="inter" size={6}>
                        {element.title}
                      </TextOP>
                    </h3>
                  ) : (
                    <h5 className={subtitle}>
                      <Text bold color="grayscale700" size="m">
                        {element.title}
                      </Text>
                    </h5>
                  )}
                  {splitText(element.text).map((text, indexText) => {
                    const noteText = getNoteText(text);
                    return (
                      <p
                        className={[
                          para,
                          indexText === splitText(element.text).length - 1
                            ? margin_none
                            : "",
                          noteText ? note : "",
                        ].join(" ")}
                        key={`${id} ${element.title} ${text}`}
                      >
                        <Text size="m">
                          {noteText || text}
                        </Text>
                      </p>
                    );
                  })}
                </p>
              ))}
            </p>
          ))}
        </div>
        <div className={button_all}>
          <Button type="outline">All episodes</Button>
        </div>
      </div>
    </Layout>
  );
};

export default LerningPage;
