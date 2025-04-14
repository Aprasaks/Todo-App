// TimeDisplay.jsx
import React, { useEffect, useState } from "react";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간 업데이트 (타이머 설정)
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h2>현재 시간</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimeDisplay;
