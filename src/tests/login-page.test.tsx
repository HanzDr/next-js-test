import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/login-page";

test("renders login page", () => {
  render(<LoginPage />);
  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});
