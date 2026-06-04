import { useEffect } from "react";
import { useTravelFetch } from "./hooks/useTravelFetch";
import { useTravelToast } from "./context/TravelToastContext";

function App() {
  const { loading, data, error, errorMessage } =
    useTravelFetch("/posts");

  const { showToast } = useTravelToast();

  useEffect(() => {
    if (!loading && data) {
      showToast("불러오기 성공!");
    }

    if (error) {
      showToast(errorMessage);
    }
  }, [loading, data, error, errorMessage]);

  if (loading) {
    return <h2>로딩 중...</h2>;
  }

  return (
    <div className="container">
      <h1>여행 게시글 대시보드</h1>

      {data?.slice(0, 5).map((post) => (
        <div className="card" key={post.id}>
          <h2>여행 후기 #{post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;