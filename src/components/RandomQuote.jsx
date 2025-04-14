import React, { useEffect, useState } from "react";

function RandomQuote() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Advice Slip API를 호출하는 함수
  const fetchAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (!res.ok) {
          throw new Error("조언을 가져오는데 실패했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        // 데이터가 { slip: { id, advice } } 형식으로 반환됨
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setAdvice("");
        setAdviceId(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 컴포넌트가 마운트될 때 한 번 API를 호출하여 조언을 가져옴
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice">
      <h2>랜덤 조언</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <blockquote>
          <p>"{advice}"</p>
          <footer>ID: {adviceId}</footer>
        </blockquote>
      )}
      <button onClick={fetchAdvice}>새로운 조언 보기</button>
    </div>
  );
}

export default RandomQuote;
