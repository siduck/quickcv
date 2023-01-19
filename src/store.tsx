import { createStore } from "solid-js/store";

const default_data = {
  "full name": "",
  designation: "",
  phone: "",
  "email address": "",
  "github username": "",
};

export const [store, setStore] = createStore(default_data);
