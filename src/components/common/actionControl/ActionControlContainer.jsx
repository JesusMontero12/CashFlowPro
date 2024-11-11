import ActionControl from "./ActionControl.jsx";

const ActionControlContainer = ({ id, updateItem, deleteItem }) => {
  return (
    <>
      <ActionControl id={id} updateItem={updateItem} deleteItem={deleteItem} />
    </>
  );
};

export default ActionControlContainer;
