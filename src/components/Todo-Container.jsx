import React, { useEffect, useState } from "react";
import TodoService from "../repostory/todoRepostory";
import ToDoComponent from "../components/Todo-Component";
import CreateComponent from "./CreateTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import UpdateComponent from "./UptadeTodo";

function ToDoContainer() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState();
  const [editData, setEditData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    const allTodos = await TodoService.getAlltodos();
    // console.log(allTodos);
    if (allTodos.success) {
      setTodos(allTodos.data);
    }
  };

  //   Create Todo
  const CreateTodo = async (text) => {
    const createData = await TodoService.createTodo(text);

    if (createData.success) {
      toast.success("Muvaffaqiyatli bajarildi!");
      fetchData();
      setShow(false);
    } else {
      toast.error("Xatolik yuz berdi!");
    }
  };

  //   Delete todo
  const deleteTodo = async (id) => {
    const result = await TodoService.deleteTodo(id);
    if (result.success) {
      toast.success("Muvaffaqiyatli o'chirildi!");
      fetchData();
    } else {
      toast.error("O'chirishda xatolik!");
    }
  };

  //   Uptade todo
  const editTodo = async (id) => {
    const getOneTodo = await TodoService.getById(id);
    setEditId(id);
    setEditData(getOneTodo.data.text); // e'tibor bering: .data.text, .data emas
    setIsEdit(true);
  };

 const updateTodo = async (text) => {
    const result = await TodoService.updateTodo(editId, text);
   if (result.success) {
     toast.success("Muvaffaqiyatli yangilandi!");
     fetchData();
     setIsEdit(false);
   } else {
     toast.error("Yangilashda xatolik!");
   }
 };

  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(todos);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <div className="text"> </div>
        <h2 className="text text-center">ToDo App</h2>
        <CreateComponent
          show={show}
          setShow={setShow}
          CreateTodo={CreateTodo}
        />
      </div>
      <ToDoComponent
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

      <UpdateComponent
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        uptadeTodo={updateTodo}
        editData={editData}
        setEditData={setEditData}
      />
      <ToastContainer />
    </div>
  );
}

export default ToDoContainer;
