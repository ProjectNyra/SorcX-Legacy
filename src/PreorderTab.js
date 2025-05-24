import React, { useState, useEffect } from "react";

const preorderDeadline = new Date("2025-12-01T00:00:00Z").getTime();

export default function PreorderTab() {
  const [timeLeft, setTimeLeft] = useState({});
  const [form, setForm] = useState({ name: "", email: "", deposit: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = preorderDeadline - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", mins: "00", secs: "00" });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
        secs: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Integrate with payment/CRM backend here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={styles.container}>
        <h2 style={styles.thanks}>Thank you for preordering SorcX M-EVO NOVA!</h2>
        <p>We will contact you soon with next steps.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Preorder Your SorcX M-EVO NOVA</h2>
      <p style={styles.subtitle}>
        Secure your place in motorcycle history. Limited units available.
      </p>

      <div style={styles.countdown}>
        {["days", "hours", "mins", "secs"].map((unit) => (
          <div key={unit} style={styles.timeBlock}>
            <span style={styles.timeNumber}>{timeLeft[unit] || "--"}</span>
            <span>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="deposit"
          placeholder="Deposit Amount (€)"
          value={form.deposit}
          onChange={handleChange}
          required
          pattern="^[0-9]+(\.[0-9]{1,2})?$"
          title="Please enter a valid amount"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit Preorder
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
    padding: 20,
    backgroundColor: "#001313",
    borderRadius: 15,
    boxShadow: "0 0 20px #00ffe7",
    color: "#00ffe7",
    fontFamily: "'Orbitron', sans-serif",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#7affd8",
  },
  countdown: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  timeBlock: {
    textAlign: "center",
  },
  timeNumber: {
    fontSize: 36,
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    border: "none",
    outline: "none",
  },
  button: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    border: "none",
    backgroundColor: "#00ffe7",
    color: "#001010",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  thanks: {
    fontSize: 24,
    marginBottom: 10,
  },
};
