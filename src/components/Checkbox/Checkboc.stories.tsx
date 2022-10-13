import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Label: StoryObj<CheckboxProps> = {
  args: {
    label: "Checkbox",
  },
};
