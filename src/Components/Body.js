import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import ImgContainer from "./ImgContainer";

const Body = () => {
  const [photo, setPhoto] = useState(null);
  const [showPhoto, setShowPhoto] = useState();

  const api = createApi({
    accessKey: "UAFqLKlwhoKAFYJPUWzMTW7QJBuiznkQrIUJGDH4v8s",
  });

  useEffect(() => {
    api.search
      .getPhotos({ query: "bird", orientation: "landscape" })
      .then((photo) => {
        setPhoto(photo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (photo === null) {
    return <div>Loading....</div>;
  } else if (photo.errors) {
    return (
      <div>
        <div>{photo.errors[0]}</div>
      </div>
    );
  } else {
    return (
      <div>
        {!showPhoto ? <button className="button" onClick={() => setShowPhoto(true)}>Show</button> : <button className="button" onClick={() => setShowPhoto(false)}>Hide</button>}
        {showPhoto ? (
          <ImgContainer photo={photo} />
        ) : (
          <p>Your photo will appear here</p>
        )}
      </div>
    );
  }
};

export default Body;
