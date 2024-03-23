import React from "react";
import HomeChild from "../HomeChild/HomeChild";

const Home = () => {
  const content1 = [
    {
      id: "1",
      Title: "Railways",

      img: "https://images.livemint.com/img/2023/02/15/1600x900/Vande_Bharat__1676446328347_1676446328597_1676446328597.jpg",
    },
    {
      id: "2",
      Title: "Airways",

      img: "https://c4.wallpaperflare.com/wallpaper/182/655/658/aircrafts-planes-commercial-aircraft-wallpaper-preview.jpg",
    },
    {
      id: "3",
      Title: "Cabs",

      img: "https://lh3.googleusercontent.com/proxy/C1YBAzPruU47OEA6F8vnh3o0gdN7KCdaOIiuAnQSSW39Wuip3AGYoDBf3kqVL13X5wtsvurGm8mCKAxsG3cqTOtdRLVtMybuleY-tg",
    },];
    const others =[
    { 
      id: "4",
      Title: "Bus",

      img: "https://media.istockphoto.com/id/1154164634/photo/white-bus-traveling-on-the-asphalt-road-around-line-of-trees-in-rural-landscape-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=8yyyfujfMAfnU_VTmfghGls33EsDIjlOcqYtB83NShs=",
    },
    {
      id: "5",
      Title: "Minibus",

      img: "https://5.imimg.com/data5/ANDROID/Default/2021/5/CB/QB/XW/16485832/product-jpeg.jpg",
    },
    {
      id: "6",
      Title: "Waterways",

      img: "https://c4.wallpaperflare.com/wallpaper/905/654/385/5bd31e1f538c0-wallpaper-preview.jpg",
    },
  ];
  return (
    <div>
      < div className="p-3">        
      <h1 className="text-white text-4xl m-3">Select Transport</h1>
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
