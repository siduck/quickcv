import { createStore } from "solid-js/store";

export const get_default_data = () => {
  return {
    "full name": "",
    designation: "",
    phone: "",
    address: "",
    "email address": "",
    "github username": "",
    "career objective": "",
    about: "",

    education: [
      { institution: "", qualification: "", time: "" },
    ],

    "work experience": [
      { company: "", position: "", time: "" },
    ],

    skills: [""],
    interests: [""],
    oss: [{ "project name": "", description: "", languages: "" }],
  };
};

export const get_demo_data = () => {
  return {
    "full name": "sidhanth rathod",
    designation: "frontend web developer",
    phone: "+91 9701611257",
    address: "H-No: 1-18/389/49 Brahmanwadi, Begumpet, Hyderabad-500016",
    "email address": "siduck@tutanota.com",
    "github username": "siduck",
    "career objective":
      "To obtain a reliable and challenging frontend web developer's position at a reputed firm & building beautiful UI/UX interfaces whilst improving my skills",
    about: "frontend web developer",

    education: [
      {
        institution: "sri chaitainya junior college",
        qualification: "intermediate(11-12th grade)",
        time: "2017-2019",
      },
      {
        institution: "sister nividita school",
        qualification: "10th grade (SSC)",
        time: "2017",
      },
    ],

    "work experience": [
      {
        company: "jamesmccallumconsulting",
        position: "Remote frontend react developer (freelancing)",
        time: "2022 Oct - 2023 Jan",
      },
    ],

    skills: [
      "html skill-icons:html",
      "css skill-icons:css",
      "javascript skill-icons:javascript",
      "typescript skill-icons:typescript",
      "react logos:react",
      "tailwind css logos:tailwindcss-icon",
      "unocss simple-icons:unocss",
      "solid JS logos:solidjs-icon",
    ],

    interests: [
      "tweaking neovim skill-icons:neovim-dark",
      "Gnu / artix linux simple-icons:artixlinux",
      "lua scripting file-icons:lua",
      "Ricing linux bi:palette2",
      "shell scripting file-icons:terminal",
    ],

    oss: [
      {
        "project name": "nvchad",
        description:
          "An attempt to make neovim cli functional like an IDE while being very beautiful, blazing fast startuptime",
        languages: "lua "
      },
    ],
  };
};

export const [store, setStore] = createStore(get_default_data());
