"use client";
import { useState, useEffect } from "react";

export default function Search() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const selectDog = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setData(data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <h1>Search By Breed!</h1>
      <h3>Breed Name:</h3>
      <input
        type="text"
        name="breed_name"
        placeholder="Type in a dog breed to begin..."
        onClick={() => setIsSearchClicked(!isSearchClicked)}
      />
      <button>Search!</button>
      {isSearchClicked &&
        Object.keys(data).map((item) => (
          <p onClick={() => selectDog()}>{item}</p>
        ))}
    </>
  );
}
