import React from "react";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import "__mocks__/matchMedia";
import { Dashboard } from "./Dashboard";

const server = setupServer(
  rest.post("http://localhost:8000/token", (req, res, ctx) => {
    return res(ctx.json({ access: "ABCD" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders login form", () => {
  const { getByText } = render(<Dashboard />);
  const header = getByText(/Please login for access/i);
  expect(header).toBeInTheDocument();
});

test("allows logging in", async () => {
  const { getByLabelText, getByText } = render(<Dashboard />);
  userEvent.type(getByLabelText("User ID"), "alice");
  userEvent.type(getByLabelText("Password"), "0000");
  fireEvent.submit(getByText("Login"));
  const logout = await screen.findByText(/Whisker away/i);
  expect(logout).toBeInTheDocument();
});
