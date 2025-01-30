"use client";

import { useContext, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ExperienceCard from "@/components/experienceCard";
import Socials from "@/components/socials";
import ProjectCard from "@/components/projectCard";
import EducationCard from "@/components/educationCard";
import { DataContext } from "@/components/data";

export default function Home() {
  const { techStack, experience, projects, education } =
    useContext(DataContext);

  const [allProjects, setAllProjects] = useState<boolean>(false);

  return (
    <div className='flex justify-center min-h-screen'>
      <div className='content p-10'>
        {/* header for general info */}
        <header>
          <div className='flex flex-wrap justify-center md:justify-normal'>
            <Avatar className='h-[150px] w-[150px] mr-0 mb-3 md:mb-0 md:mr-6'>
              <AvatarImage
                src='/img/CDavidBiblio.webp'
                alt='Carlos David Sandoval Vargas'
              />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div className='text-center md:text-start flex justify-center flex-col'>
              <h1 className='text-4xl font-bold'>
                Carlos David Sandoval Vargas
              </h1>
              <h2 className='text-xl font-semibold md:font-bold mt-2'>
                CS student at Tecnológico de Monterrey
              </h2>

              <span className='flex items-center justify-center md:justify-start mt-2'>
                <MapPin color='#6d28d9' className='mr-1' />
                <p>Monterrey, MX</p>
              </span>

              <Socials />
            </div>
          </div>

          <h3 className='mt-6 mb-2 text-2xl font-bold'>About me</h3>
          <p>
            I'm a computer science student and software developer with a knack
            for building efficient and scalable applications. My expertise spans
            backend development with Go and Node, frontend frameworks like React
            and Angular, and optimizing performance in complex systems. I enjoy
            tackling challenges like crafting robust APIs, implementing
            microservices, and delivering seamless user experiences.
          </p>
        </header>

        <Separator className='my-8' orientation='horizontal' />

        {/* Technologies section */}
        <section>
          <h3 className='mb-3 text-2xl font-bold'>Technologies</h3>
          <div className='flex gap-2 flex-wrap justify-center md:justify-normal'>
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min cursor-default bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300'
              >
                {tech.icon}
                <p className='font-semibold text-sm'>{tech.name}</p>
              </span>
            ))}
          </div>
        </section>

        <Separator className='my-8' orientation='horizontal' />

        <section>
          <h3 className='mb-3 text-2xl font-bold'>Experience</h3>
          {experience.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </section>

        <Separator className='my-8' orientation='horizontal' />
        <section>
          <h3 className='mb-3 text-2xl font-bold'>Projects</h3>
          {projects.map((p, i) =>
            i > 4 ? (
              <div key={p.name} className={!allProjects ? "hidden" : ""}>
                <ProjectCard project={p} />
              </div>
            ) : (
              <div key={p.name}>
                <ProjectCard project={p} />
              </div>
            )
          )}
          <button
            className='text-primary transition-all ease-in-out duration-200 hover:text-purple-400'
            onClick={() => setAllProjects(!allProjects)}
          >
            {allProjects ? "Show less" : "Show all"}
          </button>
        </section>

        <Separator className='my-8' orientation='horizontal' />

        <section>
          <h3 className='mb-3 text-2xl font-bold'>Education</h3>
          {education.map((edu) => (
            <EducationCard key={edu.institution} education={edu} />
          ))}
        </section>

        <Separator className='my-8' orientation='horizontal' />

        <footer>
          <p className='text-muted-foreground text-center md:text-start'>
            Made with ♥ by Carlos David Sandoval Vargas
          </p>
          <Socials />
        </footer>
      </div>
    </div>
  );
}
