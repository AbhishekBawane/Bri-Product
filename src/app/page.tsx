"use client"
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import DisplayPro from "./pages/DisplayPro";
import { useState } from "react";

export default function Home() {
  
 const [search, setSearch] = useState("");


  return (
    <div className= {styles.page}>
         <Navbar search={search}  onSearch={setSearch}/>
         <DisplayPro search={search}/>
    </div>
  );
}
