import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindStoreForm = ({ isInternational }) => {
  return (
    <Form className="row row-cols-lg-auto g-3 align-items-center">
      {isInternational ? (
        <>
          <div className="col-12 col-lg-8">
            <select className="form-select rounded-0">
              <option selected>Select Country/Region</option>
              <option value="1">Austria</option>
              <option value="2">Canada</option>
              {/* Add more options here */}
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="col-7 col-lg-5">
            <Form.Control
              type="text"
              placeholder="Postcode"
              className="rounded-0"
            />
          </div>
          <div className="col-5 col-lg-3">
            <select className="form-select rounded-0">
              <option selected>Select Radius</option>
              <option value="1">12 KM</option>
              <option value="2">30 KM</option>
              {/* Add more options here */}
            </select>
          </div>
        </>
      )}
      <div className="col-12 col-lg-4">
        <Button
          type="submit"
          className="btn color-purple text-white w-100 rounded-0"
        >
          Search
        </Button>
      </div>
    </Form>
  );
};

export default FindStoreForm;
