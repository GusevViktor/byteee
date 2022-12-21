import React from "react";
import styles from "./ModalLoggedIn.module.scss";
import { Button, Logo, Icons, Text } from "@viktor666/byteee-kit";
import { ModalBack } from "src/features/Modals";
import Link from "../../../../features/Link";

const { X } = Icons;

interface ModalLoggedInProps {
  onClickEditProfile: () => void;
  onClickLogOut: () => void;
  onClose: () => void;
  mail: string;
  profession: string;
  company: string;
  isOpen: boolean;
}

const links = [
  {
    name: "Event catalog",
    href: "event-catalog",
  },
  {
    name: "Features",
    href: "features",
  },
  {
    name: "Pricing",
    href: "pricing",
  },
  {
    name: "Learning",
    href: "learning",
  },
];

const ModalLoggedIn = (props: ModalLoggedInProps) => {
  const {
    onClickEditProfile,
    onClickLogOut,
    isOpen,
    onClose,
    mail,
    profession,
    company,
  } = props;

  const {
    wrap,
    heading,
    list,
    buttons,
    item,
    logout_button,
    icon_wrap,
    description,
    text,
    text_margin,
    email,
    line,
  } = styles;

  const onClickEditProfileButton = () => {
    onClickEditProfile();
    onClose();
  };

  const onClickLogOutButton = () => {
    onClickLogOut();
    onClose();
  };

  const onClickCross = () => onClose();

  return (
    <ModalBack isOpen={isOpen} onClose={onClose}>
      <div className={wrap}>
        <div className={heading}>
          <Logo theme="dark"/>
          <div className={icon_wrap} onClick={onClickCross}>
            <X size="m" />
          </div>
        </div>
        <div className={description}>
          <div className={email}>
            <Text size="m">
              {mail}
            </Text>
          </div>
          <div className={text_margin}>
            <Text size="s">
              <span className={text}>{profession}</span>
            </Text>
          </div>
          <Text size="s">
            <span className={text}>{company}</span>
          </Text>
        </div>
        <div className={buttons}>
          <Button
            startIcon="Edit_2"
            type="outline"
            onClick={onClickEditProfileButton}
          >
            Edit profile
          </Button>
          <Button
            type="flat"
            size="s"
            onClick={onClickLogOutButton}
            className={logout_button}
          >
            Sign up
          </Button>
        </div>
        <div className={line} />
        <div className={list}>
          {links.map(({ name, href }) => (
            <div className={item} key={href}>
              <Link to={`/${href}`}>
                <Text size="m">
                  {name}
                </Text>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ModalBack>
  );
};

export default ModalLoggedIn;
