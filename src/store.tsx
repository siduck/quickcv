import { createStore } from "solid-js/store";

const default_data = {
  "full name": "",
  designation: "",
  phone: "",
  address: "",
  "email address": "",
  "github username": "",
  "career objective": "",
  about: "",
};

export const [store, setStore] = createStore(default_data);
