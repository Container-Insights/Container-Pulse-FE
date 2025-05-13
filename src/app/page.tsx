import Image from "next/image";
import styles from "./styles/page.module.css";
import Aside from "@/widgets/layout/Aside";
import Header from "@/widgets/layout/Header";
/**
 * Renders the main page container with applied page styles.
 *
 * @returns A div element with the page styling.
 */
export default function Home() {
  return <div className={styles.page}></div>;
}
