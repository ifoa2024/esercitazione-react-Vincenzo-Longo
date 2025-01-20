import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [firstArray, setFirstArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setFirstArray(data.slice(0, 20));
      });
  }, []);

  const handleDetails = (item) => {
    navigate(`/details/${item.id}`, { state: item });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Homepage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {firstArray.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <button
              onClick={() => handleDetails(item)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Dettagli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
