"use client";

import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        console.log('Fetching message from API...');
        const response = await fetch('http://127.0.0.1:8000/api/hello/');
        
        // Check if the response is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Debugging: Log the response

        // Check if the response has the expected structure
        if (data && data.message) {
          setMessage(data.message);
        } else {
          throw new Error('Invalid API response structure');
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h1 className="text-4xl font-bold">{message}</h1>
      )}
    </div>
  );
};

export default Home;