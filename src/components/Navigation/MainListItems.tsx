import React from "react";
import { NavItem } from "./NavItem";

export const MainListItems: React.FC<{ menuItems: any[] }> = (props) => {
  const { menuItems } = props;

  return (
    <>
      {menuItems &&
        menuItems.map((items, index: number) => {
          return (
            <NavItem
              key={index}
              href={items.to}
              htmlBefore={items.htmlBefore}
              title={items.title}
            />
          );
        })}
    </>
  );
};
