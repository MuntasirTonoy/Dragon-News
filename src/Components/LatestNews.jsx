import React from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="bg-base-300 flex gap-3 items-center p-4 ">
      <button className="btn btn-secondary rounded-none"> Latest</button>
      <Marquee className="flex gap-5 " pauseOnHover={true} speed={50}>
        <p>
          Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
