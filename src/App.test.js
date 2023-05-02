import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import Shop from "./components/Shop";

describe('shopping cart', () => {
    it('calls add to cart', () => {
        const onClickMock = jest.fn();

        render(<Shop addToCart={onClickMock}/>);
        const button = screen.getAllByRole("button", { name: "Add to Cart" });
        
        userEvent.click(button[0]);

        expect(onClickMock).toBeCalledTimes(1);
    });

    it('calls add to cart multiple times', () => {
        const onClickMock = jest.fn();

        render(<Shop addToCart={onClickMock}/>);
        const button = screen.getAllByRole("button", { name: "Add to Cart" });
        
        userEvent.click(button[0]);
        userEvent.click(button[2]);
        userEvent.click(button[5])

        expect(onClickMock).toBeCalledTimes(3);
    });
})