import React from "react";
import styles from "@/app/styles/aside.module.css";

interface AsideProps {
  children?: React.ReactNode;
  className?: string;
}

const Aside: React.FC<AsideProps> = ({ children, className }) => {
  return (
    <aside className={`${styles.aside} ${className || ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.profileIcon}>👤</span>
          ByeWind
        </div>
      </div>

      <div className={styles.menuSection}>
        <div className={styles.menuGroup}>
          <div className={styles.sectionTitle}>Favorites</div>
          <a href="#" className={styles.menuItem}>
            <span>Overview</span>
          </a>
          <a href="#" className={styles.menuItem}>
            <span>Projects</span>
          </a>
        </div>

        <div className={styles.menuGroup}>
          <div className={styles.sectionTitle}>Dashboards</div>
          <a href="#" className={`${styles.menuItem} ${styles.active}`}>
            <span className={styles.icon}>📊</span>
            Default
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>🛍️</span>
            eCommerce
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>📂</span>
            Projects
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>📚</span>
            Online Courses
          </a>
        </div>

        <div className={styles.menuGroup}>
          <div className={styles.sectionTitle}>Pages</div>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>👤</span>
            User Profile
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>⚙️</span>
            Account
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>🏢</span>
            Corporate
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>📝</span>
            Blog
          </a>
          <a href="#" className={styles.menuItem}>
            <span className={styles.icon}>🌐</span>
            Social
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
