export interface WorkExp {
  company: string | null;
  title: string | null;
  date: string | null;
  desc: string | null;
}

export interface Details {
  name: string | null;
  about: string | null;
  email: string | null;
  phone: string | null;
  location: string | null;
  website: string | null;
}

export interface Education {
  institution: string | null;
  date: string | null;
  qualification: string | null;
}

export interface Project {
  name: string | null;
  date: string | null;
  desc: string | null;
}

export interface State {
  details: Details;
  workExp: WorkExp[];
  education: Education[];
  projects: Project[];
}

export type ListsData = "workExp" | "education" | "projects";
