import { createStore } from "solid-js/store";

export const default_data = {
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
};

export const [store, setStore] = createStore(default_data);
