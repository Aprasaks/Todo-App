// TodoItem.jsx
import React, { useState } from "react";

function TodoItem({ todo, setTodos }) {
  // 수정시 사용할 텍스트 상태 (초기값은 현재 todo 내용)
  const [editText, setEditText] = useState(todo.content);

  // 삭제 기능: 해당 todo를 목록에서 제거
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };

  // 수정 모드 토글: isEditing 플래그 반전
  const toggleEdit = () => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todo.id ? { ...item, isEditing: !item.isEditing } : item))
    );
  };

  // 수정 저장: 수정된 내용을 업데이트
  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, content: editText, isEditing: false } : item
      )
    );
  };

  return (
    <li>
      {todo.isEditing ? (
        <>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={updateTodo}>저장</button>
          <button onClick={toggleEdit}>취소</button>
        </>
      ) : (
        <>
          <span>{todo.content}</span>
          <button onClick={toggleEdit}>수정</button>
        </>
      )}
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
}

export default TodoItem;
g;
