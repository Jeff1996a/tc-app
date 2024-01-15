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
    List,
    ListItem,
} from "@material-tailwind/react";
import { HandRaisedIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle} from "../components/page-tittle";
import { Footer } from "../components/footer";
import { FeatureCard} from "../components/cards/feature-card";
import { TeamCard } from "../components/cards/team-card";
import { featuresData } from "../data/feactures-data";
import { teamData } from "../data/team-data";
import { contactData } from "../data/contact-data";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function Home(){
    return(
        <>
            <div className="relative w-full flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('https://raydi8ion.com/wp-content/uploads/2020/11/1673381.jpg')] bg-cover bg-center opacity-80" />
                <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Image
                            className="h-70 w-81 mt-6 mb-0 mx-auto object-cover object-center opacity-70"
                            src="/img/logo.png"
                            alt="nature image"/>
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
                        Este es el lugar indicado para dar el siguiente paso hacia las nuevas tecnologías y formar parte de la nueva revolución digital.
                        <br />
                        <br />
                        Nosotros le ayudaremos a desarrollar todas las ideas para su negocio, emprendimiento u organización haciendo uso de las nuevas tecnologías de la información.
                    </Typography>
                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                    <Card className="shadow-lg shadow-gray-500/10">
                        <CardHeader className="relative h-56">
                        <Image
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
                            TicsCode Ecuador es una empresa que se especializa en brindar soluciones en el área de las Tecnologías de la información a diferentes empresas y organizaciones.
                        </Typography>
                        
                        </CardBody>
                        <Button
                            variant="outlined"
                            color="green" 
                            size="sm"
                            className="hidden sm:inline-block mb-10"
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
                    <PageTitle heading="Nuestros proveedores">
                        Trabajamos con diferentes marcas para brindar la mejor solución a todos nuestros clientes.
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
            
            <section className="px-4 bg-gray-50">
               <div className="container mx-auto">
                    <PageTitle heading="Paquetes TicsCode">
                        Nuestros planes de desarrollo web incluyen varios paquetes para que pueda seleccionar el sitio web que más se ajuste a sus necesidades.
                    </PageTitle>
                    <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                        {contactData.map(({ title, icon, color, price, description, button}) => (
                        <Card
                            key={title}
                            color="transparent"
                            shadow={false}
                            className="text-center text-blue-gray-900"
                        >
                            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                            
                            <IconButton
                                variant="gradient"
                                size="lg"
                                color={color}
                                className="pointer-events-none mb-6 rounded-full"
                            >
                                {React.createElement(icon, {
                                className: "w-5 h-5"
                            })}
                            </IconButton>
                            </div>
                            <Typography variant="h5" color="blue" className="mb-2">
                            {title}
                            </Typography>
                            <Typography variant="h6" className="font-normal text-blue-gray-500">
                            Desde
                            </Typography>
                            <Typography color="green" variant="h1" className="font-normal">
                            {price}
                            </Typography>
                            
                            <List className="text-center mt-5">
                                {description.map((name) => (
                                <ListItem >{name}</ListItem>
                                ))}
                            </List>
                            {button}
                        </Card>
                        ))}
                    </div>
                    <PageTitle heading="¡Escríbenos!">
                    No dudes en comunicarte por todos nuestros canales y te responderemos inmediatamente para brindarte más información acerca de nuestros servicios.
                    </PageTitle>
                    <form className="mx-auto mt-12 max-w-2xl text-center">
                        <Input variant="outlined" size="sm" label="Nombres completos *"/>
                        <div className="mt-5">
                            <Input variant="outlined" size="sm" label="Correo electrónico *"/>   
                        </div>
                        <div className="mt-5">
                            <Textarea variant="outlined" size="sm" label="Mensaje *" rows={8} />  
                        </div>
                        <Button color="green" variant="gradient" size="lg" className="mt-8 mb-10">
                        Enviar
                        </Button>
                    </form>
                </div>
                
            </section>
            <div className="bg-gray">
                <Footer />
            </div>
            <FloatingWhatsApp 
            phoneNumber="5930979112697" 
            accountName="TicsCode Ecuador" 
            statusMessage="Soluciones tecnológicas"
            chatMessage="¡Bienvenid@! ¿Cómo podemos ayudarte?"
            placeholder="Escríbenos un mensaje"/>
        </>
    )
}

export default Home;