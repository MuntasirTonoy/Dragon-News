import { Bookmark, EyeIcon, Share2, Star } from "lucide-react";
import { Link } from "react-router";

const Middle = ({ newsByCategory }) => {
  return (
    <div className=" col-span-6 ">
      <h1 className="text-primary font-semibold text-xl">All News</h1>
      <div className="grid grid-cols-1 gap-4">
        {newsByCategory.map((news) => (
          <div
            key={news.id}
            className=" bg-white space-y-5 border-1 border-gray-400/55  my-2 rounded-md  "
          >
            <div className="flex gap-4 p-3  items-center justify-between bg-base-200">
              <div className="flex gap-4 items-center ">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                    <img src={news.author.img} />
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-primary">
                    {" "}
                    {news.author.name}{" "}
                  </h1>
                  <h2 className="text-xs text-accent">
                    {news.author.published_date.substring(0, 10)}
                  </h2>
                </div>
              </div>
              <div className="flex gap-2  text-accent">
                <Bookmark className="cursor-pointer" />
                <Share2 className="cursor-pointer" />
              </div>
            </div>
            <div className=" p-3 space-y-3">
              <h1 className="text-xl font-bold"> {news.title}</h1>
              <img
                className="w-full h-80  object-cover rounded-md mt-4"
                src={news.image_url}
                alt={`${news.title} thumbnail`}
              />
              <p className="text-md text-accent line-clamp-6">{news.details}</p>
              <Link
                to={`/news-details/${news.id}`}
                className="text-orange-500 font-semibold cursor-pointer"
              >
                Read more
              </Link>
              <hr className="border-t-2 border-base-300   my-4" />
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Star fill="#f97316" strokeWidth={0} />
                  <Star fill="#f97316" strokeWidth={0} />
                  <Star fill="#f97316" strokeWidth={0} />
                  <Star fill="#f97316" strokeWidth={0} />
                  <p className="text-lg font-semibold text-accent">
                    {news.rating.number}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <EyeIcon />{" "}
                  <p className="text-sm font-semibold text-accent">
                    {news.total_view}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
