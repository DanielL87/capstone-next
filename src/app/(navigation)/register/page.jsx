"use client";
import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation.js";

import styles from "../../page.module.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  async function handleSignUp(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please enter username, email, and password.");
      return;
    }

    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }), // Include email in the payload
    });

    const info = await response.json();
    console.log(info);
    if (info.error) {
      setError(info.error);
      setSuccessMessage("");
    } else {
      setSuccessMessage("Sign-up successful! Redirecting to homepage...");
      setError("");
      setTimeout(() => {
        router.push("/selectPet");
        router.refresh();
      }, 2000);
    }
  }

  return (
    <>
      <div className={styles.formMainContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSignUp} className={styles.form}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter your username"
              className={styles.formInput}
            />

            <label htmlFor="email">Email:</label>
            <input
              className={styles.formInput}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password:</label>
            <input
              className={styles.formInput}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
            />

            <button className={styles.loginFormBtn} type="submit">
              Sign Up
            </button>

            <p className={styles.formText}>
              Already have an account?
              <Link href="/login"> Login</Link>{" "}
            </p>

            <p className={styles.errorText}>{error}</p>
            <p className={styles.successText}>{successMessage}</p>
          </form>
        </div>
      </div>
    </>
  );
}
