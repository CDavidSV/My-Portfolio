import { Project } from "@/interfaces";
import { Github, Link } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='flex flex-wrap-reverse sm:flex-nowrap justify-between gap-1 sm:gap-4 mb-8 sm:mb-5'>
      <div className='flex justify-start gap-4 w-full sm:w-2/3'>
        <div className='rounded-full bg-primary/45 h-fit p-2'>
          {project.icon}
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-base'>{project.name}</h3>
          <h4 className='text-base'>{project.subtitle}</h4>
          <p className='text-muted-foreground'>{project.description}</p>

          <div className='flex gap-2 flex-wrap'>
            {project.technologies.map((tech) => (
              <span className='flex items-center gap-2 rounded-full bg-gray-900 py-1 px-2 max-w-min cursor-default'>
                {tech.icon}
                <p className='text-xs font-semibold text-muted-foreground'>
                  {tech.name}
                </p>
              </span>
            ))}
          </div>

          <div className='flex gap-2 mt-2 flex-wrap'>
            {project.link && (
              <a
                target='_blank'
                rel='noreferrer'
                href={project.link}
                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300'
              >
                <Link color='#c084fc' />
              </a>
            )}
            {project.github && (
              <a
                target='_blank'
                rel='noreferrer'
                href={project.github}
                className='flex items-center gap-2 rounded-full py-1 px-3 max-w-min bg-primary/45 hover:bg-primary/65 transition-colors ease-in-out duration-300'
              >
                <Github color='#c084fc' />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mb-3 sm:mb-0 w-full sm:w-1/3 rounded-2xl h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className='object-cover w-full h-full'
          loading="lazy"
        />
      </div>
    </div>
  );
}
