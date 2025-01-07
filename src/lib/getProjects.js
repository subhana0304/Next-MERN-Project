export default async function getProjects() {
    const result = await fetch(
        `${process.env.WEBSITE_URL}/api/projects`,
        { 
          cache: 'no-store' // Disable caching
        }
    );
    
    if (!result.ok) {
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}

