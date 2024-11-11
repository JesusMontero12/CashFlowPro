import { Button } from "react-bootstrap";

const ActionControl = ({ id, updateItem, deleteItem }) => {
  return (
    <>
      <Button variant="primary" size="md" className="m-1">
        Edit
      </Button>
      <Button onClick={() => deleteItem(id)} variant="danger" size="md" className="m-1">
        Delete
      </Button>
    </>
  );
};

export default ActionControl;
