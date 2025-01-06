export default async function getProjectss() {
    const result = await fetch(
        "http://localhost:3001/api/projects"
    );
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
  return result.json();
}