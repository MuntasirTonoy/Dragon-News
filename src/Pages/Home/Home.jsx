import React, { useEffect, useState } from "react";
import Middle from "./middle";
import RightBar from "./RightBar";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [newsByCategory, setNewsByCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsByCategory(data));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 w-11/12 mx-auto mt-10">
      <div className="col-span-3 p-5">
        <div>
          <h1 className="text-primary font-semibold text-xl">All Category</h1>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className=" px-5 py-3 font-semibold text-left text-accent rounded-md hover:bg-red-100"
                to={`/category/${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Middle newsByCategory={newsByCategory} />
      <RightBar />
    </div>
  );
};

export default Home;
