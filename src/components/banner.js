import ImageComponent from "./bannerlist";

import * as ImagesJSONData from "../../assets/data/data.json";
const imgData = ImagesJSONData.data.cards[0].card.card.imageGridCards.info;
const BannerComponents = () => {
  return (
    <div>
      <div className="flex justify-between my-3">
        <p className="font-bold text-2xl px-5">What's On Your Mind?</p>
        <div className="btn-container">
          <button
            className="bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-md mr-2"
            onClick={() => {
              document.getElementById("container").scrollLeft -= 100 * 4;
            }}
          >
            &lt;
          </button>
          <button
            className="bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-md"
            onClick={() => {
              document.getElementById("container").scrollLeft += 100 * 4;
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="img-container flex overflow-hidden px-20" id="container">
        {imgData.map((banner) => {
          return (
            <div>
              <ImageComponent key={banner.id} bannerContent={banner} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BannerComponents;
