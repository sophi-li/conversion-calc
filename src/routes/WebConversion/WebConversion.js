import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const WebConversion = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.allrecipes.com/recipe/20144/banana-banana-bread/"
      )
      .then((html) => {
        let $ = cheerio.load(html.data);
        console.log(html.data);
        console.log(cheerio.load(html));

        // console.log($("title").text());

        $(".ingredients-section li span .ingredients-item-name").each(function (
          i,
          element
        ) {
          let name = $(this).prepend().text();
          names.push(name);
        });

        setNames([names]);
      })
      .catch(function (err) {
        console.log("crawl failed");
      });
  }, []);

  return (
    <div>
      <ul>
        {names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      {/* <ul>{names}</ul> */}
    </div>
  );
};

export default WebConversion;
