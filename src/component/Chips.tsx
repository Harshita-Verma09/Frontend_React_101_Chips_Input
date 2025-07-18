import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

const Chips: React.FC = () => {
  const [chip, setChip] = useState<string>("");
  const [showChips, setShowChips] = useState<string[]>([]);

  const addChips = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chip.trim() === "") return;
    setShowChips([...showChips, chip.trim()]);
    setChip("");
  };

  const removeChip = (idxToRemove: number) => {
    const updated = showChips.filter((_, i) => i !== idxToRemove);
    setShowChips(updated);
  };

  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add Chips</h2>

        <form onSubmit={addChips} style={styles.form}>
          <input
            type="text"
            placeholder="Enter something..."
            value={chip}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setChip(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add</button>
        </form>

        <div style={styles.chipsWrapper}>
          {showChips.map((item, idx) => (
            <span key={idx} style={styles.chip}>
              {item}
              <span onClick={() => removeChip(idx)} style={styles.chipClose}>❌</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chips;
type StyleKeys =
  | "container"
  | "card"
  | "heading"
  | "form"
  | "input"
  | "button"
  | "chipsWrapper"
  | "chip"
  | "chipClose";

const styles: Record<StyleKeys, React.CSSProperties> = {
  container: {
    height: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
  chipsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  chip: {
    backgroundColor: "#333",
    padding: "8px 14px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    border: "1px solid #555",
  },
  chipClose: {
    cursor: "pointer",
    color: "#ff4d4d",
    fontWeight: "bold",
  },
};
