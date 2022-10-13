import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from ".";

export default {
  title: "TextInput",
  component: TextInput,
  args: {
    label: "Label",
    placeholder: "Type your e-mail address",
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
