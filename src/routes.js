import Settings from "./pages/Settings.jsx";
import Data from "./pages/Data.jsx";
import DemoIcon from "./components/DemoIcon.jsx";

const routes = [Data, Settings].map((component) => {
  const name = component.displayName || component.name;
  const path = `/${name
    .split("Page")[0]
    .split("")
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join("")
    .toLowerCase()}`;

  const icon = component.icon || DemoIcon;
  const title =
    component.title ||
    name
      .split("Page")[0]
      .split("")
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join("");
  return {
    component,
    path,
    title,
    icon,
  };
});
// routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
