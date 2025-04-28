import Image from "next/image";
import styles from "./styles/page.module.css";
import Aside from "@/widgets/layout/Aside";

export default function Home() {
  return (
    <div className={styles.page}>
      <Aside />
    </div>
  );
}
