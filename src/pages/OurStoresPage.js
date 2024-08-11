import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import StoreCard from '../components/StoreCard';
import FindStoreForm from '../components/FindStoreForm';
import { getStores } from '../data/mockApi';
import { aboutUsText, ourProductsAndBrandsText } from '../content/aboutContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import friendsIMG from "../assets/AboutUs/AboutUs2.jpg";

const OurStoresPage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores().then((data) => setStores(data));
  }, []);

  return (
    <>
      <Container className="my-3">
        <img
          className="img-fluid w-100"
          src={friendsIMG}
          alt="Image of 3 women and 3 men sitting in a red couch in front of a water fountain, imitating the series friends."
        />
        <h1 className="text-center my-3">About Us</h1>
        <p>{aboutUsText}</p>

        <h1 className="text-center my-3">Our Products & Brands</h1>
        <p>{ourProductsAndBrandsText}</p>

        <h1 className="text-center my-4">Our Stores</h1>

        <div className="container row">
          {stores.map(store => (
            <StoreCard
              key={store.id}
              imageSrc={store.imageSrc}
              storeName={store.storeName}
              location={store.location}
            />
          ))}
        </div>

        <h5 className="text-center mb-5">View All</h5>

        <h1 className="text-center my-4">Find A Store Near You</h1>

        <FindStoreForm />

        <div className="my-4">
          <h6 className="my-ruler"><span className="text-color-lightGrey">OR</span></h6>
        </div>

        <FindStoreForm isInternational />
      </Container>
    </>
  );
};

export default OurStoresPage;
