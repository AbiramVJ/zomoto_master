import React, { useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// component
import PhotoCollection from "./PhotoCollection";

// redux
import { useSelector,useDispatch } from "react-redux";
import { getImage } from "../../../redux/reducers/Image/image.action";



function Photos() {
  const [photos,setPhotos] = useState([ ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalState)=>globalState.restaurant.selectedRestaurant.restaurant);

  useEffect(()=>{
    if (reduxState)
    dispatch(getImage(reduxState?.photos)).then((data) => {
      const photos = [];
      data.payload.images.map(({ location }) => photos.push(location));
      //console.log(images);
      setPhotos(photos);
    });

  },[reduxState])

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
}

export default Photos;