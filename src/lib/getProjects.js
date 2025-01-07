export default async function getProjects() {
    const result = await fetch(
        "http://localhost:3000/api/projects",
        { 
          cache: 'force-cache',
          next: { revalidate: 3600 } 
        }
    );
    
    if(!result.ok){
        throw new Error("There was an Error fetching posts");
    }
    
    return result.json();
}

// const projects = [
//   {
//     title: "Romans & Partners",
//     image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Estate-Agency-Web-Design-London.jpg",
//     tags: ["UI/UX Design", "Property Portal"],
//     isLatest: true,
//     link: "#"
//   },
//   {
//     title: "Alveena Casa",
//     image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Alveena_Casa_London_Web_Design_New-1400x1582.jpg",
//     tags: ["UI/UX Design", "E-Commerce"],
//     link: "#"
//   },
//   {
//     title: "Fudli App",
//     image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/Fudli-Restaurant-Food-Order-System-1400x1582.jpg",
//     tags: ["E-Commerce", "Digital Product"],
//     link: "#"
//   },
//   {
//     title: "Re-Core Pilates",
//     image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/recore-pilates-london-web-design-agency-2024-1400x1641.jpeg",
//     tags: ["UI/UX Design", "Development"],
//     link: "#"
//   },
//   {
//     title: "Tech SuperPowers",
//     image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/03_TSP_London_Web_Design-1400x1582.jpg",
//     tags: ["UI/UX Design", "Development"],
//     link: "#"
//   }
// ]