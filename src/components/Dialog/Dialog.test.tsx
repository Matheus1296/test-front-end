import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Dialog from "./index";

test("render dialog component", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog onClose={handleClick} closeOnOverlayClick={true} isOpen={true} />
    </div>
  );
  const linkElement = screen.getByTestId("styled-dialog");
  expect(linkElement).toBeInTheDocument();
});

test("calls onClose prop when clicked", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog onClose={handleClick} closeOnOverlayClick={true} isOpen={true} />
    </div>
  );
  fireEvent.click(screen.getByTestId("styled-button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should not call the function onClose", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog onClose={handleClick} closeOnOverlayClick={false} isOpen={true} />
    </div>
  );
  fireEvent.click(screen.getByTestId("styled-background-dialog"));
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("should call the function onClose", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog onClose={handleClick} closeOnOverlayClick={true} isOpen={true} />
    </div>
  );
  fireEvent.click(screen.getByTestId("styled-background-dialog"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should show the past title", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog
        onClose={handleClick}
        closeOnOverlayClick={true}
        isOpen={true}
        title={"test"}
      />
    </div>
  );
  expect(screen.getByText("test")).toHaveTextContent("test");
});
test("should call the function onclose when you press esc", () => {
  const handleClick = jest.fn();
  render(
    <div>
      <Dialog onClose={handleClick} closeOnOverlayClick={true} isOpen={true} />
    </div>
  );
  fireEvent.keyUp(screen.getByTestId("styled-background-dialog"), {
    key: "Escape",
    keyCode: 27,
    code: "Escape",
  });
  expect(handleClick).toHaveBeenCalledTimes(1);
});
