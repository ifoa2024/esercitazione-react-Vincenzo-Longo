import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const item = location.state;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dettagli</h1>
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600">ID: {item.id}</p>
        <p className="text-gray-600">
          Completed: {item.completed ? "Yes" : "No"}
        </p>
        <p className="text-gray-600">User ID: {item.userId}</p>
      </div>
    </div>
  );
}
