export default async function getProjects() {
    const result = await fetch(
        "https://next-mern-project-604r16s9q-subhana0304s-projects.vercel.app/api/projects",
        { 
          cache: 'no-store' // Disable caching
        }
    );
    
    if (!result.ok) {
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}

