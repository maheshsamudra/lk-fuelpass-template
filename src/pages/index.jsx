import * as React from "react";
import Generator from "../components/Generator";

// markup
const IndexPage = () => {
  return (
    <>
      <div className="container text-center">
        <h1 className={"h2 mt-5 mb-4"}>Fuel Pass Generator</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 my-5">
            <Generator />
          </div>
        </div>
      </div>
      <footer>
        <div className="container text-center">
          <hr />
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p>
                Disclaimer: We do not save any of the QR codes uploaded to this
                website. This is purely Front-end. However, we are using Google
                Analytics to see the number of QA codes generated, which is
                purely for our self satisfaction :).
              </p>
              <p>
                වියාචනය: අපි මෙයට උඩුගත කරන ලද QR කේත කිසිවක් සුරැකෙන්නේ නැත
                වෙබ් අඩවිය. මෙය සම්පූර්ණයෙන්ම ඉදිරිපස කෙළවරයි.
              </p>
            </div>
          </div>
          <small>
            Icon from:{" "}
            <a
              href="https://www.flaticon.com/free-icons/fuel"
              title="fuel icons"
            >
              Fuel icons created by Freepik - Flaticon
            </a>
          </small>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
