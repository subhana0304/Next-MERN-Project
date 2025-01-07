export default async function getReviews() {
    const result = await fetch(
        `${process.env.NEXTAUTH_URL}/api/reviews`,
        { 
          cache: 'no-store'
        }
    );
    
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}