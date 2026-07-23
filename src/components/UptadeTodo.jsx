import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function UpdateComponent({
  setIsEdit,
  isEdit,
  uptadeTodo,
  editData,
  setEditData,
}) {
  const handleClose = () => setIsEdit(false);

  const handleChange = (e) => {
    setEditData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    uptadeTodo(editData);

    setEditData("");
  };

  return (
    <>
      <Modal show={isEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update new todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="typing..."
                autoFocus
                name="text"
                onChange={handleChange}
                value={editData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateComponent;
