import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import IconButton from "./index";

test('render icon button component', () => {
    render(
        <div>
            <IconButton onClick={()=>{}} />
        </div>
    );
    const linkElement = screen.getByTestId("styled-button");
    expect(linkElement).toBeInTheDocument();
});

test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
        <div>
            <IconButton onClick={handleClick} />
        </div>
    );
    fireEvent.click(screen.getByTestId("styled-button"));
    expect(handleClick).toHaveBeenCalledTimes(1)
})
