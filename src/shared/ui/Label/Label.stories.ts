import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Label } from "./Label";

const meta = {
  title: "ui/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    onFocus: fn(),
    children: "Label text",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
