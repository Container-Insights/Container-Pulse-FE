import Image from "next/image";
import styles from "./styles/page.module.css";
import Dashboard from "@/widgets/Dash/Charts/Dashboard";
import LineChart from "@/widgets/Dash/Charts/LineChart";

export default function Home() {
  return (
    <div className={styles.page}>
      {" "}
      <h1>메인 화면</h1>
      <Dashboard />
    </div>
  );
}
