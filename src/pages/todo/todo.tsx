import Container from "../../components/ui/container";
import TodoContainer from "../../components/todo/todoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">Todo page</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
