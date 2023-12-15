import React from "react";
import HomeChild from "../HomeChild/HomeChild";

const Home = () => {
  const content1 = [
    {
      id: "1",
      Title: "Annapurna",

      img: "https://saihomefood.in/cdn/shop/products/meals.jpg?v=1571216142",
    },
    {
      id: "2",
      Title: "CocoCola",

      img: "https://b.zmtcdn.com/data/pictures/8/20152028/ed21fb9137d59407e166257d362b7b8a.jpg?fit=around%7C960:500&crop=960:500",
    },
    {
      id: "3",
      Title: "MBA",

      img: "https://miro.medium.com/v2/resize:fit:1200/1*cKboMAZ69mrUAOLvFLRo4A.jpeg",
    },];
    const others =[
    { 
      id: "4",
      Title: "LIBRARY",

      img: "https://assets.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg",
    },
    {
      id: "5",
      Title: "STATIONERY",

      img: "https://5.imimg.com/data5/ANDROID/Default/2021/5/CB/QB/XW/16485832/product-jpeg.jpg",
    },
  ];
  return (
    <div>
      <div>
        
      </div>
      <div className=" mx-20 items-center justify-center">
        <div className="">
        <div className=" flex flex-row flex-wrap justify-evenly">
          {content1.map((content, index) => (
            <HomeChild data={content} key={index} />
          ))}</div>
          <div className=" flex flex-row flex-wrap justify-evenly">
          {others.map((content, index) => (
            <HomeChild data={content} key={index} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
