import renderer from "react-test-renderer";
import { Loader } from "./Loader";

describe("<Loader />", () => {
  test("rend correctement", () => {
    const component = renderer.create(<Loader />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
