import "bootstrap/dist/css/bootstrap.min.css";
import { FaPen, FaTrash } from "react-icons/fa";

function ToDoComponent({ todos, deleteTodo, editTodo }) {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = (id) => {
    editTodo(id);
  };

  return (
    <div className="row">
      <div className="col">
        {todos?.length > 0
          ? todos.map((item) => (
              <div
                className="border py-2 px-3  rounded my-2 d-flex align-items-center justify-content-between"
                key={item._id}
              >
                <h3>{item.text}</h3>
                <div className="details">
                  <div className="icons d-flex justify-content-end gap-3">
                    <FaPen
                      style={{ color: "#0d6efd", cursor: "pointer" }}
                      size={18}
                      onClick={() => {
                        handleUpdate(item._id);
                      }}
                    />
                    <FaTrash
                      style={{ color: "#dc3545", cursor: "pointer" }}
                      size={18}
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    />
                  </div>
                  <div className="time text-secondary">{item.createdAt}</div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default ToDoComponent;
