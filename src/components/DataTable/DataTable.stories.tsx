import { Story, Meta } from "@storybook/react/types-6-0";
import { DataTable } from "./DataTable";
import { Paper, TableContainer } from "@material-ui/core";

export default {
  title: "DataTable",
  component: DataTable,
  description: `A DataTable.`,
  argTypes: {
    rows: Array,
    columns: Array,
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => (
  <TableContainer component={Paper} elevation={0} style={{ height: "38rem" }}>
    <DataTable columns={[]} rows={[]} {...args} />
  </TableContainer>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  columns: [],
  rows: [],
};
