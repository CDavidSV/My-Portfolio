import { FileText, Mail, Github, Linkedin } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Socials() {
    const { t } = useTranslation();

    return (
        <TooltipProvider delayDuration={300}>
            <nav
                aria-label={t("socialLinks")}
                className='mt-4 md:mt-2 flex flex-wrap justify-center md:justify-start gap-5'
            >
                <Button asChild>
                    <a
                        aria-label={t("email")}
                        href='mailto:cdavidsv6@gmail.com'
                    >
                        <Mail />
                        cdavidsv6@gmail.com
                    </a>
                </Button>
                <div className='flex gap-5 items-center'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                className='rounded-sm hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                                target='_blank'
                                rel='noreferrer'
                                aria-label={t("resume")}
                                href={t("resumeURL")}
                            >
                                <span>
                                    <FileText
                                        aria-hidden='true'
                                        color='#6d28d9'
                                        size={26}
                                    />
                                </span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{t("resume")}</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                className='rounded-sm hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                                target='_blank'
                                rel='noreferrer'
                                aria-label={t("github")}
                                href='https://github.com/CDavidSV'
                            >
                                <Github
                                    aria-hidden='true'
                                    color='#6d28d9'
                                    size={26}
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{t("github")}</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                className='rounded-sm hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                                target='_blank'
                                rel='noreferrer'
                                aria-label={t("linkedin")}
                                href='https://www.linkedin.com/in/carlos-david-sandoval/'
                            >
                                <Linkedin
                                    aria-hidden='true'
                                    color='#6d28d9'
                                    size={26}
                                />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{t("linkedin")}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </nav>
        </TooltipProvider>
    );
}
