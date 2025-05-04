import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, useLoaderData, useParams } from "react-router";
import RightBar from "./Home/RightBar";
import { ArrowLeft } from "lucide-react";
import LoginBtn from "../Components/Loginbtn";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [id, data]);

  return (
    <div>
      <Header />
      <LoginBtn />
      <section className="grid grid-cols-12 gap-4 p-10">
        <main className="col-span-9  p-5">
          <Link to="/" className="text-primary font-semibold text-xl mb-5 flex">
            <span>
              <ArrowLeft />
            </span>{" "}
            <span>Home</span>
          </Link>
          <div className="border-1 rounded-md border-gray-600/30 p-5 space-y-5 ">
            {/* image and details */}
            <img
              src={news?.image_url}
              alt="hehe"
              className="w-full object-cover rounded-md mb-4"
            />
            <h1 className="lg:text-3xl text-xl font-bold"> {news?.title}</h1>
            <p className="text-md text-accent">{news?.details}</p>
            <button className="btn btn-secondary">
              <ArrowLeft /> All news in this category
            </button>{" "}
            <br />
            <div className="flex gap-2 items-center flex-wrap">
              {news?.tags?.map((tag) => (
                <button key={tag} className=" btn  btn-sm">
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </main>
        <aside className="col-span-3">
          <RightBar />
        </aside>
      </section>
    </div>
  );
};

export default NewsDetails;
