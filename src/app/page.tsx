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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { data, loaded } = useContext(DataContext);
    const { techStack, experience, projects, education } = data;
    const { t, i18n } = useTranslation();

    const [allProjects, setAllProjects] = useState<boolean>(false);

    return (
        <div className={'flex justify-center min-h-screen transition-opacity duration-300 ease-in-out' + (loaded ? '' : ' opacity-0')}>
            <div className='content p-10'>
                {/* header for general info */}
                <header>
                    <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-normal'>
                        <Avatar className='h-[150px] w-[150px] mr-0 mb-3 md:mb-0 md:mr-6'>
                            <AvatarImage
                                src='/img/CDavidBiblio.webp'
                                alt='Carlos David Sandoval Vargas'
                            />
                            <AvatarFallback>CS</AvatarFallback>
                        </Avatar>
                        <div className='text-center md:text-start flex justify-center flex-col w-full'>
                            <h1 className='text-4xl font-bold'>
                                {t("name")}
                            </h1>
                            <h2 className='text-xl font-semibold md:font-bold mt-2'>
                                {t("title")}
                            </h2>

                            <span className='flex items-center justify-center md:justify-start mt-2'>
                                <MapPin color='#6d28d9' className='mr-1' />
                                <p>Monterrey, MX</p>
                            </span>

                            <div className='flex justify-center md:justify-between items-center gap-4 flex-wrap md:flex-nowrap'>
                                <Socials />
                                <Select defaultValue='en' onValueChange={(value) => i18n.changeLanguage(value)}>
                                    <SelectTrigger className='w-[130px]'>
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

                    <h3 className='mt-6 mb-2 text-2xl font-bold'>{t("aboutMe")}</h3>
                    <p>
                        {t("aboutMeDescription")}
                    </p>
                </header>

                <Separator className='my-8' orientation='horizontal' />

                {/* Technologies section */}
                <section>
                    <h3 className='mb-3 text-2xl font-bold'>{t("technologiesTitle")}</h3>
                    <div className='flex gap-2 flex-wrap justify-center md:justify-normal'>
                        {techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min cursor-default bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300'
                            >
                                {tech.icon}
                                <p className='font-semibold text-sm'>
                                    {tech.name}
                                </p>
                            </span>
                        ))}
                    </div>
                </section>

                <Separator className='my-8' orientation='horizontal' />

                <section>
                    <h3 className='mb-3 text-2xl font-bold'>{t("experienceTitle")}</h3>
                    {experience.map((exp) => (
                        <ExperienceCard key={exp.company} experience={exp} />
                    ))}
                </section>

                <Separator className='my-8' orientation='horizontal' />
                <section>
                    <h3 className='mb-3 text-2xl font-bold'>{t("projectsTitle")}</h3>
                    {projects.map((p, i) =>
                        i > 4 ? (
                            <div
                                key={p.name}
                                className={!allProjects ? "hidden" : ""}
                            >
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
                    <h3 className='mb-3 text-2xl font-bold'>{t("educationTitle")}</h3>
                    {education.map((edu) => (
                        <EducationCard key={edu.institution} education={edu} />
                    ))}
                </section>

                <Separator className='my-8' orientation='horizontal' />

                <footer>
                    <p className='text-muted-foreground text-center md:text-start'>
                        {t("footerMsg")}
                    </p>
                    <Socials />
                </footer>
            </div>
        </div>
    );
}
