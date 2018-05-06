import delay from "./delay";

const data = [
  {
    title: "Machintosh plus",
    duration: 3.56,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Tassoni",
    duration: 5.02,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/20171108.mp3"
  },
  {
    title: "Lemonade",
    duration: 3.62,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711081.mp3"
  },
  {
    title: "Machintosh plus",
    duration: 3.56,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Tassoni",
    duration: 5.02,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Lemonade",
    duration: 3.62,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Machintosh plus",
    duration: 3.56,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Tassoni",
    duration: 5.02,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Lemonade",
    duration: 3.62,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Machintosh plus",
    duration: 3.56,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Tassoni",
    duration: 5.02,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  },
  {
    title: "Lemonade",
    duration: 3.62,
    image: "http://d310a9hpolx59w.cloudfront.net/product_photos/42681840/print_original.jpg",
    url: "http://www.lijinke.cn/music/201711082.mp3"
  }
];

export default class PlaylistApi {
  static getSongs() {
    return new Promise(async resolve => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
}
