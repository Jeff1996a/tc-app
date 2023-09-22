"use client";
import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { HandRaisedIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle} from "../components/page-tittle";
import { Footer } from "../components/footer";
import { FeatureCard} from "../components/cards/feature-card";
import { TeamCard } from "../components/cards/team-card";
import { featuresData } from "../data/feactures-data";
import { teamData } from "../data/team-data";
import { contactData } from "../data/contact-data";


export function Home(){
    return(
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('https://raydi8ion.com/wp-content/uploads/2020/11/1673381.jpg')] bg-cover bg-center opacity-80" />
                <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <img
                        className="h-70 w-81 mt-6 mb-0 mx-auto object-cover object-center opacity-90"
                        src="/img/logo.png"
                        alt="nature image"></img>
                    <Typography variant="lead" color="white" className="opacity-70 mt-0">
                        Especializados en crear las mejores soluciones IT para tu negocio mediante el diseño de cableado estructurado de datos, desarrollo de aplicaciones y soporte remoto.
                    </Typography>
                    </div>
                </div>
                </div>
            </div>
            <section className="-mt-33 bg-gray-50 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                        <HandRaisedIcon className="h-6 w-6 text-blue-gray-900" />
                    </div>
                    <Typography
                        variant="h2"
                        className="mb-3 font-bold"
                        color="green"
                    >
                        ¡Bienvenidos a TicsCode!
                    </Typography>
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                        ¡Este es el lugar indicado para dar el siguiente paso hacia las nuevas tecnologías y formar parte de la nueva revolución digital!
                        <br />
                        <br />
                        Nosotros te ayudaremos a desarrollar todas las ideas para su negocio, emprendimiento u organización en el ámbito de las tecnologías de la información.
                    </Typography>
                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                    <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-56">
                        <img
                            alt="Card Image"
                            src="/img/teamwork.jpeg"
                            className="h-full w-full"
                        />
                        </CardHeader>
                        <CardBody>
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-3 font-bold"
                        >
                            ¿Quienes somos?
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                            TicsCode Ecuador es una empresa que nació en el año 2022 y se especializa en brindar soluciones en el área de las Tecnologías de la información a diferentes empresas u organizaciones dentro y fuera del país .
                        </Typography>
                        
                        </CardBody>
                        <Button
                            variant="outlined"
                            color="green" 
                            size="sm"
                            className="hidden lg:inline-block"
                            >
                            <span>Contáctanos</span>
                            </Button>
                    </Card>
                    </div>
                </div>
                <div className="container mx-auto mt-20 pt-20">
                <PageTitle heading="Nuestros servicios">
                       
                </PageTitle>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuresData.map(({ color, title, icon, description }) => (
                    <FeatureCard
                        key={title}
                        color={color}
                        title={title}
                        icon={React.createElement(icon, {
                        className: "w-5 h-5 text-white",
                        })}
                        description={description}
                    />
                    ))}
                </div>
                </div>
                
                </div>
            </section>
            <section className="px-4 bg-gray-50 pt-20 pb-48">
                <div className="container mx-auto">
                    <PageTitle heading="Planes Web Hosting">
                        Contamos con alojamiento público para que tus páginas web estén de prioridad en los buscadores mas populares.
                    </PageTitle>
                    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {teamData.map(({ img, name, position, socials }) => (
                        <TeamCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            socials={
                            <div className="flex items-center gap-2">
                                {socials.map(({ color, name }) => (
                                <IconButton key={name} color={color} variant="text">
                                    <i className={`fa-brands text-lg fa-${name}`} />
                                </IconButton>
                                ))}
                            </div>
                            }
                        />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="relative px-4 bg-gray-50">
                <div className="container mx-auto">
                <PageTitle heading="Alianzas">
                    Put the potentially record low maximum sea ice extent tihs year down
                    to low ice. According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos.
                </PageTitle>
                <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                    {contactData.map(({ title, icon, description }) => (
                    <Card
                        key={title}
                        color="transparent"
                        shadow={false}
                        className="text-center text-blue-gray-900"
                    >
                        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                        {React.createElement(icon, {
                            className: "w-5 h-5",
                        })}
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                        </Typography>
                        <Typography className="font-normal text-blue-gray-500">
                        {description}
                        </Typography>
                    </Card>
                    ))}
                </div>
                <PageTitle heading="Want to work with us?">
                    Complete this form and we will get back to you in 24 hours.
                </PageTitle>
                <form className="mx-auto mt-12 max-w-3xl text-center">
                    <div className="mb-8 flex gap-8">
                    <Input variant="standard" size="lg" label="Full Name" />
                    <Input variant="standard" size="lg" label="Email Address" />
                    </div>
                    <Textarea variant="standard" size="lg" label="Message" rows={8} />
                    <Button variant="gradient" size="lg" className="mt-8 mb-10">
                    Send Message
                    </Button>
                </form>
                </div>
            </section>
            <div className="bg-gray">
                <Footer />
            </div>
            
        </>
    )
}

export default Home;