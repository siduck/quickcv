import type { State, ListsData } from "./types";

const defaultObjects = {
  workExp: { company: null, title: null, date: null, description: null },
  education: { institution: null, date: null, qualification: null },
  projects: { name: null, date: null, description: null },
};

export let data: State = $state({
  details: {
    name: null,
    about: null,
    email: null,
    phone: null,
    location: null,
    website: null,
  },

  workExp: [defaultObjects.workExp],
  education: [defaultObjects.education],
  projects: [defaultObjects.projects],
});

export const addCard = (type: ListsData) => {
  data[type].push(defaultObjects[type]);
};

export const deleteCard = (type: ListsData, index: number) => {
  if (data[type].length > 1) {
    data[type].splice(index, 1);
  }
};
