import { Education } from "../interfaces";
import { Badge } from "@/components/ui/badge";
import { formatDateYYYMM } from "@/lib/utils";

export default function EducationCard({ education }: { education: Education }) {
    return (
        <article
            role='listitem'
            className='flex flex-wrap-reverse md:flex-nowrap justify-between gap-1 md:gap-4'
        >
            <div className='flex justify-start gap-4'>
                <div
                    aria-hidden='true'
                    className='rounded-full bg-primary/45 h-fit p-2'
                >
                    {education.icon}
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-base'>
                        {education.institution}
                    </h3>
                    <p className='text-base'>{education.subtitle}</p>
                    <p className='text-muted-foreground'>
                        {education.description}
                    </p>
                </div>
            </div>
            <div className='w-full md:w-fit h-fit flex justify-end'>
                {education.ongoing && (
                    <Badge className='text-purple-400 bg-primary/45 text-nowrap'>
                        {formatDateYYYMM(education.startDate)} - Present
                    </Badge>
                )}
                {education.endDate ? (
                    <Badge className='text-purple-400 bg-primary/45 text-nowrap'>
                        {formatDateYYYMM(education.startDate)} -{" "}
                        {formatDateYYYMM(education.endDate)}
                    </Badge>
                ) : (
                    <Badge className='text-purple-400 bg-primary/45 text-nowrap'>
                        {formatDateYYYMM(education.startDate)}
                    </Badge>
                )}
            </div>
        </article>
    );
}
