import React from "react";
import ItemsListDashBoard from "./ItemsListDashBoard";

const ItemsListDashBoardContainer = ({ section, setSelectedItem }) => {
  return (
    <ItemsListDashBoard section={section} setSelectedItem={setSelectedItem} />
  );
};

export default ItemsListDashBoardContainer;
