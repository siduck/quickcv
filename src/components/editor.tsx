import { setStore, store } from "../store";
import { For } from "solid-js";

import "iconify-icon";

const PersonalDetails = () => {
  const placeholders = [
    { name: "full name" },
    { name: "designation", altname: "designation (ex: Web dev)" },
    { name: "phone" },
    { name: "address" },
    { name: "email address" },
    { name: "github username" },
  ];

  return (
    <div>
      <h3>Personal Details</h3>
      <div grid grid-cols-2 gap-3>
        {placeholders.map((x: any) => (
          <input
            placeholder={x.altname || x.name}
            onChange={(e) => setStore(x.name, e.target.value)}
            value={store[x.name] || ""}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const placeholders = [
    { name: "about", altname: "About you ( short self introduction)" },
    { name: "career Objective" },
  ];

  return (
    <div>
      <h3>About</h3>
      <div grid gap-3>
        {placeholders.map((x: any) => (
          <input
            placeholder={x.altname || x.name}
            onChange={(e) => setStore(x.name, e.target.value)}
            value={store[x.name] || ""}
          />
        ))}
      </div>
    </div>
  );
};

const Education_WorkExp = (props: any) => {
  const { store_name } = props;

  return (
    <div>
      <h3 capitalize>{store_name}</h3>

      <div grid gap-3>
        <For each={store[store_name]}>
          {(obj, index) => (
            <div flex gap-3 items-center>
              {Object.entries(obj).map(([key, value]) => (
                <input
                  w-full
                  placeholder={key}
                  value={store[store_name][index()][key]}
                  onchange={(e) =>
                    setStore(store_name, index(), key, e.target.value)}
                />
              ))}

              <button
                class="!bg-slate-7 !p-1 text-3xl !rounded-full"
                onclick={() =>
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index),
                  )}
              >
                <iconify-icon icon="ion:close-circle" text="red-3 dark:red-4">
                </iconify-icon>
              </button>
            </div>
          )}
        </For>
      </div>

      <button
        class="!bg-blue-6 mt-5 mx-auto"
        onclick={() => {
          let emptyObj = store_name == "education"
            ? { institution: "", qualification: "", time: "" }
            : { company: "", position: "", time: "" };

          setStore(store_name, [...store[store_name], emptyObj]);
        }}
      >
        <iconify-icon icon="ic:round-add-circle" text-xl></iconify-icon>
        Add
      </button>
    </div>
  );
};

const Skills_Hobbies = (props: any) => {
  const { store_name } = props;

  return (
    <div>
      <h3 capitalize>{store_name}</h3>

      <div flex flex-wrap gap-3>
        <For each={store[store_name]}>
          {(val, index) => (
            <div flex items-center>
              <input
                rounded-r-none
                w-full
                placeholder={store_name == "skills"
                  ? "skill"
                  : "interest / hobby"}
                value={val}
                onchange={(e) =>
                  setStore(store_name, index(), key, e.target.value)}
              />

              <button
                class="!bg-slate-7 p-2 text-3xl rounded-l-none"
                onclick={() =>
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index),
                  )}
              >
                <iconify-icon icon="ion:close-circle" text="red-3 dark:red-4">
                </iconify-icon>
              </button>
            </div>
          )}
        </For>

        <button
          class="!bg-blue-6"
          onclick={() => {
            setStore(store_name, [...store[store_name], ""]);
          }}
        >
          <iconify-icon icon="ic:round-add-circle" text-xl></iconify-icon>
          Add
        </button>
      </div>
    </div>
  );
};

export default () => (
  <div
    bg="white-1 dark:black-2"
    class="h-full m-10 p-10 pt-5 max-w-5xl center shadow-sm rounded-xl grid gap-5"
  >
    <PersonalDetails />
    <About />
    <Education_WorkExp store_name="education" />
    <Education_WorkExp store_name="work experience" />
    <Skills_Hobbies store_name="skills" />
    <Skills_Hobbies store_name="interests" />
  </div>
);
