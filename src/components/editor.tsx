import { setStore, store } from "../store";

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
            capitalize
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
    {name: "about", altname: "About you ( short self introduction)" },
    { name: "career Objective" },
  ];

  return (
    <div>
      <h3>About</h3>
      <div grid gap-3>
        {placeholders.map((x: any) => (
          <input
            capitalize
            placeholder={x.altname || x.name}
            onChange={(e) => setStore(x.name, e.target.value)}
            value={store[x.name] || ""}
          />
        ))}
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
  </div>
);
