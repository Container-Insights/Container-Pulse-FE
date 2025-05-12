import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <div className={styles.container}>
        <div className={styles.pathInfo}>Dashboards / Default</div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <span className={styles.searchShortcut}>⌘/</span>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionButton} title="Theme">
            🌙
          </button>
          <button className={styles.actionButton} title="History">
            ⭕
          </button>
          <button className={styles.actionButton} title="Notifications">
            🔔
          </button>
          <button className={styles.actionButton} title="Apps">
            ⏹️
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
