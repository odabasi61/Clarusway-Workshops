import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../../redux/actions/todoAction";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  // state içindeki todo içindeki todolisti al. burdaki todo keyi index.jsde reducerlar birleşirken verildi.

  const dispatch = useDispatch();
  // cleartodo fonksiyonunu uygulayabilmek için usedispatch çağırıp uyguladık.

  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
