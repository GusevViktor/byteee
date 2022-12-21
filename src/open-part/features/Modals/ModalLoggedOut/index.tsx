import React from "react";
import styles from "./ModalLoggedOut.module.scss";
import { Button, Text, Logo, Icons } from "@viktor666/byteee-kit";
import { ModalBack } from "src/features/Modals/ModalBack";
import Link from "src/features/Link";

const { X } = Icons;

interface ModalLoggedOutProps {
  onClickLogin: () => void;
  onClickSignUp: () => void;
  onClose: () => void;
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

const ModalLoggedOut = (props: ModalLoggedOutProps) => {
  const { onClickLogin, onClickSignUp, isOpen, onClose } = props;

  const { wrap, heading, list, buttons, item, icon_wrap } = styles;

  const onClickLoginButton = () => {
    onClickLogin();
    onClose();
  };

  const onClickSignUpButton = () => {
    onClickSignUp();
    onClose();
  };

  const onClickCross = () => onClose();

  return (
    <ModalBack isOpen={isOpen} onClose={onClose}>
      <div className={wrap}>
        <div className={heading}>
          <Logo theme="dark" />
          <div className={icon_wrap} onClick={onClickCross}>
            <X size="m" color="grayscale700" />
          </div>
        </div>
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
        <div className={buttons}>
          <Button type="flat" onClick={onClickLoginButton}>
            Log in
          </Button>
          <Button onClick={onClickSignUpButton} size="s">
            Sign up
          </Button>
        </div>
      </div>
    </ModalBack>
  );
};

export default ModalLoggedOut;
