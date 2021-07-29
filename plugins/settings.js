export default function({}, inject) {
  inject("settings", {
    get: key => {
      if (process.server)
        throw new Error(`Cannot get setting "${key}" on server`);
      let data = localStorage.getItem("settings");

      let parsed = JSON.parse(data || "{}");

      return parsed[key];
    },
    set: (key, value) => {
      if (process.server) throw new Error("Cannot set settings on server");
      let old = localStorage.getItem("settings");
      let parsed = JSON.parse(old || "{}");

      parsed[key] = value;

      localStorage.setItem("settings", JSON.stringify(parsed));
    }
  });
}
