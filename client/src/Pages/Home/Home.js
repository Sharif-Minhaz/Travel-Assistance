import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import Hero from "../../component/Hero/Hero";
import Category from "../../component/Category/Category";
import "./Home.css";
import TopListingProperty from "../../component/TopListingProperty/TopListingProperty";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [add, setAdd] = useState([]);
  const [totalAdd, setTotalAdd] = useState(0);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts`)
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <section className="category-section h-auto w-auto py-5">
        <div className="container mt-5 mt-lg-0 mt-md-0">
          <div className="category-title mt-sm-5 mt-lg-0 mt-md-0">
            <p>Top Categories</p>
            <span>
              {category.length} categories {add.length} ads
            </span>
          </div>
          <div className="category">
            {category.map((categ) => (
              <Category
                // icon={categ.category_icon}s
                key={categ.id}
                // title={categ.title}
                // adds={categ.adds}
                categ={categ}
                setTotalAdd={setTotalAdd}
                totalAdd={totalAdd}
              ></Category>
            ))}
          </div>
        </div>
      </section>
      <TopListingProperty></TopListingProperty>
    </div>
  );
};

export default Home;
