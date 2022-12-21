import React, { useState } from "react";
import { Text, Button, Icons } from "@viktor666/byteee-kit";
import Link from "src/features/Link";
import classes from "./style.module.scss";

interface PersonProps {
  srcIcon: string;
  following: string;
  name: string;
  followers: string;
  position: string;
  company: string;
  description?: string;
  linkSite?: string;
  site?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

const Person = (props: PersonProps) => {
  const [isDescription, setIsDescription] = useState(true);

  const {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    Linkedin: LinkedinIcon,
  } = Icons;

  const {
    wrap,
    avatar,
    head,
    head_info,
    head_and_info,
    information,
    info_text,
    info_text__margin,
    button_wrap,
    button_wrap__inverted,
    description_wrap,
    description_text,
    link_my_site,
    icons,
    button_edit_settings,
    description_desktop,
    description_mobile,
    social_networks,
  } = classes;

  const {
    name,
    srcIcon,
    following,
    followers,
    position,
    company,
    description,
    site,
    linkSite,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = props;

  const onClickButton = () => {
    setIsDescription(!isDescription);
  };

  const getDescriptionBlock = () => (
    <div className={description_wrap}>
      <div className={description_text}>
        <Text size="m">
          {description}
        </Text>
      </div>
      <div className={social_networks}>
        {site && (
          <div className={link_my_site}>
            <Link color="blue" to={linkSite || ""}>
              {site}
            </Link>
          </div>
        )}
        <div className={icons}>
          {twitter && (
            <Link to={twitter} hoverUnderLine={false}>
              <TwitterIcon />
            </Link>
          )}
          {facebook && (
            <Link to={facebook} hoverUnderLine={false}>
              <FacebookIcon />
            </Link>
          )}
          {linkedin && (
            <Link to={linkedin} hoverUnderLine={false}>
              <LinkedinIcon />
            </Link>
          )}
          {instagram && (
            <Link to={instagram} hoverUnderLine={false}>
              <InstagramIcon />
            </Link>
          )}
        </div>
      </div>
      <div className={button_edit_settings}>
        <Button
          theme="violet"
          type="outline"
        >
          Edit profile
        </Button>
      </div>
    </div>
  );

  return (
    <div className={wrap}>
      <div className={head_and_info}>
        <div className={head}>
          <img
            className={avatar}
            src={srcIcon}
          />
          <div className={head_info}>
            <Text size={["m", "m", "m", "m", "m", "m", 6]} >
              {name}
            </Text>
            <Text size="s" color="grayscale600">
              {position}
            </Text>
            <Text size="s" color="grayscale600">
              {company}
            </Text>
          </div>
        </div>
        <div className={information}>
          <div className={info_text}>
            <Text size={[5, 5, 5, 5, 6, 6, 5]}>
              {following}
            </Text>
            <Text size={["s", "s", "s", "s", "xs", "xs", "s"]}>
              Following
            </Text>
          </div>
          <div className={[info_text, info_text__margin].join(" ")}>
            <Text size={[5, 5, 5, 5, 6, 6, 5]}>
              {followers}
            </Text>
            <Text size={["s", "s", "s", "s", "xs", "xs", "s"]}>
              Followers
            </Text>
          </div>
        </div>
      </div>
      <div className={description_desktop}>
        {getDescriptionBlock()}
      </div>
      <div className={description_mobile}>
        {(isDescription && description) && getDescriptionBlock()}
      </div>
      <div className={
        [
          isDescription ? button_wrap__inverted : "",
          button_wrap,
        ].join(" ")
      }>
        <Button
          startIcon="ChevronDown"
          theme="violet"
          type="flat"
          onClick={onClickButton}
        >
          {isDescription ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
};

export default Person;