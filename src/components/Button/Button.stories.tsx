import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta;

export const Default: StoryObj<ButtonProps> = {};
