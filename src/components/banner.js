import ImageComponent from "./bannerlist";

import * as ImagesJSONData from "../../assets/data/data.json";
const imgData = ImagesJSONData.data.cards[0].card.card.imageGridCards.info;
const BannerComponents = () => {
  return (
    <div className="bannerImg">
      {imgData.map((banner) => {
        return <ImageComponent bannerContent={banner} />;
      })}
    </div>
  );
};
export default BannerComponents;
