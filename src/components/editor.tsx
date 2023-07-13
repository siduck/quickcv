import { setStore, store } from "../store";
import { For } from "solid-js";

import { Icon } from "@iconify-icon/solid";

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
      <div grid md:grid-cols-2 gap-3>
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
    {
      name: "profile",
      altname: "profile (write short self introduction & goals)",
    },
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
            <div flex flex-col md:flex-row gap-3 items-center>
              {Object.entries(obj).map(([key, value]) => (
                <input
                  w-full
                  placeholder={key}
                  value={value}
                  onchange={(e) =>
                    setStore(store_name, index(), key, e.target.value)}
                />
              ))}

              <button
                aria-label="delete input"
                class="!bg-slate-7 !p-1 text-3xl !rounded-full"
                onclick={() => {
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index()),
                  );
                }}
              >
                <Icon
                  icon="ion:close-circle"
                  class="text-red-3 dark:text-red-4 hover:text-red-2"
                />
              </button>
            </div>
          )}
        </For>
      </div>

      <button
        class="!bg-blue-6 mt-5 mx-auto !text-white-1"
        onclick={() => {
          let emptyObj = store_name == "education"
            ? { institution: "", qualification: "", time: "" }
            : { company: "", position: "", time: "" };

          setStore(store_name, [...store[store_name], emptyObj]);
        }}
      >
        <Icon icon="ic:round-add-circle" text-xl />
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

      <div grid md:flex flex-wrap gap-3>
        <For each={store[store_name]}>
          {(val, index) => (
            <div
              bg="slate-1 dark:black-3"
              grid
              grid-cols="[1fr_auto]"
              items-center
              focus-within="border-2 border-solid border-blue"
              rounded-lg
            >
              <input
                rounded-r-none
                w-full
                focus:outline-none
                placeholder={store_name == "skills"
                  ? "skill"
                  : "interest / hobby"}
                value={val}
                size={val.length}
                onchange={(e) =>
                  setStore(store_name, index(), e.target.value)}
              />

              <button
                aria-label="delete input"
                class="shadow-none !bg-slate-1 dark:!bg-black-3 p-2 text-3xl rounded-l-none"
                onclick={() =>
                  setStore(
                    store_name,
                    store[store_name].filter((_, i) => i !== index()),
                  )}
              >
                <Icon
                  icon="ion:close-circle"
                  class="text-red-4 dark:text-red-4 hover:text-red-2"
                />
              </button>
            </div>
          )}
        </For>

        <button
          class="!bg-blue-6 !text-white-1"
          onclick={() => {
            setStore(store_name, [...store[store_name], ""]);
          }}
        >
          <Icon icon="ic:round-add-circle" text-xl />
          Add
        </button>
      </div>
    </div>
  );
};

const Oss = () => (
  <div>
    <h3 capitalize>Open source projects</h3>

    {/* input fields */}
    <div grid gap-3>
      <For each={store.oss}>
        {(obj, index) => (
          <div flex flex-col md:flex-row gap-3 items-center>
            {Object.entries(obj).map(([key, value]) => (
              <input
                w-full
                placeholder={key}
                value={value}
                onchange={(e) => setStore("oss", index(), key, e.target.value)}
              />
            ))}

            <button
              aria-label="delete input"
              class="!bg-slate-7 !p-1 text-3xl !rounded-full"
              onclick={() =>
                setStore(
                  "oss",
                  store.oss.filter((_, i) => i !== index()),
                )}
            >
              <Icon
                icon="ion:close-circle"
                class="text-red-3 dark:text-red-4 hover:text-red-2"
              />
            </button>
          </div>
        )}
      </For>
    </div>

    <button
      class="!bg-blue-6 mt-5 mx-auto !text-white-1"
      onclick={() => {
        setStore("oss", [...store.oss, {
          "project name": "",
          description: "",
          languages: "",
        }]);
      }}
    >
      <Icon icon="ic:round-add-circle" text-xl />
      Add
    </button>
  </div>
);

export default () => (
  <div
    bg="white-1 dark:black-2"
    p="5 md:10"
    pt="0 md:5"
    class="max-w-5xl center shadow-sm rounded-xl grid gap-5 [&_*]:animate_smooth"
    animate_smooth
  >
    <PersonalDetails />
    <About />
    <Education_WorkExp store_name="education" />
    <Education_WorkExp store_name="work experience" />
    <Skills_Hobbies store_name="skills" />
    <Skills_Hobbies store_name="interests" />
    <Oss />
  </div>
);
