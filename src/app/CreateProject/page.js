'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    tags: '',
    link: '',
    isLatest: false,
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const newProject = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    };
  
    // Clear the form fields immediately after submission
    setFormData({
      title: '',
      image: '',
      tags: '',
      link: '',
      isLatest: false,
    });
  
    try {
      const response = await fetch('https://next-mern-project.netlify.app/api/projects', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Project created successfully:', data);
        alert('Project created successfully!');
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error('Failed to create project:', errorData);
        alert(`Failed to create project: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error while creating project:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Create New Project</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-lg font-medium mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="E.g., UI/UX Design, Development"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block text-lg font-medium mb-2">
            Project Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Enter project link"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isLatest"
            name="isLatest"
            checked={formData.isLatest}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="isLatest" className="text-lg font-medium">
            Mark as Latest Project
          </label>
        </div>

        <button
          type="submit"
          className={`w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${
            loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Project'}
        </button>
      </form>
    </div>
  );
}
