"use client";
import { useState, useEffect } from "react";

export default function Discover() {
  const [pupLikes, setPupLikes] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isThumbClicked, setIsThumbClicked] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const luckyNumber = 3;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setData(data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isThumbClicked]);

  const thumbUp = () => {
    setIsMatch(false);
    setIsThumbClicked(!isThumbClicked);
    const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;
    if (getRandomNumber() === luckyNumber) {
      setPupLikes(pupLikes + 1);
      setIsMatch(true);
    }
  };

  const thumbDown = () => {
    setIsMatch(false);
    setIsThumbClicked(!isThumbClicked);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  return (
    <>
      <h1>Make New Friends</h1>
      <h3>Thumbs Up On Any Pups You'd Like to Meet!</h3>
      <div>
        <button onClick={() => thumbUp()}>Thumbs Up</button>
        <img src={data} />
        <button onClick={() => thumbDown()}>Thumbs Down</button>
      </div>
      <h1>Made Friends with {pupLikes} Pups So Far!</h1>
      {isMatch && <p>Yayayaya! That Pup Liked You Too! (Congratulations)</p>}
    </>
  );
}
