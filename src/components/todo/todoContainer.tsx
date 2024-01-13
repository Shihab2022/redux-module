import { useAppSelector } from "@/redux/hooks/hooks";
import TodoCard from "./todoCard";
import TodoModal from "./todoModal";
import TodoFilter from "./todofilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-2xl space-y-2 p-5">
        {/* <div className="bg-white rounded-md flex justify-center items-center text-2xl font-semibold p-3">
          <p>There have no task pending now ....</p>
        </div> */}
        {todos.map((todo) => (
          <>
            <TodoCard {...todo} />
          </>
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
