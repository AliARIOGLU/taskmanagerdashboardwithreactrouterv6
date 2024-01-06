import { redirect } from "react-router-dom";

export function ProjectsPage() {
  return <div>Hello</div>;
}

export const projectsPageLoader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return redirect("/");

  //   return null;
};
