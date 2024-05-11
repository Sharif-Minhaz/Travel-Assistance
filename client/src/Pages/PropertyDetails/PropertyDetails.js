import React from "react";
import { MdLocationOn } from "react-icons/md";

import "./PropertyDetails.css";
import PropertyDescription from "../../component/PropertyDescription/PropertyDescription";
import PropertyAddress from "../../component/PropertyAddress/PropertyAddress";
import PropertyFeatures from "../../component/PropertyFeatures/PropertyFeatures";
import { useLoaderData } from "react-router-dom";

const PropertyDetails = () => {
  const propertyData = useLoaderData();
  console.log(propertyData);
  const {
    address,
    area,
    bath,
    category,
    city,
    details,
    elevator,
    email,
    garage,
    gas,
    image,
    image1,
    image2,
    kitchen,
    month,
    name,
    phone,
    propertySize,
    rent,
    room,
    title,
    _id,
  } = propertyData;

  console.log(image, image1, image2);

  return (
    <div>
      <section className="banner-section container my-5">
        <h3>{title}</h3>
        <p>
          <MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
        </p>
        <div className="row gx-5">
          <div className="col-lg-8 col-md-8 col-12">
            <div
              id="carouselExampleIndicators1"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={image}
                    className="d-block w-100 banner-image-resize"
                    alt="..."
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={image1}
                    className="d-block w-100 banner-image-resize"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image2}
                    className="d-block w-100 banner-image-resize"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="features-section mt-3">
              <div className="features">
                <PropertyDescription></PropertyDescription>
              </div>
              <div className="features">
                <PropertyAddress></PropertyAddress>
              </div>
              <div className="features">
                <PropertyFeatures></PropertyFeatures>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 m-3 m-lg-0 m-md-0  contact-section ">
            <h4>Manage By:- </h4>
            <h5>RentUs</h5>
            <img src="./assets/img/logo.svg" alt="" />
            <p className="mt-3">
              Contact With property owner for more information
            </p>
            <div className="mt-2 fs-5">
              Chat <i className="fa-solid fa-message font-awesome-icon"></i>
            </div>

            <div className="row mt-2">
              <div className="col-6">
                {" "}
                <button className="contact-btn">
                  <a href={"tel:" + phone}>Call</a>
                </button>
              </div>
              <div className="col-6">
                {" "}
                <button className="contact-btn">
                  <a href={"mailto:" + email}>Email</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
