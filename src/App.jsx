import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setImages } from './store/features/gallery';
import fetchImages from './services';
import dropdownContent from './components/dropdown/content.json';
import Dropdown from './components/dropdown';
import Image from './components/Image';

import './App.css';

function App() {
  const { section, sort, window, images } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(section, sort, window).then((data) => {
      dispatch(setImages(data.data));
      setIsLoading(false);
    });
  }, [dispatch, section, sort, window]);

  const getImage = (image) => {
    return image.type !== 'video/mp4' && image.link;
  };

  return (
    <>
      <div className='dropdowns'>
        {dropdownContent.map((dropdown) => (
          <Dropdown key={dropdown.type} type={dropdown.type} options={dropdown.options} />
        ))}
      </div>

      <div className='loader-wrapper'>
        {isLoading && <span className="loader">Loading...</span>}
      </div>

      <ul className="App">
        {images &&
          images.map((image) => {
            const imageURL = image.images && getImage(image.images[0]);
            return imageURL && <Image key={imageURL} url={imageURL} title={image.title} />;
          })}
      </ul>
    </>
  );
}

export default App;
