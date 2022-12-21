import { useState, useEffect } from "react";
import { useScrollLock } from "../hooks";

export const useModal = (blockScroll=true) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => () => {
    isOpenModal && blockScroll && unlockScroll();
  }, [isOpenModal]);

  const openModal = () => {
    setOpenModal(true);
    blockScroll && lockScroll();
  };
  const closeModal = () => {
    setOpenModal(false);
    blockScroll && unlockScroll();
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
};
