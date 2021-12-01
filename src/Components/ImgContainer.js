import React from "react";

const ImgContainer = ({ photo }) => {
    
  return (
    <div className="photo">
      <img className="img" src={photo.response.results[0].urls.regular} />
    </div>
  );
};

export default ImgContainer;
