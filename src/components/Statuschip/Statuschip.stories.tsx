import { Story, Meta } from "@storybook/react/types-6-0";
import { Statuschip, StatuschipProps } from "./Statuschip";
import { ChipProps } from "@material-ui/core";

export default {
  title: "Statuschip",
  component: Statuschip,
  description: `A Statuschip.`,
  argTypes: {
    size: { control: "text" },
    label: { control: "text" },
    variant: { control: "text" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<StatuschipProps & ChipProps> = (args) => (
  <Statuschip {...args} />
);

//👇 Each story then reuses that template
export const CONNECTED = Template.bind({});
CONNECTED.args = {
  size: "small",
  label: "CONNECTED",
  variant: "outlined",
};

export const IN_PROGESS = Template.bind({});
IN_PROGESS.args = {
  size: "small",
  label: "IN_PROGESS",
  variant: "outlined",
};

export const COMPLETED = Template.bind({});
COMPLETED.args = {
  size: "small",
  label: "COMPLETED",
  variant: "outlined",
};

export const CANCELLED = Template.bind({});
CANCELLED.args = {
  size: "small",
  label: "CANCELLED",
  variant: "outlined",
};