import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("All");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJpbmkucy4yMDIzLmVjZUByaXRjaGVubmFpLmVkdS5pbiIsImV4cCI6MTc3ODA1MTg4NCwiaWF0IjoxNzc4MDUwOTg0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWI0MmIzYmUtZmU0Yi00YmZmLWJlNGUtZmZmMTEwMjZhMDNkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGFyaW5pIHMiLCJzdWIiOiJmMjYwYjBmYy0yMDMwLTQ1MTYtYjhjOS04OWQ1YmU4NjBkY2YifSwiZW1haWwiOiJoYXJpbmkucy4yMDIzLmVjZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJoYXJpbmkgcyIsInJvbGxObyI6IjIxMTcyMzAwNDAwNDAiLCJhY2Nlc3NDb2RlIjoiQlRDRHFUIiwiY2xpZW50SUQiOiJmMjYwYjBmYy0yMDMwLTQ1MTYtYjhjOS04OWQ1YmU4NjBkY2YiLCJjbGllbnRTZWNyZXQiOiJOTWJEUnJWRVJVUWR3SGhWIn0.efXHpo2N4lPli-F6RE46cUfoFhJQtncfJehnXhn0858";

  useEffect(() => {
    async function getNotifications() {
      try {
        const res = await fetch(
          "http://20.207.122.201/evaluation-service/notifications",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (data.notifications) {
          setNotifications(data.notifications);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getNotifications();
  }, []);

  let showData = notifications;

  if (type !== "All") {
    showData = notifications.filter((n) => n.Type === type);
  }

  function getColor(type) {
    if (type === "Placement") return "#1976d2";
    if (type === "Result") return "#2e7d32";
    return "#ed6c02";
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Campus Notification System</h1>

        <div className="filter-box">
          <select
            className="select"
            onChange={(e) => setType(e.target.value)}
          >
            <option>All</option>
            <option>Placement</option>
            <option>Result</option>
            <option>Event</option>
          </select>
        </div>

        <div className="grid">
          {showData.map((item, index) => (
            <div className="card" key={index}>
              <span
                className="badge"
                style={{ background: getColor(item.Type) }}
              >
                {item.Type}
              </span>

              <h3 className="message">{item.Message}</h3>
              <p className="time">{item.Timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;