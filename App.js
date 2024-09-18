import { useState } from "react";
import "./App.css";
import { todoData } from "./todoData";

function App() {
  const [currentTodoData, setCurrentTodoData] = useState(todoData);

  const onCheckBoxClicked = (itemIndex) => {
    console.log("index of the item clicked", itemIndex);

    const newTodoData = todoData;
    const changeTodoObject = {
      task: currentTodoData[itemIndex].task,
      done: !currentTodoData[itemIndex].done,
    };
    newTodoData[itemIndex] = changeTodoObject;

    setCurrentTodoData([...newTodoData]);
  };

  console.log("currentTodoData", currentTodoData);

  return (
    <div className="App">
      <header className="App-header">
        {currentTodoData.map((item, index) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => onCheckBoxClicked(index)}
              />
              <span>{item.task}</span>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
