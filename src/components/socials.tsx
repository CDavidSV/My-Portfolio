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
      <div className='mt-4 md:mt-2 flex flex-wrap justify-center md:justify-start gap-2'>
        <a target='_blank' aria-label="Email" href='mailto:cdavidsv6@gmail.com'>
          <Button name="Email">
            <Mail />
            cdavidsv6@gmail.com
          </Button>
        </a>
        <div className='flex'>
          <Tooltip>
            <TooltipTrigger>
              <a target='_blank' aria-label="Resume" href=''>
                <Button name="Resume" className='hover:brightness-125' variant='link' asChild>
                  <FileText size={56} />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a target='_blank' aria-label="Github" href='https://github.com/CDavidSV'>
                <Button name="Github" className='hover:brightness-125' variant='link' asChild>
                  <Github size={56} />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a
                target='_blank'
                aria-label="Linkedin"
                href='https://www.linkedin.com/in/carlos-david-sandoval-vargas-3b313719b/'
              >
                <Button name="Linkedin" className='hover:brightness-125' variant='link' asChild>
                  <Linkedin size={56} />
                </Button>
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
