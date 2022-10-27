import styled from "styled-components";

interface StyledDialogContainerProps {
  isOpen: boolean;
}
interface StyledBackgroundDialog extends StyledDialogContainerProps {
  closeOnOverlayClick?: boolean;
}

export const StyledDialogContainer = styled.div<StyledDialogContainerProps>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const StyledDialog = styled.div`
  background: #ffffff;
  overflow-y: auto;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 90%;
`;

export const StyledDiv = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;

export const StyledBackgroundDialog = styled.div<StyledBackgroundDialog>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: ${(props) => (props.closeOnOverlayClick ? "auto" : "none")};
  z-index: 999;
`;
