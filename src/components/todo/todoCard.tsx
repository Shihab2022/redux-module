import { TTodo, removeToDo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks/hooks";

type TTodoProps = {
  title: string;
  description: string;
  id: string;
};
const TodoCard = ({ title, description, id }: TTodoProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
      <p>{title}</p>
      {/* <p>time</p> */}
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
