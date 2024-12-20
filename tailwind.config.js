/** @type {import('tailwindcss').Config} */
import { content as _content, plugin } from "flowbite-react/tailwind";

export const content = ["./src/**/*.{js,jsx,ts,tsx}", _content()];
export const theme = {
  extend: {},
};
export const darkMode = 'class';
export const plugins = [plugin()];
export const variants = {
  extend: {
    display: ["group-hover"],
  },
};
