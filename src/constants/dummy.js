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
        sender: "John Doe",
        content: "Hey, how are you doing?",
        timestamp: "2024-03-05T12:00:00Z"
      },
      {
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
        sender: "currentUser",
        content: "Will we still meet at the usual place?",
        timestamp: "2024-03-06T15:00:00Z"
      },
      {
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
        sender: "Bob Smith",
        content: "Thanks for the help!",
        timestamp: "2024-03-06T16:45:00Z"
      },
      {
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
        sender: "Alice Wonder",
        content: "Can we talk later?",
        timestamp: "2024-03-07T09:15:00Z"
      },
      {
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
        sender: "currentUser",
        content: "Hey, just wanted to confirm you got the package?",
        timestamp: "2024-03-07T10:00:00Z"
      },
      {
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
        sender: "Emily Clark",
        content: "See you at the party!",
        timestamp: "2024-03-07T11:00:00Z"
      },
      {
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
        sender: "currentUser",
        content: "How's the report going?",
        timestamp: "2024-03-06T13:50:00Z"
      },
      {
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
        sender: "Sarah Johnson",
        content: "Loved the pictures from the trip!",
        timestamp: "2024-03-07T07:55:00Z"
      },
      {
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
        sender: "Kevin Brown",
        content: "Meeting rescheduled to next week.",
        timestamp: "2024-03-06T18:30:00Z"
      },
      {
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
        sender: "Lisa White",
        content: "What time is convenient for you?",
        timestamp: "2024-03-07T13:20:00Z"
      },
      {
        sender: "currentUser",
        content: "How about tomorrow at 10 AM?",
        timestamp: "2024-03-07T13:45:00Z"
      }
    ]
  }
];



export {slides, users}


// const users = [
//   {
//     username: "John Doe",
//     avatar: IMG.AVATAR1,
//     lastMessage: "Hey, how are you doing?",
//     unreadMessages: 2,
//     lastMessageTime: "2024-03-07T12:00:00Z"
//   },
//   {
//     username: "Jane Doe",
//     avatar: IMG.AVATAR2,
//     lastMessage: "Don't forget our meeting tomorrow.",
//     unreadMessages: 5,
//     lastMessageTime: "2024-03-07T08:30:00Z"
//   },
//   {
//     username: "Bob Smith",
//     avatar: IMG.AVATAR3,
//     lastMessage: "Thanks for the help!",
//     unreadMessages: 0,
//     lastMessageTime: "2024-03-06T16:45:00Z"
//   },
//   {
//     username: "Alice Wonder",
//     avatar: IMG.AVATAR4,
//     lastMessage: "Can we talk later?",
//     unreadMessages: 3,
//     lastMessageTime: "2024-03-07T09:15:00Z"
//   },
//   {
//     username: "Mike Ross",
//     avatar: IMG.AVATAR1,
//     lastMessage: "Received the package, thanks!",
//     unreadMessages: 1,
//     lastMessageTime: "2024-03-07T10:25:00Z"
//   },
//   {
//     username: "Emily Clark789",
//     avatar: IMG.AVATAR2,
//     lastMessage: "See you at the party!",
//     unreadMessages: 4,
//     lastMessageTime: "2024-03-07T11:00:00Z"
//   },
//   {
//     username: "David Miller",
//     avatar: IMG.AVATAR3,
//     lastMessage: "Finalizing the report, any updates?",
//     unreadMessages: 7,
//     lastMessageTime: "2024-03-06T14:20:00Z"
//   },
//   {
//     username: "Sarah Johnson",
//     avatar: IMG.AVATAR4,
//     lastMessage: "Loved the pictures from the trip!",
//     unreadMessages: 2,
//     lastMessageTime: "2024-03-07T07:55:00Z"
//   },
//   {
//     username: "Kevin Brown",
//     avatar: IMG.AVATAR1,
//     lastMessage: "Meeting rescheduled to next week.",
//     unreadMessages: 0,
//     lastMessageTime: "2024-03-06T18:30:00Z"
//   },
//   {
//     username: "Lisa White",
//     avatar: IMG.AVATAR2,
//     lastMessage: "What time is convenient for you?",
//     unreadMessages: 1,
//     lastMessageTime: "2024-03-07T13:20:00Z"
//   }
// ];