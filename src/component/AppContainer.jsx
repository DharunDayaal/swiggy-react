import React from "react";
import "./appContainer.css";

const AppContainer = () => {
  return (
    <>
      <div className="apps">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="w-100 text">
              For better experience,download the Swiggy app now
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-md-3">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN">
                <img src="/googleplay.png" alt="googlePlayStoreImage" />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 mt-md-3">
            <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920">
                <img src="/appstore.png" alt="appStoreImage" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppContainer;
