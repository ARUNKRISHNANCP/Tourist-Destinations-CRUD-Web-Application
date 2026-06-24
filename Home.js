import React from "react";
import TourCard from "../components/TourCard";

const tours = [
  {
    id: 1,
    title: "Paris Getaway",
    description: "Experience the City of Lights with a 5-day stay.",
    price: 1200,
    image: "https://source.unsplash.com/400x250/?paris"
  },
  {
    id: 2,
    title: "Maldives Retreat",
    description: "Relax on the beaches of Maldives for 7 days.",
    price: 1800,
    image: "https://source.unsplash.com/400x250/?maldives"
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    description: "Explore the mountains with a 6-day tour.",
    price: 1500,
    image: "https://www.bing.com/images/search?view=detailV2&ccid=QgBXWXu%2F&id=E3D6D2706DEA0A055973D9C26A10D8F8C0F427B8&thid=OIP.QgBXWXu_JV7iWcenLSJ2cAHaE6&mediaurl=https%3A%2F%2Fwww.muchbetteradventures.com%2Fmagazine%2Fcontent%2Fimages%2Fsize%2Fw2000%2F2019%2F07%2F10083606%2FiStock-808144682.jpg&exph=835&expw=1257&q=Swiss+Alps+Adventure&FORM=IRPRST&ck=478702CD2FC29E5FACAC3F4124C964E7&selectedIndex=1&itb=0&cw=1375&ch=664&ajaxhist=0&ajaxserp=0"
  }
];

const Home = () => {
  return (
    <div className="home">
      <h1>Our Top Tours</h1>
      <div className="tours-container">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Home;
