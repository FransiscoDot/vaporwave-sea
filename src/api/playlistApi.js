import delay from "./delay";

const data = [
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

export default class PlaylistApi {
  static getSongs() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
}
