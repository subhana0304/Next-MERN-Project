"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateReview() {
  const [formData, setFormData] = useState({
    quote: "",
    author: "",
    company: "",
    image: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Set the appropriate field to the entered value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const newReview = {
      ...formData
    };
  
    setFormData({
    quote: "",
    author: "",
    company: "",
    image: "",
    });
  
    try {
      const response = await fetch('https://next-mern-project-604r16s9q-subhana0304s-projects.vercel.app/api/reviews', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Review created successfully:', data);
        alert('Review created successfully!');
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error('Failed to create review:', errorData);
        alert(`Failed to create review: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error while creating review:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-8 mb-20">
      <h1 className="mt-32 text-4xl font-bold mb-8 text-center">Create Review</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="quote" style={{ display: "block", marginBottom: "5px" }}>
            Quote
          </label>
          <textarea
            id="quote"
            name="quote"
            rows="4"
            style={{ width: "100%", padding: "10px" }}
            value={formData.quote}
            onChange={handleChange}
            placeholder="Enter the quote"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="author" style={{ display: "block", marginBottom: "5px" }}>
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            style={{ width: "100%", padding: "10px" }}
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter the author"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="company" style={{ display: "block", marginBottom: "5px" }}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            style={{ width: "100%", padding: "10px" }}
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter the company name"
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="image" style={{ display: "block", marginBottom: "5px" }}>
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            style={{ width: "100%", padding: "10px" }}
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter the image URL"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Review'}
        </button>
      </form>
    </div>
  );
}

