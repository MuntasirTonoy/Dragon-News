import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="col-span-3 p-5">
      <div>
        <h1 className="text-primary font-semibold text-xl">All Category</h1>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className=" px-5 py-3 font-semibold text-accent rounded-md hover:bg-red-100"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
