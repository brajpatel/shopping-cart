import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('test', () => {
    it('renders the heading', () => {
        render(<App/>);
        expect(screen.getByRole('heading').textContent).toMatch(/buh/);
    })
})