import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      <div className="mt-5 grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} className={'btn text-accent bg-base-100 border-0'} key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
