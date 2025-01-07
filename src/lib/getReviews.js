export default async function getReviews() {
    const result = await fetch(
        "https://next-mern-project.vercel.app/api/reviews",
        { 
          cache: 'no-store'
        }
    );
    
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}