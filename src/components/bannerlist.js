const BANNER_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const ImageComponent = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <div>
      <img
        className="bannerImg1"
        src={`${BANNER_IMAGE_URL}${imageId}`}
        width="120"
        height="150"
        alt="img1"
      />
    </div>
  );
};
export default ImageComponent;
