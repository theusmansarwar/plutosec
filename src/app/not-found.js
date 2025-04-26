"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Sorry, the page you were looking for does not exist.
      </p>
      <Link href="/" style={styles.button}>
        Go back home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "5rem",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  button: {
    padding: "8px",
    backgroundColor: `var(--background-color)`,
    color: "#000",
    border: "none",
    borderRadius: `var(--default-border-radius)`,
    cursor: "pointer",
    textDecoration: "none",
  },
};
