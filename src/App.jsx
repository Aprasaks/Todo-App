// App.jsx
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TimeDisplay from "./components/TimeDisplay";
import RandomQuote from "./components/RandomQuote";
import "./App.css";

function App() {
  // Todo CRUD 상태: 각 todo는 id, content, isEditing 플래그를 가짐.
  const [todos, setTodos] = useState([{ id: Date.now(), content: "안녕하세요", isEditing: false }]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Todo를 입력하고 추가하는 컴포넌트 */}
      <TodoInput todos={todos} setTodos={setTodos} />
      {/* Todo 목록을 조회 및 관리하는 컴포넌트 */}
      <TodoList todos={todos} setTodos={setTodos} />

      <hr />
      {/* 현재 시간 표시 컴포넌트 */}
      <TimeDisplay />

      <hr />
      {/* 랜덤 명언 컴포넌트 */}
      <RandomQuote />
    </div>
  );
}

export default App;
