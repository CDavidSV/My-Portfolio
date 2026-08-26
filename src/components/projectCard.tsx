"use client";

import Image from "next/image";
import { Project } from "../interfaces";
import { Github, Link } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <article className='flex flex-wrap-reverse sm:flex-nowrap justify-between gap-1 sm:gap-4 mb-8 sm:mb-5'>
            <div className='flex justify-start gap-4 w-full sm:w-2/3'>
                <div
                    aria-hidden='true'
                    className='rounded-full bg-primary/45 h-fit p-2'
                >
                    {project.icon}
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-base'>{project.name}</h3>
                    <p className='text-base'>{project.subtitle}</p>
                    <p className='text-muted-foreground'>
                        {project.description}
                    </p>

                    <ul className='flex gap-2 flex-wrap'>
                        {project.technologies.map((tech, i) => (
                            <li
                                key={i}
                                className='flex items-center gap-2 rounded-full bg-gray-900 py-1 px-2 max-w-min cursor-default'
                            >
                                <span aria-hidden='true'>{tech.icon}</span>
                                <p className='text-xs font-semibold text-muted-foreground'>
                                    {tech.name}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className='flex gap-2 mt-2 flex-wrap'>
                        {project.link && (
                            <a
                                target='_blank'
                                rel='noreferrer'
                                aria-label={t("viewProject", {
                                    project: project.name,
                                })}
                                href={project.link}
                                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                            >
                                <Link aria-hidden='true' color='#c084fc' />
                            </a>
                        )}
                        {project.github && (
                            <a
                                target='_blank'
                                rel='noreferrer'
                                aria-label={t("viewRepository", {
                                    project: project.name,
                                })}
                                href={project.github}
                                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                            >
                                <Github aria-hidden='true' color='#c084fc' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className='mb-3 sm:mb-0 w-full sm:w-1/3 rounded-xl h-52 overflow-hidden'>
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    sizes='(max-width: 639px) 100vw, 33vw'
                    className='object-cover w-full h-full'
                />
            </div>
        </article>
    );
}
