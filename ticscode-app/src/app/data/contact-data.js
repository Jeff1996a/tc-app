import {
    StarIcon,
    PresentationChartLineIcon,
    RocketLaunchIcon,
    ComputerDesktopIcon,
    BuildingStorefrontIcon,
    NewspaperIcon,
    WindowIcon,
  } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
  
  export const contactData = [
    {
      idContact: 1,
      title: "Sitio web básico",
      icon: WindowIcon,
      color: "blue",
      price: "90 $",
      description: ["Diseño responsive adaptable a cualquier pantalla",
      "Página de Inicio o bienvenida", 
      "Página informativa acerca de sus servicios o proyectos",
      "Enlaces a todas sus redes sociales",
      "Envío de mensajes desde su sitio web a 1 correo electrónico",
      "Botón de WhatsApp",
      "Alojamiento web y dominio por 1 año"
      ],
      button : (
        <Button className="object-bottom mt-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ...">
          Cotizar ahora </Button>
      )  
    },
    {
      idContact: 2,
      title: "Sitio web corporativo",
      icon: ComputerDesktopIcon,
      color: "green",
      price: "280 $",
      description: [
        "Diseño responsive adaptable a cualquier pantalla",
        "Página de Inicio o bienvenida", 
      "Página informativa acerca de sus servicios o productos",
      "1 Base de datos con 5 GB de almacenamiento",
      "Enlaces a todas sus redes sociales",
      "Envío de mensajes desde su sitio web a 1 correo electrónico", 
      "Botón de WhatsApp", 
      "Alojamiento web y dominio por 1 año",
      "5 cuentas de correo con 2 GB c/u (Opcional)"],
      button : (
        <Button  className="object-bottom mt-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ...">
          Cotizar ahora </Button>
      )
    },
    {
      idContact: 3,
      title: "E-commerce",
      color: "red",
      icon: BuildingStorefrontIcon,
      price: "420 $",
      description: [
        "Diseño responsive adaptable a cualquier pantalla",
        "Página de Inicio o bienvenida", 
      "Catálogo de productos",
      "Carrito de compras",
      "1 Base de datos con 5 GB de almacenamiento",
      "Enlaces a todas sus redes sociales",
      "Asistente de chat con IA", 
      "Botón de WhatsApp", 
      "Alojamiento web y dominio por 1 año",
      "Botón de pago"],
      button : (
        <Button color="green" className="object-bottom mt-9 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ...">
          Cotizar ahora </Button>
      )
    },
    
  ];