import { TTodo, removeToDo, updateStatus } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks/hooks";

type TTodoProps = {
  title: string;
  description: string;
  id: string;
  isCompleted?: boolean;
};
const TodoCard = ({ title, description, id, isCompleted }: TTodoProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(updateStatus(id));
  };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input
        onChange={handleToggle}
        type="checkbox"
        name="completed"
        id="completed"
      />
      <p>{title}</p>
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div className="space-x-5">
        <Button onClick={() => dispatch(removeToDo(id))} className="bg-red-500">
          delete
        </Button>
        <Button className="bg-green-500">edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
