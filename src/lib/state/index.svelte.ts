import type { State, ListsData } from "./types";
import dummyState from "./dummydata";

export let data: State = $state({
  details: {
    name: null,
    about: null,
    email: null,
    phone: null,
    location: null,
    website: null,
    role: null,
  },

  workExp: [{}],
  education: [{}],
  projects: [{}],
  skills: [{}],
});

export let ui = $state({
  mode: "split",
  viewScale: 70,
});

export const addCard = (type: ListsData) => {
  data[type].push({});
};

export const deleteCard = (type: ListsData, index: number) => {
  data[type].splice(index, 1);
};

export const demoState = {
  fill: () => {
    Object.assign(data.details, dummyState.details);

    data.workExp.length = 0;
    data.workExp.push(...dummyState.workExp);

    data.education.length = 0;
    data.education.push(...dummyState.education);

    data.projects.length = 0;
    data.projects.push(...dummyState.projects);

    data.skills.length = 0;
    data.skills.push(...dummyState.skills);
  },

  empty: () => {
    data.details = {};
    data.workExp = [];
    data.education = [];
    data.projects = [];
    data.skills = [];
  },
};
