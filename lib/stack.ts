export type StackGroup = {
  label: string;
  col: string;
  items: string[];
};

export const STACK_GROUPS: StackGroup[] = [
  {
    label: "Frontend",
    col: "1/6",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend & Database",
    col: "7/12",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication"],
  },
  {
    label: "Tools & Design",
    col: "4/10",
    items: ["Git", "GitHub", "Vercel", "Figma", "Postman"],
  },
];
