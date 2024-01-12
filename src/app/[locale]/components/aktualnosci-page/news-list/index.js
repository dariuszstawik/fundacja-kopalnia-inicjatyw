"use client";
import { useState } from "react";
import NewsCard from "../../global-components/news-card";
import Button from "../../global-components/button";

export default function NewsList({ newsPosts, locale, more, readMore }) {
  const [maxAmount, setMaxAmount] = useState(4);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 2);
  };

  const newsList = (newsAmount) => {
    return (
      newsPosts &&
      newsPosts.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              title={item.fields.title}
              slug={item.fields.slug}
              img={item.fields.image ? item.fields.image : ""}
              locale={locale}
              readMore={readMore}
              isDark
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 xl:grid-cols-2 mx-auto px-10 xl:px-28 list-none">
        {newsList(maxAmount)}
      </ul>
      <div className="flex justify-center m-16">
        {maxAmount < newsPosts.length && (
          <Button onClick={increaseMaxAmount}>{more}</Button>
        )}
      </div>
    </div>
  );
}
