"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
  ListItem,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  UserIcon,
  CloudIcon,
  BriefcaseIcon,
  BuildingStorefrontIcon,

} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  ComputerDesktopIcon,
    UsersIcon, 
    ServerStackIcon,
    WindowIcon,
    GlobeAmericasIcon,
    UserGroupIcon,
    DevicePhoneMobileIcon,
    DeviceTabletIcon,
    PhoneIcon,
    BuildingOffice2Icon,
    WrenchScrewdriverIcon
  } from "@heroicons/react/24/solid";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
//Lista consultoría IT
const ConsultoriaItems = [
  {
    title: "Diseño de sitios web",
    icon:ComputerDesktopIcon,
    color:"blue",
    description:
      "Diseñamos e implementamos su propio sitio web o tienda en linea responsive.",
    url: "/consultoria"
  },
  {
    title: "Desarrollo de aplicaciones móviles",
    icon:DeviceTabletIcon,
    color:"blue",
    description:
      "Desarrollamos su propia plataforma digital para dispositivos Android o iOS",
      url: "/consultoria"
  },
  {
    title: "Proyectos ERP",
    icon:BuildingOffice2Icon,
    color:"blue",
    description:
      "Brindamos servicios de consultoría para optimizar su entorno empresarial mediante soluciones SAP.",
    url: "/consultoria"
  },
];

//Lista de servicios
const ServiciosItems = [
    {
      title: "Hosting web",
      icon:GlobeAmericasIcon,
      url: "/",
      description:
        "Contamos con diferentes planes de alojamiento para su sitio web",
    },
    {
      title: "Mantenimiento de equipos informáticos",
      icon:WrenchScrewdriverIcon,
      url: "/",
      description:
        "Realizamos mantenimiento y reparación de todo tipo de equipos informáticos",
    },
    {
      title: "Soporte remoto",
      url: "/",
      icon:PhoneIcon,
      description:
        "Te ayudamos con asesoramiento remoto para solucionar cualquier problema tecnológico",
    },
  ];
 
function ConsultoriaList() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = ConsultoriaItems.map(
    ({title, description, url,icon}, key) => (
      <Link href={url} key={key}>
        <MenuItem className="flex items-center gap-2 rounded-lg">
          <div className={`rounded-lg p-5 `}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-8 w-8 text-blue-500",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography  as="a" href="#" variant="solid"  className="font-normal text-blue-gray-500">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-6 w-6" />
              Consultoría
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function ServiciosList() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = ServiciosItems.map(
    ({title, description, url,icon}, key) => (
      <Link href={url} key={key}>
        <MenuItem className="flex items-center rounded-lg">
          <div className={`rounded-lg p-5 `}>
            {React.createElement(icon, {
              className: "h-8 w-8 text-green-500",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography  as="a" href="#" variant="solid"  className="font-normal text-blue-gray-500">
            <ListItem
              className="flex items-center gap-2 py-2 pr-3"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <CloudIcon className="h-6 w-6" />
              Servicios
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
  }
   
 
// nav list component
const navListItems = [
  
  {
    label: "Soluciones",
    icon: BriefcaseIcon,
  },
  {
    label: "Blog",
    icon: RocketLaunchIcon,
  },
  {
    label: "Contactos",
    icon: UserIcon,
  },

  
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <ConsultoriaList />
      <ServiciosList />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="solid"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full text-blue-gray-500">
            {React.createElement(icon, { className: "h-6 w-6" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="p-3 mx-auto">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-500">
        <Typography
            as="a"
            href="/home"
            variant="h5"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
            >
            TicsCode Ecuador
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <Button
              variant="outline"
              color="blue" 
              size="sm"
              className="hidden lg:inline-block transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ..."
            >
              <span>Portal</span>
            </Button>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
        <Button variant="gradient" color="blue" size="sm" fullWidth className="mb-2">
            <span>Portal</span>
          </Button>
      </Collapse>
    </Navbar>
  );
}