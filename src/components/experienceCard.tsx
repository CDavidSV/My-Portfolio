import { Experience } from "../interfaces";
import { Badge } from "@/components/ui/badge"
import { formatDateYYYMM } from "@/lib/utils";

export default function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <div className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-1 md:gap-4'>
            <div className='flex justify-start gap-4'>
                <div className='rounded-full bg-primary/45 h-fit p-2'>
                    {experience.icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-base'>{experience.company}</h3>
                    <h4 className='text-base'>{experience.position}</h4>
                    <p className='text-muted-foreground'>{experience.description}</p>
                </div>
            </div>
            <div className="w-full md:w-fit h-fit flex justify-end">
                {experience.ongoing
                    && <Badge className="text-purple-400 bg-primary/45 text-nowrap">{formatDateYYYMM(experience.startDate)} - Present</Badge>}
                {experience.endDate
                    ? <Badge className="text-purple-400 bg-primary/45 text-nowrap">{formatDateYYYMM(experience.startDate)} - {formatDateYYYMM(experience.endDate)}</Badge>
                    : <Badge className="text-purple-400 bg-primary/45 text-nowrap">{formatDateYYYMM(experience.startDate)}</Badge>}
            </div>
        </div>
    );
}
