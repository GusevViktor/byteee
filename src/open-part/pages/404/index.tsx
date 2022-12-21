import React, { ReactElement } from "react";
import Layout from "src/features/Layout";
import style from "./style.module.scss";
import { ReactComponent as NotFound } from "./img/404.svg";
import DotTablet from "./img/dot-tablet.png";
import SubtractGray from "./img/subtract-gray.png";
import RectangleGreen from "./img/rectangle-green.png";
import GroupDots from "./img/group-dots.png";
import { Text, Button } from "@viktor666/byteee-kit";
import { useNavigate, useLocation } from "react-router-dom";

const NotFoundPage = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location?.state as {prevPath: string};
  const prevPath = locationState?.prevPath || null;

  const {
    wrap,
    inner,
    title,
    text_first,
    text_second,
    button,
    dot_tablet,
    information,
    dot_group_right_bottom,
    group_dots,
    dot_desktop,
    go_back,
    navigate_buttons,
  } = style;

  return (
    <Layout gridTemplate={true}>
      <div className={wrap}>
        <div className={inner}>
          <img src={DotTablet} className={dot_tablet} />
          <img src={SubtractGray} className={dot_desktop} />
          <img src={GroupDots} className={group_dots} />
          <div className={dot_group_right_bottom}>
            <img src={SubtractGray} />
            <img src={RectangleGreen} />
          </div>
          <div className={title}>
            <NotFound />
          </div>
          <div className={information}>
            <div className={text_first}>
              <Text size={[6, 6, 5, 5, 4]} color="grayscale900">
                {"We don’t have such page"}
              </Text>
            </div>
            <div className={text_second}>
              <Text size={["m"]} color="grayscale700">
                {"Check the URL – if it’s OK, the page might be " +
                "deleted or moved. Probably, a visit to our event " +
                "catalog might cheer you up?"}
              </Text>
            </div>
          </div>
        </div>
        <div className={navigate_buttons}>
          {prevPath && (
            <div className={go_back}>
              <Button
                type={"flat"}
                theme="violet"
                onClick={() => navigate(-1)}
              >
                Go back
              </Button>
            </div>
          )}
          <div className={button}>
            <Button onClick={() => navigate("/event-catalog")}>
              Go to Event catalog
            </Button>
          </div>
        </div>

      </div>
    </Layout>
  );
};
export default NotFoundPage;
