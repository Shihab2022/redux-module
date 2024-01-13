import React from "react";
import TodoCard from "./todoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-2xl space-y-2 p-5">
        <div className="bg-white rounded-md flex justify-center items-center text-2xl font-semibold p-3">
          <p>There have no task pending now ....</p>
        </div>
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
