import React, { useState, useEffect } from "react";
import { useDesktopType, useModal } from "src/hooks";
import ModalDeleteItem from "./ModalDeleteItem";
import styles from "./style.module.scss";
import { Text, Input, Icons } from "@viktor666/byteee-kit";
import ChatList from "./ChatList";
import { ChatData } from "../Chat/data";
import Arrow from "./img/white_triangle.svg";
import ChatDialogs, { ChatI as ChatDialogsI } from "./ChatDialogs";
import MuteBellButton from "./MuteBellButton";

export interface ChatProps {
  onClose?: () => void;
  onClickHeader?: () => void;
  type: "mobile" | "desktop";
  isOpen: boolean;
}

const Chat = (props: ChatProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<ChatDialogsI[]>(ChatData);
  const [isMute, setIsMute] = useState(false);
  const [deleteItem, setDeleteItem] = useState<ChatDialogsI | undefined>();
  const [itemChat, setItemChat] = useState<ChatDialogsI | undefined>();
  const isDesktop = useDesktopType();
  const { isOpenModal, closeModal, openModal } = useModal();

  useEffect(() => {
    if(isDesktop) {
      onClose && onClose();
    }
  }, [isDesktop]);

  const { ChevronDown, XCircle } = Icons;

  const {
    onClose,
    type,
    isOpen,
    onClickHeader,
  } = props;

  const {
    wrap,
    wrap_desktop,
    wrap_shadow,
    header,
    search,
    bell,
    arrow_icon,
    arrow_icon__open,
    chatList,
    header_mobile,
    search_input,
    arrow,
    no_matches_texts,
    no_matches_text,
  } = styles;

  const filterData = (value: string, data: ChatDialogsI[]) => {
    setData(
      data.filter((item) => item.name.includes(value))
    );
  };

  const onDelete = (item: ChatDialogsI) => {
    setDeleteItem(item);
    openModal();
  };

  const onDeleteItem = () => {
    if(deleteItem) {
      const newData = data.filter(e => e.id !== deleteItem.id);
      setData(newData);
    }
    closeModal();
  };
  return (
    <>
      {isDesktop && (
        <img
          src={Arrow}
          alt={"white arrow"}
          className={arrow}
        />
      )}
      {deleteItem && (
        <ModalDeleteItem
          isOpen={isOpenModal}
          onClose={closeModal}
          onClickDelete={onDeleteItem}
          item={deleteItem}
        />
      )}
      <div className={
        [
          wrap,
          type === "desktop" && wrap_desktop,
          !isOpen && wrap_shadow,
        ].join(" ")
      }>
        {!itemChat && (
          <>
            <div
              className={[
                header,
                header_mobile
              ].join(" ")}
              onClick={() => (
                type === "mobile" ? onClose && onClose() :
                  onClickHeader && onClickHeader()
              )}>
              <Text size={["m", "m", "m", "m", 6]} bold>
                Chat
              </Text>

              <div
                className={
                  [
                    arrow_icon,
                    isOpen && arrow_icon__open,
                  ].join(" ")}
              >
                <ChevronDown size="m" color="violet600" />
              </div>

            </div>
            {(isOpen) && (
              <>
                <div className={search}>
                  <div className={search_input}>
                    <Input
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.currentTarget.value);
                        filterData(e.currentTarget.value, ChatData);
                      }}
                      startIcon="Search"
                      placeholder="Search by name"
                      size="m"
                    />
                  </div>
                  <div className={bell}>
                    <MuteBellButton
                      isMute={isMute}
                      onClick={() => setIsMute(!isMute)}
                    />
                  </div>
                </div>
                <div className={chatList}>
                  <ChatList
                    data={data}
                    onClick={e => setItemChat(e)}
                    onDelete={onDelete}
                    searchValue={searchValue}
                  />
                  {(searchValue && data.length === 0) && (
                    <div className={no_matches_texts}>
                      <XCircle size="m" color="grayscale600"/>
                      <div className={no_matches_text}>
                        <Text
                          size="m"
                          color="grayscale600"
                        >
                        No matches for
                        </Text>
                        <Text
                          size="m"
                          color="grayscale600"
                        >
                          {`“${searchValue}” found`}
                        </Text>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        )}
        {itemChat && (
          <ChatDialogs
            type={itemChat.type}
            id={itemChat.id}
            name={itemChat.name}
            icon={itemChat.icon}
            messages={itemChat.messages}
            countParticipiants={20}
            isOnline={itemChat.isOnline}
            isVerified={itemChat.isVerified}
            onBack={() => setItemChat(undefined)}
          />
        )}
      </div>
    </>
  );
};

export default Chat;