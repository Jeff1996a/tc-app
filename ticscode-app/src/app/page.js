"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { ComplexNavbar } from "./components/navbar";
import routes from "./routes";
import Link from "next/link";
import { Home } from "./home/page";

export default function App() {

  return (
    <ThemeProvider>
       <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
            <ComplexNavbar></ComplexNavbar>
       </div>
       <Home></Home>
    </ThemeProvider>
  )
}
