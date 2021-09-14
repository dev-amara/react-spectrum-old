import { Story, Meta } from "@storybook/react/types-6-0";
import {Profile, ProfileProps} from "./Profile";

export default {
  title: "Profile",
  component: Profile,
  description: `A Profile.`,
  argTypes: {
    logo: { control: "text" },
    username: { control: "text" },
    email: { control: "text" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ProfileProps> = (
  args
) => <Profile {...args}/>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  username: "Amara Bamba",
  email: "amara.bamba@akiltechnologies.com",
};
