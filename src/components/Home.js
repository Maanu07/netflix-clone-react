import React from "react";

const Home = () => {
  return (
    <div className="outer-container">
      <div
        className="cover-container"
        style={{
          backgroundImage:
            "url(`https://i.pinimg.com/originals/74/e5/62/74e562e656b4e051f222b003343c9042.jpg`)",
          height: "100vh",
        }}
      >
        <div
          className="body"
          style={{
            color: "black",
          }}
        >
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
