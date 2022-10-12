import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xl", "2xl", "3xl", "4xl"],
      },
    },
    component: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4"],
      },
    },
    children: {
      defaultValue: "Hello World",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: "xl",
    component: "h4",
  },
};

export const H2XL: StoryObj<HeadingProps> = {
  args: {
    size: "2xl",
    component: "h3",
  },
};
export const H3XL: StoryObj<HeadingProps> = {
  args: {
    size: "3xl",
    component: "h4",
  },
};

export const H4XL: StoryObj<HeadingProps> = {
  args: {
    size: "4xl",
    component: "h1",
  },
};
