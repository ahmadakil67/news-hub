import React, { use } from "react";
import Marquee from "react-fast-marquee";

const latesNewsPromise = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const latestNews = use(latesNewsPromise);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-2">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover speed={100} gradient={false}>
        {latestNews.map((news, index) => (
          <span key={index} className="mx-4 text-sm text-gray-800 font-medium">
            {news.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
