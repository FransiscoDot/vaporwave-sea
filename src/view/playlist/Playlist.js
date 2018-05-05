import React, { Component } from 'react';

import Song from "./Song";

const mockData = [
  {
    title: "Machintosh plus",
    duration: "3.56",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Tassoni",
    duration: "5.02",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Lemonade",
    duration: "3.62",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Machintosh plus",
    duration: "3.56",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Tassoni",
    duration: "5.02",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Lemonade",
    duration: "3.62",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Machintosh plus",
    duration: "3.56",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Tassoni",
    duration: "5.02",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Lemonade",
    duration: "3.62",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Machintosh plus",
    duration: "3.56",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Tassoni",
    duration: "5.02",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  },
  {
    title: "Lemonade",
    duration: "3.62",
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg"
  }
];

class Playlist extends Component {
  render() {
    return (
      <div>
        {
          mockData.map((s, i) => (
            <Song
              key={i}
              title={s.title}
              duration={s.duration}
              image={s.image}
            />
          ))
        }
      </div>
    )
  }
};

export default Playlist;
