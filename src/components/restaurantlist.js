import RestaurantComponents, { RecommendedRestaurant } from "./restaurantcomp";
import RestaurantShimmerPage from "./shimmer";
import { useState, useEffect } from "react";
import UseRestaurantList from "../custom-hook/userestaurantlist";

const RestaurantListComponents = () => {
  const [restaurantFiltered, setRestaurantFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantDetails = UseRestaurantList();
  useEffect(() => {
    setRestaurantFiltered(restaurantDetails);
  }, [restaurantDetails]);
  const RecommendedCardDetails = RecommendedRestaurant(RestaurantComponents);

  return restaurantFiltered.length ? (
    <div className="main-cont">
      <div className="filter-cont flex my-3 justify-between">
        <button
          className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
          onClick={() => {
            const filteredOutput = restaurantDetails.filter((rest) => {
              return rest.info.avgRating < 4;
            });
            setRestaurantFiltered(filteredOutput);
          }}
        >
          Show top rated restaurant
        </button>

        <div className="search-cont">
          <input
            className="border border-gray-500 rounded w-4/6 mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchInput"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
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
            className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
            onClick={() => {
              setRestaurantFiltered(restaurantDetails);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="rest-list-cont flex flex-wrap mt-6 ">
        {restaurantFiltered.map((restData) => {
          return restData?.info?.avgRating >= 4 ? (
            <RecommendedCardDetails
              key={restData?.info?.id}
              resData={restData}
            />
          ) : (
            <RestaurantComponents key={restData?.info?.id} resData={restData} />
          );
        })}
      </div>
    </div>
  ) : (
    // <div className="loader-cont">
    //   <h1>Loading...</h1>
    // </div>
    <RestaurantShimmerPage />
  );
};
export default RestaurantListComponents;
