export default async function getReviews() {
    const result = await fetch(
        "http://localhost:3000/api/reviews",
        { 
          cache: 'no-store'
        }
    );
    
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}