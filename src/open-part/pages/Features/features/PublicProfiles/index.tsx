import React, { ReactElement } from "react";
import { TextOP, Text } from "@viktor666/byteee-kit";
import style from "./style.module.scss";
import Iphone from "src/assets/images/IPhone_features.png";
import white_triangle_top
  from "src/assets/images/white_triangle_topright.svg";
import white_substract_bottom
  from "src/assets/images/white_substract_bottomleft.svg";
import orange_substract
  from "src/assets/images/orange_triangle_bottomRight.svg";
import white_square
  from "src/assets/images/white_square.svg";
import white_substract_top
  from "src/assets/images/white_substract_topright.svg";
import white_triangle_bottom
  from "src/assets/images/white_triangle_bottomright.svg";
import Link from "src/features/Link";

const PublicProfiles = (): ReactElement => (
  <>
    <div className={`${style.title} ${style.title_wrap}`}>
      <TextOP
        size={[5, 5, 3, 3, 2, 2, 1]}
        bold
        font={"sangbleu"}
      >
        What we have in store for you
      </TextOP>
    </div>
    <div className={style.p_wrap}>
      <Text size={["m"]} font={"inter"} color={"grayscale900"}>
        Why choose byteee? Let us show you just a few platform highlights.
      </Text>
    </div>
    <div className={style.content}>
      <div className={style.imagesSection}>
        <img src={Iphone} className={style.mockup} />
        <img
          src={white_triangle_top}
          alt={""}
          className={`${style.whiteTriangleTop} ${style.images}`}
        />
        <img
          src={white_triangle_top}
          alt={""}
          className={`${style.whiteTriangleTop2} ${style.images}`}
        />
        <img
          src={orange_substract}
          alt={""}
          className={`${style.orangeTriangle} ${style.images}`}
        />
        <img
          src={white_substract_bottom}
          alt={""}
          className={`${style.whiteSubstractBottom} ${style.images}`}
        />
        <img
          src={white_square}
          alt={""}
          className={`${style.whiteSquare} ${style.images}`}
        />
        <img
          src={white_triangle_bottom}
          alt={""}
          className={`${style.whiteTriangleBottom} ${style.images}`}
        />
        <img
          src={white_substract_top}
          alt={""}
          className={`${style.whiteSubstractTop} ${style.images}`}
        />
      </div>
    </div>
    <div className={style.text}>
      <div className={style.heading}>
        <TextOP
          size={[6, 6, 5, 5, 4, 4, 3]}
          bold
          font={"sangbleu"}
        >
          Public profiles
        </TextOP>
      </div>
      <div className={style.paragraph}>
        <Text size={"m"} font={"inter"} color={"grayscale900"}>
          Right after the signup, you can see personal and business details each user
          made publicly available. It facilitates making connections and finding
          knowledgeable speakers for your events.
        </Text>
        <Text size={"m"} font={"inter"} color={"grayscale900"}>
          You can make your own{" "}
          <Link to={"/"} color={"violet"}>
            profile
          </Link>{" "}
          public and customize privacy preferences as well, so other users will also
          be able to connect with you.
        </Text>
      </div>
    </div>
  </>
);
export default PublicProfiles;
