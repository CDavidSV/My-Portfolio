"use client";

import { useContext, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ExperienceCard from "@/components/experienceCard";
import Socials from "@/components/socials";
import ProjectCard from "@/components/projectCard";
import EducationCard from "@/components/educationCard";
import { DataContext } from "@/components/data";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Home() {
    const { data, loaded } = useContext(DataContext);
    const { techStack, experience, projects, education } = data;
    const { t, i18n } = useTranslation();

    const [allProjects, setAllProjects] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
    }, [i18n.language, i18n.resolvedLanguage]);

    return (
        <div
            className={
                "flex justify-center min-h-screen transition-opacity duration-300 ease-in-out" +
                (loaded ? "" : " opacity-0")
            }
        >
            <main className='content p-10'>
                {/* header for general info */}
                <header>
                    <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-normal'>
                        <Avatar className='h-[150px] w-[150px] mr-0 mb-3 md:mb-0 md:mr-6'>
                            <AvatarImage
                                src='/img/CDavid_Grad.webp'
                                alt='Carlos David Sandoval Vargas'
                            />
                            <AvatarFallback>CS</AvatarFallback>
                        </Avatar>
                        <div className='text-center md:text-start flex justify-center flex-col w-full'>
                            <h1 className='text-4xl font-bold'>{t("name")}</h1>
                            <p className='text-xl font-semibold md:font-bold mt-2'>
                                {t("title")}
                            </p>

                            <div className='flex items-center justify-center md:justify-start mt-2'>
                                <MapPin
                                    aria-hidden='true'
                                    color='#6d28d9'
                                    className='mr-1'
                                />
                                <p>Monterrey, MX</p>
                            </div>

                            <div className='flex justify-center md:justify-between items-center gap-4 flex-wrap md:flex-nowrap'>
                                <Socials />
                                <Select
                                    defaultValue='en'
                                    onValueChange={(value) =>
                                        i18n.changeLanguage(value)
                                    }
                                >
                                    <SelectTrigger
                                        aria-label={t("language")}
                                        className='w-[130px]'
                                    >
                                        <SelectValue placeholder='Language' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel className='text-muted-foreground text-xs'>
                                                Languages
                                            </SelectLabel>
                                            <SelectItem value='en'>
                                                English
                                            </SelectItem>
                                            <SelectItem value='es'>
                                                Español
                                            </SelectItem>
                                            <SelectItem value='ja'>
                                                日本語
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <h2 className='mt-6 mb-2 text-2xl font-bold'>
                        {t("aboutMe")}
                    </h2>
                    <p>{t("aboutMeDescription")}</p>
                </header>

                <section
                    aria-labelledby='availability-heading'
                    className='mt-8 border-l-4 border-primary bg-primary/10 px-5 py-4 rounded-sm'
                >
                    <h2 id='availability-heading' className='text-xl font-bold'>
                        {t("availabilityTitle")}
                    </h2>
                    <p className='mt-2'>{t("availabilityDescription")}</p>
                    <Button asChild className='mt-4'>
                        <a
                            aria-label={t("contactEmail")}
                            href='mailto:cdavidsv6@gmail.com'
                        >
                            <Mail />
                            {t("contactEmail")}
                        </a>
                    </Button>
                </section>

                <Separator className='my-8' orientation='horizontal' />

                {/* Technologies section */}
                <section aria-labelledby='technologies-heading'>
                    <h2
                        id='technologies-heading'
                        className='mb-3 text-2xl font-bold'
                    >
                        {t("technologiesTitle")}
                    </h2>
                    <ul className='flex gap-2 flex-wrap justify-center md:justify-normal'>
                        {techStack.map((tech) => (
                            <li
                                key={tech.name}
                                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min cursor-default bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300'
                            >
                                <span aria-hidden='true'>{tech.icon}</span>
                                <p className='font-semibold text-sm text-nowrap'>
                                    {tech.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>

                <Separator className='my-8' orientation='horizontal' />

                <section aria-labelledby='experience-heading'>
                    <h2
                        id='experience-heading'
                        className='mb-3 text-2xl font-bold'
                    >
                        {t("experienceTitle")}
                    </h2>
                    <div role='list'>
                        {experience.map((exp) => (
                            <ExperienceCard
                                key={exp.company}
                                experience={exp}
                            />
                        ))}
                    </div>
                </section>

                <Separator className='my-8' orientation='horizontal' />
                <section aria-labelledby='projects-heading'>
                    <h2
                        id='projects-heading'
                        className='mb-3 text-2xl font-bold'
                    >
                        {t("projectsTitle")}
                    </h2>
                    <ul id='project-list'>
                        {projects
                            .slice(0, allProjects ? projects.length : 5)
                            .map((project) => (
                                <li key={project.name}>
                                    <ProjectCard project={project} />
                                </li>
                            ))}
                    </ul>
                    <button
                        className='rounded-sm text-primary transition-all ease-in-out duration-200 hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                        onClick={() => setAllProjects(!allProjects)}
                        aria-controls='project-list'
                        aria-expanded={allProjects}
                    >
                        {allProjects ? t("showLess") : t("showAll")}
                    </button>
                </section>

                <Separator className='my-8' orientation='horizontal' />

                <section aria-labelledby='education-heading'>
                    <h2
                        id='education-heading'
                        className='mb-3 text-2xl font-bold'
                    >
                        {t("educationTitle")}
                    </h2>
                    <div role='list'>
                        {education.map((edu) => (
                            <EducationCard
                                key={edu.institution}
                                education={edu}
                            />
                        ))}
                    </div>
                </section>

                <Separator className='my-8' orientation='horizontal' />

                <footer>
                    <p className='text-muted-foreground text-center md:text-start'>
                        {t("footerMsg")}
                    </p>
                    <Socials />
                </footer>
            </main>
        </div>
    );
}
