import { FileText, Mail, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className='mt-4 md:mt-2 flex flex-wrap justify-center md:justify-start gap-5'>
        <a target='_blank' aria-label="Email" href='mailto:cdavidsv6@gmail.com'>
          <Button name="Email">
            <Mail />
            cdavidsv6@gmail.com
          </Button>
        </a>
        <div className='flex gap-5'>
          <Tooltip>
            <TooltipTrigger>
              <a className='hover:brightness-125' target='_blank' aria-label="Resume" href='https://cdn.cdavidsv.dev/Carlos_David_Resume_English.pdf'>
                <span>
                  <FileText color="#6d28d9" size={26} />
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a className='hover:brightness-125' target='_blank' aria-label="Github" href='https://github.com/CDavidSV'>
                <Github color="#6d28d9" size={26} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a
                className='hover:brightness-125'
                target='_blank'
                aria-label="Linkedin"
                href='https://www.linkedin.com/in/carlos-david-sandoval-vargas-3b313719b/'
              >
                <Linkedin color="#6d28d9" size={26} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
