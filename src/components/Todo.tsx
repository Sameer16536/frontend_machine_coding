import { useCallback, useEffect, useState } from "react";

const Todo = () => {
  const TODOS_PER_PAGE = 10;
  const TOTAL_TODOS = 200;
  const TOTAL_PAGES = Math.ceil(TOTAL_TODOS / TODOS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [cachedTodos, setCachedTodos] = useState<{ [key: number]: any }>({});
  const [visibleTodos, setVisibleTodos] = useState<any[]>([]);

  const fetchTodos = useCallback(async (page: number) => {
    setLoading(true);
    setError(null);
    const start = (page - 1) * TODOS_PER_PAGE + 1;
    const end = start + TODOS_PER_PAGE;

    const todosForPage: any[] = [];

    try {
      for (let id = start; id < end; id++) {
        if (cachedTodos[id]) {
          todosForPage.push(cachedTodos[id]);
        } else {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch todo");
          }
          const data = await res.json();
          todosForPage.push(data);
          setCachedTodos((prev) => ({ ...prev, [id]: data }));
        }
      }
      setVisibleTodos(todosForPage);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos(currentPage);
  }, [currentPage, fetchTodos]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= TOTAL_PAGES) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <h1>Todos List (Page {currentPage})</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {TOTAL_PAGES}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === TOTAL_PAGES}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Todo;
