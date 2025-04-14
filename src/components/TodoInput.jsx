// TodoInput.jsx
import React, { useRef } from "react";

function TodoInput({ todos, setTodos }) {
  // useRef를 사용해 input DOM 요소에 직접 접근
  const inputRef = useRef(null);

  const addTodo = () => {
    const content = inputRef.current.value;
    if (!content.trim()) return;
    // 새로운 todo 객체 생성
    const newTodo = { id: Date.now(), content: content, isEditing: false };
    setTodos([...todos, newTodo]);
    inputRef.current.value = ""; // 입력창 초기화
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="새로운 할 일을 입력하세요" />
      <button onClick={addTodo}>추가</button>
    </div>
  );
}

export default TodoInput;
