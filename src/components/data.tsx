"use client";

import { createContext, JSX, ReactNode, useEffect, useState } from "react";
import Go from "../assets/technologies/go";
import Typescript from "../assets/technologies/typescript";
import Python from "../assets/technologies/python";
import ReactIcon from "../assets/technologies/react";
import AngularIcon from "../assets/technologies/angular";
import NodeJSIcon from "../assets/technologies/nodedotjs";
import FastAPIIcon from "../assets/technologies/fastapi";
import AWSIcon from "../assets/technologies/amazonwebservices";
import PostgresIcon from "../assets/technologies/postgresql";
import MongoDBIcon from "../assets/technologies/mongodb";
import DockerIcon from "../assets/technologies/docker";
import JavascriptIcon from "../assets/technologies/javascript";
import UnityIcon from "../assets/technologies/unity";
import { useTranslation } from "react-i18next";
import ExpressIcon from "@/assets/technologies/express";
import { Technology, Experience, Project, Education } from "../interfaces";
import FlaskIcon from "@/assets/technologies/flask";
import NextIcon from "@/assets/technologies/next";
import {
    Code,
    Film,
    Turtle,
    Unlink,
    Terminal,
    Car,
    PartyPopper,
    University,
    ImageIcon,
    MessagesSquare,
    DatabaseIcon,
} from "lucide-react";
import DigitalOceanIcon from "@/assets/technologies/digitalocean";
import CIcon from "@/assets/technologies/c";

interface Data {
    techStack: Technology[];
    experience: Experience[];
    projects: Project[];
    education: Education[];
}

export const DataContext = createContext<{ data: Data, loaded: boolean }>({
    data: {
        techStack: [],
        experience: [],
        projects: [],
        education: [],
    },
    loaded: false,
});

export function DataProvider({ children }: { children: ReactNode }) {
    const { t } = useTranslation("common");
    const [data, setData] = useState<Data>({
        techStack: [],
        experience: [],
        projects: [],
        education: [],
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const techStackFromStorage = t("techStack", { returnObjects: true }) as any[];
        const experienceFromStorage = t("experience", { returnObjects: true }) as any[];
        const projectsFromStorage = t("projects", { returnObjects: true }) as any[];
        const educationFromStorage = t("education", { returnObjects: true }) as any[];

        techStackFromStorage.map((item) => {
            item.icon = getIconByName(item.icon);
        });
        experienceFromStorage.map((item) => {
            item.icon = getIconByName(item.icon);
            item.startDate = new Date(item.startDate);
            if (item.endDate) item.endDate = new Date(item.endDate);
        });
        projectsFromStorage.map((item) => {
            item.icon = getIconByName(item.icon);
            item.technologies.forEach((tech: any) => {
                tech.icon = getIconByName(tech.icon);
            });
        });
        educationFromStorage.map((item) => {
            item.icon = getIconByName(item.icon);
            item.startDate = new Date(item.startDate);
            item.endDate = new Date(item.endDate);
        });

        const translatedData: Data = {
            techStack: techStackFromStorage,
            experience: experienceFromStorage,
            projects: projectsFromStorage,
            education: educationFromStorage,
        };
        setData(translatedData);
        setLoaded(true);
    }, [t]);

    const getIconByName = (name: string) => {
        const icons: { [key: string]: JSX.Element } = {
            "Go": <Go className='fill-purple-400 h-5' />,
            "Typescript": <Typescript className='fill-purple-400 h-5' />,
            "Python": <Python className='fill-purple-400 h-5' />,
            "C": <CIcon className='fill-purple-400 h-5' />,
            "React": <ReactIcon className='fill-purple-400 h-5' />,
            "Angular": <AngularIcon className='fill-purple-400 h-5' />,
            "Node.js": <NodeJSIcon className='fill-purple-400 w-5' />,
            "Express": <ExpressIcon className='fill-purple-400 w-5' />,
            "FastAPI": <FastAPIIcon className='fill-purple-400 w-5' />,
            "Flask": <FlaskIcon className='fill-purple-400 w-5' />,
            "Postgres": <PostgresIcon className='fill-purple-400 w-5' />,
            "MongoDB": <MongoDBIcon className='fill-purple-400 w-5' />,
            "AWS": <AWSIcon className='fill-purple-400 w-5' />,
            "Docker": <DockerIcon className='fill-purple-400 w-5' />,
            "Code": <Code color='#c084fc' size={40} />,
            "Film": <Film color='#c084fc' size={40} />,
            "Turtle": <Turtle color='#c084fc' size={40} />,
            "Unlink": <Unlink color='#c084fc' size={40} />,
            "Terminal": <Terminal color='#c084fc' size={40} />,
            "Car": <Car color='#c084fc' size={40} />,
            "PartyPopper": <PartyPopper color='#c084fc' size={40} />,
            "University": <University className='mb-1' color='#c084fc' size={40} />,
            "ImageIcon": <ImageIcon color='#c084fc' size={40} />,
            "MessagesSquare": <MessagesSquare color='#c084fc' size={40} />,
            "Unity": <UnityIcon className='fill-purple-400 h-5' />,
            "Javascript": <JavascriptIcon className='fill-purple-400 h-5' />,
            "Next.js": <NextIcon className='fill-purple-400 h-5' />,
            "DigitalOcean": <DigitalOceanIcon className='fill-purple-400 w-5' />,
            "Database": <DatabaseIcon color='#c084fc' size={40} />
        };
        return icons[name] || <div className='w-5 h-5' />;
    };

    return (
        <DataContext.Provider
            value={{
                data,
                loaded
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
