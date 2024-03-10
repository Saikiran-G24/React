import RestaurantCard from "./RestaurantCard";

const Shimmer = () => {
  return (
    <div className="restaurent-List">
      {Array(25)
        .fill("")
        .map((e, index) => (
          <div key={index} className="Shimmer-Card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
