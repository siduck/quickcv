
export default {
  details: {
    name: "Jane Doe",
    about:
      "Creative and detail-oriented frontend developer with over 3 years of experience crafting high-performance, accessible web interfaces.",
    email: "jane.doe@example.com",
    phone: "+91 9876543210",
    location: "Bengaluru, India",
    website: "https://janedoe.dev",
  },

  workExp: [
    {
      company: "OpenSource Inc.",
      title: "Frontend Engineer",
      date: "Jan 2022 – Present",
      desc: [
        "- Built and maintained a shared component library used across multiple product teams.",
      ].join("\n"),
    },
    {
      company: "Webify",
      title: "UI Developer",
      date: "Aug 2020 – Dec 2021",
      desc: [
        "- Developed responsive, accessible landing pages and collaborated closely with designers.",
      ].join("\n"),
    },
  ],

  education: [
    {
      institution: "NIT Trichy",
      date: "2016 – 2020",
      qualification: "B.Tech in CSE",
    },
    {
      institution: "Chaitanya College",
      date: "2016 – 2020",
      qualification: "Intermediate education",
    },
  ],

  projects: [
    {
      name: "Resume Builder",
      date: "2023",
      desc: "A Svelte-based app that helps users build and export professional resumes in real time.",
    },
    {
      name: "Nvim Config",
      date: "2022",
      desc: "Custom Neovim setup in Lua focused on performance, usability, and minimal distractions.",
    },
  ],

  skills:[
    {
      name: "HTML",
      icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 6.5L3.25 12l5.5 5.5m6.5-11l5.5 5.5l-5.5 5.5"/></svg>'
    }
  ]
};
