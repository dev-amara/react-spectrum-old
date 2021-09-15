import renderer from "react-test-renderer";
import { Checkbox } from "./Checkbox";

const handleChange = jest.fn();

describe("<Checkbox />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <Checkbox
          size="small"
          checked={true}
          onChange={handleChange}
          name="terms"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
