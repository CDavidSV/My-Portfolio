"use client";

import { createContext, ReactNode, useState } from "react";
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
import ExpressIcon from "@/assets/technologies/express";
import {
  Code,
  Film,
  Turtle,
  Unlink,
  Terminal,
  Car,
  PartyPopper,
  University,
  ImageIcon
} from "lucide-react";
import { Technology, Experience, Project, Education } from "../interfaces";

interface Data {
  techStack: Technology[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

export const DataContext = createContext<Data>({
  techStack: [],
  experience: [],
  projects: [],
  education: [],
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [techStack] = useState<Technology[]>([
    {
      name: "Golang",
      icon: <Go className='fill-purple-400 h-5' />,
    },
    {
      name: "Typescript",
      icon: <Typescript className='fill-purple-400 h-5' />,
    },
    {
      name: "Python",
      icon: <Python className='fill-purple-400 h-5' />,
    },
    {
      name: "React",
      icon: <ReactIcon className='fill-purple-400 h-5' />,
    },
    {
      name: "Angular",
      icon: <AngularIcon className='fill-purple-400 h-5' />,
    },
    {
      name: "Node.js",
      icon: <NodeJSIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "Express",
      icon: <ExpressIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "FastAPI",
      icon: <FastAPIIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "Postgres",
      icon: <PostgresIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "MongoDB",
      icon: <MongoDBIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "AWS",
      icon: <AWSIcon className='fill-purple-400 w-5' />,
    },
    {
      name: "Docker",
      icon: <DockerIcon className='fill-purple-400 w-5' />,
    },
  ]);

  const [experience] = useState<Experience[]>([
    {
      company: "Wizeline",
      description:
        "Interned at Wizeline's Academy team, contributing to their own version of the Odoo e-learning module by implementing new views and backend models for a lecturers feature, managing data retrieval, and overseeing code reviews and merges from development to staging.",
      position: "Software Engineer Intern",
      startDate: new Date("2024/08/01"),
      endDate: new Date("2024/11/29"),
      icon: <Code color='#c084fc' size={40} />,
    },
  ]);

  const [projects] = useState<Project[]>([
    {
      name: "My Movie List",
      subtitle: "Interactive Movie App",
      description:
        "An Interactive Movie app that allows you to create lists and keep track of the movies and TV shows you are watching or plan to watch.",
      icon: <Film color='#c084fc' size={40} />,
      image: "/img/mymovielist.png",
      link: "https://www.mymovielist.cdavidsv.dev/",
      github: "https://github.com/CDavidSV/Movie-List-App",
      technologies: [
        {
          name: "React",
          icon: <ReactIcon className='fill-gray-400 h-4' />,
        },
        {
          name: "Node.js",
          icon: <NodeJSIcon className='fill-gray-400 w-4' />,
        },
        {
          name: "Express",
          icon: <ExpressIcon className='fill-gray-400 w-4' />,
        },
        {
          name: "MongoDB",
          icon: <MongoDBIcon className='fill-gray-400 w-4' />,
        },
        {
          name: "AWS",
          icon: <AWSIcon className='fill-gray-400 w-4' />,
        },
      ],
    },
    {
      name: "Avenue Multiagent System Simulation",
      subtitle: "Simulation",
      description:
        "A multi-agent system project to visualize the behavior of vehicles on an avenue.",
      icon: <Car color='#c084fc' size={40} />,
      technologies: [
        {
          name: "Python",
          icon: <Python className='fill-gray-400 h-4' />,
        },
        {
          name: "Unity",
          icon: <UnityIcon className='fill-gray-400 w-4' />,
        },
      ],
      github:
        "https://github.com/CDavidSV/Avenue-Multiagent-System-Simulation-API",
      link: "https://drive.google.com/file/d/1L2Uh6jvCdjabWiA1vxYWZZ551p-J2Rg7/view?usp=drive_link",
      image: "/img/multiagentes.png",
    },
    {
      name: "LOGO",
      subtitle: "Simple implementation of a LOGO interpreter",
      description:
        "This is a collaborative project to develop a simple LOGO programming language designed to help students learn the basic concepts of programming logic. A set of commands can be entered to move a robot across the screen and create drawings.",
      icon: <Turtle color='#c084fc' size={40} />,
      image:
        "https://user-images.githubusercontent.com/88672259/228347709-cea9194c-845e-482e-9f94-7af26dad21a9.jpg",
      link: "https://logo.cdavidsv.dev/",
      github: "https://github.com/CDavidSV/Mini-LOGO-Language",
      technologies: [
        {
          name: "Javascript",
          icon: <JavascriptIcon className='fill-gray-400 w-4' />,
        },
      ],
    },
    {
      name: "New Year Countdown",
      subtitle: "Page that counts down to the new year with fireworks",
      description:
        "Counts down to the new year in the user's timezone. Allows users to shoot firesworks that other users can see as well.",
      icon: <PartyPopper color='#c084fc' size={40} />,
      technologies: [
        {
          name: "Typescript",
          icon: <Typescript className='fill-gray-400 h-4' />,
        },
        {
          name: "Golang",
          icon: <Go className='fill-gray-400 h-4' />,
        },
        {
          name: "AWS",
          icon: <AWSIcon className='fill-gray-400 w-4' />,
        },
      ],
      github: "https://github.com/CDavidSV/New-Year-Countdown",
      link: "https://newyear.cdavidsv.dev/",
      image:
        "https://github.com/CDavidSV/New-Year-Countdown/blob/main/frontend/src/assets/images/gif_demo.gif?raw=true",
    },
    {
      name: "Dead Links Checker",
      subtitle: "Web Scraper to check for dead links",
      description:
        "A web scraper that checks for dead links in a website and returns a list of broken links.",
      icon: <Unlink color='#c084fc' size={40} />,
      technologies: [
        {
          name: "Golang",
          icon: <Go className='fill-gray-400 h-4' />,
        },
      ],
      github: "https://github.com/CDavidSV/Dead-Links-Scraper",
      image: "/img/deadlinks.png",
    },
    {
      name: "Bad Apple in ASCII",
      subtitle: "ASCII Video Player",
      description:
        "A simple project to display the Bad Apple video in the terminal using ASCII characters.",
      icon: <Terminal color='#c084fc' size={40} />,
      technologies: [
        {
          name: "Python",
          icon: <Python className='fill-gray-400 h-4' />,
        },
      ],
      github: "https://github.com/CDavidSV/Bad-Apple-in-ASCII",
      link: "",
      image: "/gif/badapple.gif",
    },
    {
      name: "DamiPic",
      subtitle: "Generate placeholder images",
      description: "Interactive website that allows users to generate placeholder images. Users can select the size, color, image format, and add text to display on the image.",
      icon: <ImageIcon color='#c084fc' size={40} />,
      technologies: [
        {
          name: "Golang",
          icon: <Go className='fill-gray-400 h-4' />,
        },
        {
          name: "Javascript",
          icon: <JavascriptIcon className='fill-gray-400 h-4' />,
        }
      ],
      github: "https://github.com/CDavidSV/DamiPic",
      image: "/img/DamiPic_Screenshot.webp"
    }
  ]);

  const [education] = useState<Education[]>([
    {
      institution: "Tecnológico de Monterrey",
      subtitle: "Nuevo León, MX",
      description: "BSc in Computer Science",
      startDate: new Date("2021/08/01"),
      endDate: new Date("2026/08/01"),
      icon: <University className='mb-1' color='#c084fc' size={40} />,
    },
  ]);

  return (
    <DataContext.Provider
      value={{
        techStack,
        experience,
        projects,
        education,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
