export default async function getReviews() {
    const result = await fetch(
        "https://next-mern-project-604r16s9q-subhana0304s-projects.vercel.app/api/reviews",
        { 
          cache: 'no-store'
        }
    );
    
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}