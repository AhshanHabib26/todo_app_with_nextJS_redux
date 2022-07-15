import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

const todomanager = () => {
  
const dispatch = useDispatch()

  const handaleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.description.value;

    if (name === "" || description === "") {
      toast.error("Input Value is Empty");
    } else {
      const data = {
        id: uuidv4(),
        title: name,
        description,
      };

      dispatch(addTodo(data));
      toast.success('Your Task is Successfully Added')
    }

    e.target.name.value = "";
    e.target.description.value = "";
  };

  return (
    <div>
        <Navbar/>
      <h1 className=" text-2xl uppercase text-secondary font-bold text-center  my-5">
        My Todo App
      </h1>
      <div className="card max-w-xl mx-auto text-center bg-base-100 border border-blue-100 my-5">
        <form onSubmit={handaleSubmit}>
          <div className="card-body">
            <div className="form-control w-full">
              <label className="label">
                <span className=" text-md font-bold text-gray-700">
                  Task Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-md font-bold text-gray-700">
                  Task Description
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Type Here"
                name="description"
              ></textarea>
            </div>
            <div>
              <button className=" btn btn-secondary mt-3 btn-xl " type="submit">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
  
    
}

export default todomanager;