import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Profile } from "./Profile";

describe("<Profile />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <Profile
          username={"Amara Bamba"}
          logo={""}
          email={"amara.dianney@gmail@gmail.com"}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have content texts in the component", () => {
    const component = render(
      <Profile
        username={"Amara Bamba"}
        logo={""}
        email={"amara.dianney@gmail@gmail.com"}
      />
    );
    expect(component.container).not.toHaveTextContent("Bamba Amara");
    expect(component.container).toHaveTextContent("Amara Bamba");
    expect(component.container).not.toHaveTextContent(
      "dianney.amara@gmail@gmail.com"
    );
    expect(component.container).toHaveTextContent(
      "amara.dianney@gmail@gmail.com"
    );
  });

  test("try to display the profile without its require props", () => {
    expect(Profile).toThrowError();
  });
});
