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
const users = [
  {
    key: 1,
    username: "John Doe",
    avatar: IMG.AVATAR1,
    lastMessage: "Hey, how are you doing?",
    unreadMessages: 2,
    lastMessageTime: "2024-03-04T12:00:00Z",
    messages: [
      {
        id: 1,
        sender: "John Doe",
        content: "Hey, how are you doing?",
        timestamp: "2024-03-05T12:00:00Z",
        replies:[
          {
            id: 1,
            sender: "currentUser",
            content: "Hey, how are you doing?",
            repliedTo: 1,
            timestamp: "2024-03-05T12:00:00Z",
          },
        ]
      },
      {
        id: 2,
        sender: "currentUser",
        content: "I'm doing well, thanks! How about you?",
        timestamp: "2024-03-07T12:05:00Z"
      }
    ]
  },
  {
    key: 2,
    username: "Jane Doe",
    avatar: IMG.AVATAR2,
    lastMessage: "Don't forget our meeting tomorrow.",
    unreadMessages: 5,
    lastMessageTime: "2024-03-07T08:30:00Z",
    messages: [
      {
        id: 1,
        sender: "currentUser",
        content: "Will we still meet at the usual place?",
        timestamp: "2024-03-06T15:00:00Z"
      },
      {
        id: 2,
        sender: "Jane Doe",
        content: "Don't forget our meeting tomorrow.",
        timestamp: "2024-03-07T08:30:00Z"
      }
    ]
  },
  {
    key: 3,
    username: "Bob Smith",
    avatar: IMG.AVATAR3,
    lastMessage: "Thanks for the help!",
    unreadMessages: 0,
    lastMessageTime: "2024-03-06T16:45:00Z",
    messages: [
      {
        id: 1,
        sender: "Bob Smith",
        content: "Thanks for the help!",
        
        timestamp: "2024-03-06T16:45:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "No problem, Bob! Glad I could assist.",
        timestamp: "2024-03-06T17:00:00Z"
      }
    ]
  },
  {
    key: 4,
    username: "Alice Wonder",
    avatar: IMG.AVATAR4,
    lastMessage: "Can we talk later?",
    unreadMessages: 3,
    lastMessageTime: "2024-03-07T09:15:00Z",
    messages: [
      {
        id: 1,
        sender: "Alice Wonder",
        content: "Can we talk later?",
        timestamp: "2024-03-07T09:15:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "Sure, I'll be available after 3 PM.",
        timestamp: "2024-03-07T09:30:00Z"
      }
    ]
  },
  {
    key: 5,
    username: "Mike Ross",
    avatar: IMG.AVATAR1,
    lastMessage: "Received the package, thanks!",
    unreadMessages: 1,
    lastMessageTime: "2024-03-07T10:25:00Z",
    messages: [
      {
        id: 1,
        sender: "currentUser",
        content: "Hey, just wanted to confirm you got the package?",
        timestamp: "2024-03-07T10:00:00Z"
      },
      {
        id: 2,
        sender: "Mike Ross",
        content: "Received the package, thanks!",
        timestamp: "2024-03-07T10:25:00Z"
      }
    ]
  },
  {
    key: 6,
    username: "Emily Clark",
    avatar: IMG.AVATAR2,
    lastMessage: "See you at the party!",
    unreadMessages: 4,
    lastMessageTime: "2024-03-07T11:00:00Z",
    messages: [
      {
        id: 1,
        sender: "Emily Clark",
        content: "See you at the party!",
        timestamp: "2024-03-07T11:00:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "Can't wait! What time does it start?",
        timestamp: "2024-03-07T11:15:00Z"
      }
    ]
  },
  {
    key: 7,
    username: "David Miller",
    avatar: IMG.AVATAR3,
    lastMessage: "Finalizing the report, any updates?",
    unreadMessages: 7,
    lastMessageTime: "2024-03-06T14:20:00Z",
    messages: [
      {
        id: 1,
        sender: "currentUser",
        content: "How's the report going?",
        timestamp: "2024-03-06T13:50:00Z"
      },
      {
        id: 2,
        sender: "David Miller",
        content: "Finalizing the report, any updates?",
        timestamp: "2024-03-06T14:20:00Z"
      }
    ]
  },
  {
    key: 8,
    username: "Sarah Johnson",
    avatar: IMG.AVATAR4,
    lastMessage: "Loved the pictures from the trip!",
    unreadMessages: 2,
    lastMessageTime: "2024-03-07T07:55:00Z",
    messages: [
      {
        id: 1,
        sender: "Sarah Johnson",
        content: "Loved the pictures from the trip!",
        timestamp: "2024-03-07T07:55:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "I'm glad you enjoyed them! It was a great trip.",
        timestamp: "2024-03-07T08:10:00Z"
      }
    ]
  },
  {
    key:9,
    username: "Kevin Brown",
    avatar: IMG.AVATAR1,
    lastMessage: "Meeting rescheduled to next week.",
    unreadMessages: 0,
    lastMessageTime: "2024-03-06T18:30:00Z",
    messages: [
      {
        id: 1,
        sender: "Kevin Brown",
        content: "Meeting rescheduled to next week.",
        timestamp: "2024-03-06T18:30:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "Thanks for the update, Kevin.",
        timestamp: "2024-03-06T19:00:00Z"
      }
    ]
  },
  {
    key: 10,
    username: "Lisa White",
    avatar: IMG.AVATAR2,
    lastMessage: "What time is convenient for you?",
    unreadMessages: 1,
    lastMessageTime: "2024-03-07T13:20:00Z",
    messages: [
      {
        id: 1,
        sender: "Lisa White",
        content: "What time is convenient for you?",
        timestamp: "2024-03-07T13:20:00Z"
      },
      {
        id: 2,
        sender: "currentUser",
        content: "How about tomorrow at 10 AM?",
        timestamp: "2024-03-07T13:45:00Z"
      }
    ]
  }
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

const reviews_Cards = [
  {
    key: '1',
    title: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
    image: IMG.PRODUCT,
    stars: 4,
    date:'December 10, 2016'
  },
  {
    key: '2',
    title: 'Buy PC & Gaming Gear at Deep Discounts.air max are always very comfortable fit, clean and just perfect in every way.',
    image: IMG.PRODUCT_MOBILE,
    stars: 5,
    date:'November 12, 2020'
  },
  {
    key: '3',
    title: 'ELV DIRECT Universal Mobile Phone Stand Holder With Cable Organise Buy PC & Gaming Gear at Deep Discounts.air max are always very comfortable fit, clean and just perfect in every way.',
    image: IMG.SLIDE1,
    stars: 3,
    date:'December 20, 2018'
  },
  {
    key: '4',
    title: 'Buy PC & Gaming Gear at Deep Discounts.',
    image: IMG.SLIDE2,
    stars: 2,
    date:'March 10, 2024'
  },
];

export { slides, users, cards, product_Cards, comment_Cards,reviews_Cards }
