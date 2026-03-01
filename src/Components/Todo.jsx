import { useState } from "react";
import { ListTodo, Trash2, CircleCheck } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addData, deleteData, checkData } from "../Features/Tasks/TasksSlice";

export const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addData(task));
    setTask("");
  };

  const handleCheckTask = (index) => {
    dispatch(checkData(index));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteData(index));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <ListTodo className="i" /> To-do List :
        </h1>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a New Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <ul>
          {tasks?.map((curTask, index) => (
            <li key={index}>
              <p className={curTask.completed ? "line-through" : ""}>
                {index}: {curTask.text}
              </p>
              <div className="li-inner">
                <CircleCheck
                  id="color"
                  className="icon-style"
                  onClick={() => handleCheckTask(index)}
                />
                <Trash2
                  className="icon-style"
                  onClick={() => handleDeleteTask(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
