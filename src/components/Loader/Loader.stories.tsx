import { Story, Meta } from "@storybook/react/types-6-0";
import { Loader, LoaderProps } from "./Loader";
// @ts-ignore
import SvgEcollect from "./assets/logo.svg";

export default {
  title: "Loader",
  component: Loader,
  description: `A Loader.`,
  argTypes: {},
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: <img src={SvgEcollect} alt="" />,
};
