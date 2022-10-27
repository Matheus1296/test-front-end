import React, { ReactNode, useEffect, useRef } from "react";
import {
  StyledBackgroundDialog,
  StyledDialog,
  StyledDialogContainer,
  StyledDiv,
} from "./styles";
import Title from "../Title";
import IconButton from "../IconButton";

type DialogProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
};

function Dialog({
  title,
  onClose,
  isOpen,
  closeOnOverlayClick,
  children,
}: DialogProps) {
  const bodyRef = useRef(document.querySelector("body"));

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        if (isOpen) {
          bodyRef.current.style.overflow = "hidden";
        } else {
          bodyRef.current.style.overflow = "";
        }
      }
    };

    updatePageScroll();
  }, [isOpen]);

  useEffect(() => {
    const onKeyPress = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <>
      <StyledDialogContainer isOpen={isOpen}>
        <StyledDialog>
          <div style={{ padding: "0px 32px 32px 32px" }}>
            <StyledDiv>
              <Title>{title}</Title>
              <IconButton onClick={onClose} />
            </StyledDiv>
            {children}
          </div>
        </StyledDialog>
        <StyledBackgroundDialog
          onClick={onClose}
          isOpen={isOpen}
          closeOnOverlayClick={closeOnOverlayClick}
        />
      </StyledDialogContainer>
    </>
  ) : null;
}

export default Dialog;
