import getProjects from "@/lib/getProjects";
import WorkSectionClient from "./WorkSectionClient";


export default async function WorkSection() {
  const { projects } = await getProjects();
  
  return <WorkSectionClient projects={projects} />
}
