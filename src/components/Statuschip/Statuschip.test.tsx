import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Statuschip } from "./Statuschip";

describe("<Statuschip />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(<Statuschip size="small" label="DONE" variant="outlined" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have content texts in the component", () => {
    const component = render(
      <Statuschip size="small" label="DONE" variant="outlined" />
    );
    expect(component.container).toHaveTextContent("DONE");
    expect(component.container).not.toHaveTextContent("NO_DONE");
  });
});
