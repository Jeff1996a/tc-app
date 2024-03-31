"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { ComplexNavbar } from "./components/navbar";
import routes from "./routes";
import Link from "next/link";
import  Home from "./home/page";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {

  return (
    <>
      <Home></Home>
      <FloatingWhatsApp 
          phoneNumber="5930979112697" 
          accountName="TicsCode Ecuador" 
          statusMessage="Soluciones tecnológicas"
          chatMessage="¡Bienvenid@! ¿Cómo podemos ayudarte?"
          placeholder="Escríbenos un mensaje"/>
    </>
  )
}
