import star from '../star.jpg';

function ImgComponent() {
  console.log(star);
  return <img src={star} alt='별' width='300' />;
}

export default ImgComponent;