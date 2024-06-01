import RestaurantComponents from "./restaurantcomp";
import * as restaurantData from "../../assets/data/restaurant.json";
import { useState } from "react";

const restaurantListData =
  restaurantData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantListComponents = () => {
  const [restaurantDetails, setRestaurantDetails] =
    useState(restaurantListData);
  const [restaurantFiltered, setRestaurantFiltered] =
    useState(restaurantListData);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="main-cont">
      <div className="filter-cont">
        <button
          onClick={() => {
            const filteredOutput = restaurantDetails.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            setRestaurantFiltered(filteredOutput);
          }}
        >
          show top rated restaurant
        </button>

        <div className="search-cont">
          <input
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            onClick={() => {
              const Output = restaurantDetails.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setRestaurantFiltered(Output);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setRestaurantFiltered(restaurantListData);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="rest-img-container">
        {restaurantFiltered.map((restData) => {
          return (
            <RestaurantComponents key={restData?.info?.id} resData={restData} />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantListComponents;
