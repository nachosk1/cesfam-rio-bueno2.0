"use client";

import { useState, useEffect } from "react";
import FacebookPostItem from "./FacebookPostItem";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/facebook");
        if (!res.ok) {
          throw new Error(`Error fetching posts: ${res.statusText}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
        <div className="mt-10">
          {Array.isArray(posts) && posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5">
              {posts.map((post) => (
                <FacebookPostItem post={post} key={post.id} />
              ))}
            </div>
          ) : (
            <div className="border border-gray-300 p-5 rounded flex items-center justify-center my-4 bg-gray-100 h-80">
              <p className="text-lg text-gray-500 text-center"> 
                No hay noticias disponibles de Facebook
              </p>
            </div>
          )}
        </div>
    </section>
  );
}
