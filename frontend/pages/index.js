import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("");

  return (
    <div>
      <h1>Global Financial Intelligence</h1>

      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>

      <input
        placeholder="Country of residence"
        onChange={(e) => setCountry(e.target.value)}
      />

      <button
        onClick={() =>
          localStorage.setItem(
            "userPrefs",
            JSON.stringify({ language, country })
          )
        }
      >
        Continue
      </button>
    </div>
  );
}
