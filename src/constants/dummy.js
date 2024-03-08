import { IMG } from "./images";

const slides = [
  {
    key: '1',
    title: 'Watch live video streams',
    description: 'Watch live streams, chat with others, buy products or services and get connected.',
    image: IMG.SLIDE1,
  },
  {
    key: '2',
    title: ' Go live with SkyyLytes',
    description: 'Broadcast high-quality videos in real-time',
    image: IMG.SLIDE2,
  },
];

const cards = [
  {
    key: '1',
    title: 'Melia Elix',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE1,
    imageIcon: IMG.SLIDE2,
    status: 'Verfied',
    stream: 'LIVE',
    watching: '2.6k',
    likes: '2.1k',
    comments: '1k',
  },
  {
    key: '2',
    title: 'Alix Williams',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE2,
    imageIcon: IMG.SLIDE1,
    status: 'Verfied',
    stream: 'Ad',
    watching: '3.6k',
    likes: '1.1k',
    comments: '2k',
  },
  {
    key: '3',
    title: 'Alix Williams',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE1,
    imageIcon: IMG.LOGO,
    status: 'Verfied',
    stream: 'Ad',
    watching: '3.6k',
    likes: '1.1k',
    comments: '2k',
  },
  {
    key: '4',
    title: 'Alix Williams',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE2,
    imageIcon: IMG.SLIDE1,
    status: 'Verfied',
    stream: 'Live',
    watching: '3.6k',
    likes: '1.1k',
    comments: '2k',
  },
];

const product_Cards = [
  {
    key: '1',
    title: 'ELV DIRECT Universal Mobile Phone Stand Holder With Cable Organise',
    image: IMG.PRODUCT,
    priceView: true,
    price: '300.99',
    actual_price: '350.99',
    stars: '2.5',
  },
  {
    key: '2',
    title: 'Buy PC & Gaming Gear at Deep Discounts.',
    image: IMG.PRODUCT_MOBILE,
    priceView: false,
    price: '299.99',
    actual_price: '320.99',
    stars: '5.5',
  },
  {
    key: '3',
    title: 'ELV DIRECT Universal Mobile Phone Stand Holder With Cable Organise',
    image: IMG.SLIDE1,
    priceView: true,
    price: '499.99',
    actual_price: '520.99',
    stars: '8.5',
  },
  {
    key: '4',
    title: 'Buy PC & Gaming Gear at Deep Discounts.',
    image: IMG.SLIDE2,
    priceView: false,
    price: '199.99',
    actual_price: '220.99',
    stars: '9.5',
  },
];

const comment_Cards = [
  {
    key: '1',
    title: 'Melia Elix',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE1,
    time: '1 sec ago'
  },
  {
    key: '2',
    title: 'Alix Williams',
    description: 'Nice Product!!',
    image: IMG.SLIDE2,
    time: '4 sec ago'
  },
  {
    key: '3',
    title: 'Will Jack',
    description: 'Great Product Man!!',
    image: IMG.SLIDE1,
    time: '5 min ago'
  },
  {
    key: '4',
    title: 'Babar Azam',
    description: 'Good Sport Product',
    image: IMG.SLIDE2,
    time: '1 min ago'
  },
  {
    key: '5',
    title: 'Melia Elix',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE1,
    time: '1 sec ago'
  },
  {
    key: '6',
    title: 'Alix Williams',
    description: 'Nice Product!!',
    image: IMG.SLIDE2,
    time: '4 sec ago'
  },
  {
    key: '7',
    title: 'Will Jack',
    description: 'Great Product Man!!',
    image: IMG.SLIDE1,
    time: '5 min ago'
  },
  {
    key: '8',
    title: 'Babar Azam',
    description: 'Good Sport Product',
    image: IMG.SLIDE2,
    time: '1 min ago'
  },
];

export { slides, cards, product_Cards, comment_Cards }