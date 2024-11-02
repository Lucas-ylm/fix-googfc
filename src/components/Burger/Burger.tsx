"use client";
import { useState } from "react";
import styles from "./burger.module.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={`${styles.wrapper} ${isOpen && styles.isMenu}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span />
    </button>
  );
}
