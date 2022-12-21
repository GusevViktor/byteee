import { ModalTemplate } from "../../../../../close-part/features/Modals";
import style from "./style.module.scss";
import { Button, Icons, Input, Text } from "@viktor666/byteee-kit";
import React, { useEffect, useRef, useState } from "react";
import { useModal } from "../../../../../hooks";
import { copyUrlToClipboard } from "../../../../../helpers/copyUrlToClipboad";
import Link from "../../../../../features/Link";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

const { title,
  modalSharingWrap,
  copy,
  search,
  socialMedia,
  tippy_tooltip } = style;
const {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Linkedin
} = Icons;

const ModalEventSharing = () => {
  const { isOpenModal, closeModal, openModal } = useModal();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    setTimeout(() => setVisible(false), 4000);
  }, [visible]);
  return (
    <ModalTemplate
      isOpen={isOpenModal}
      onClose={closeModal}
      className={modalSharingWrap}
      OpenElement={
        <Button
          type="flat"
          startIcon="Share_2"
          size="xs"
          onClick={openModal}>
          Share
        </Button>}>
      <div className={title}>
        <Text size={[6, 6, 4]} bold>Share event</Text>
      </div>
      <div className={search}>
        <Input
          size="m"
          placeholder="Enter name or username"
          onChange={(e) => e.currentTarget.value} value="" />
        <Button>
          Send link
        </Button>
      </div>
      <div className={copy} ref={ref}>
        <Button
          type="flat"
          startIcon="Link"
          onClick={() => {
            copyUrlToClipboard();
            setVisible(true);
          }}
        >
          Copy link
        </Button>
      </div>
      <Tippy
        content="Copied to clipboard"
        className={tippy_tooltip}
        visible={visible}
        theme="light"
        arrow={false}
        placement="auto"
        reference={ref}
        appendTo="parent"/>
      <div className={socialMedia}>
        <Link
          to={"https://twitter.com/byteeehq"}
          external={true}
          hoverUnderLine={false}
          target={"_blank"}
        >
          <TwitterIcon size={"m"} color={"violet600"} />
        </Link>
        <Link
          to={"https://www.linkedin.com/company/byteee"}
          external={true}
          hoverUnderLine={false}
          target={"_blank"}
        >
          <Linkedin size={"m"} color={"violet600"} />
        </Link>
        <Link
          to={"https://www.facebook.com/byteeehq"}
          external={true}
          hoverUnderLine={false}
          target={"_blank"}
        >
          <FacebookIcon size={"m"} color={"violet600"} />
        </Link>
        <Link
          to={"https://www.instagram.com/byteeehq"}
          external={true}
          hoverUnderLine={false}
          target={"_blank"}
        >
          <InstagramIcon size={"m"} color={"violet600"} />
        </Link>
      </div>
    </ModalTemplate>
  );
};
export default ModalEventSharing;