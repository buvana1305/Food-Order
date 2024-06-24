import BaseUrls from "../../ultis/BaseUrls";
const ImageComponent = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <div className="w-[90] h-[120]">
      <img
        src={`${BaseUrls.BANNER_IMAGE_URL}${imageId}`}
        width="200"
        height="200"
        alt="img1"
      />
    </div>
  );
};
export default ImageComponent;
