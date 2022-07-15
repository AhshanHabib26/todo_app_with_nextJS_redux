import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

const showtodos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    toast.success("Your Task is Deleted");
  };

  return (
    <div>
      <Navbar />
      <h1 className=" text-2xl uppercase text-secondary font-bold text-center  my-5">
       All TODO List
      </h1>
      <div className="card  max-w-4xl mx-auto text-center bg-base-100 my-5">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos &&
                  todos.map((todo) => (
                    <>
                      <tr>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="btn btn-error btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default showtodos;
