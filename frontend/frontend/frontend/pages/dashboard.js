import { useState } from "react";

export default function Dashboard() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  async function askAI() {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResponse(data.answer);
  }

  return (
    <div>
      <h2>Ask anything about finance</h2>
      <textarea onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={askAI}>Ask</button>
      <p>{response}</p>
    </div>
  );
}
