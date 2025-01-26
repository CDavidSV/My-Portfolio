export interface Technology {
    name: string;
    icon: React.ReactNode;
}

export interface Link {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface Experience {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    ongoing?: boolean;
    description: string;
    icon: React.ReactNode;
}

export interface Project {
    name: string;
    icon: React.ReactNode;
    subtitle: string;
    description: string;
    technologies: Technology[];
    image: string;
    link?: string;
    github?: string;
}

export interface Education {
    institution: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    startDate: Date;
    endDate?: Date;
    ongoing?: boolean;
}
