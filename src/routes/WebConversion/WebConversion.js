import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";

class App extends Component {
  state = { names: [] };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.allrecipes.com/recipe/20144/banana-banana-bread/"
      )
      .then((html) => {
        let names = [];
        let $ = cheerio.load(html.data);
        console.log(html.data);
        console.log(cheerio.load(html));
        $(".ingredients-section li span .ingredients-item-name").each(function (
          i,
          element
        ) {
          let name = $(this).prepend().text();
          names.push(name);
        });

        this.setState({ names });
      })
      .catch(function (err) {
        console.log("crawl failed");
      });
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button>Submit</button>
        <ul>
          {this.state.names.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
