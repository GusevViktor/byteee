import Jack from "src/assets/images/hamster.png";
import Pad from "src/assets/images/pad.png";
import Event from "src/assets/images/event.png";
import Maria from "./img/Maria.png";
import Bob from "./img/Bob.png";
import Elina from "./img/Elina.png";

const messages = [
  [],
  [
    {
      date: "2022-07-17T13:24:00",
      message: "Hi, Maria!!",
    },
    {
      date: "2022-07-17T13:25:00",
      message: "Unfortunately I get the same error when trying that",
    },
  ],
  [
    {
      date: "2022-07-17T13:33:00",
      message: "Which version of yarn are you running? " +
      "I'm worried it's an issue with yarn berry. " +
      "There seems to be a lot of incompatibilities with it on other libraries",
    },
    {
      date: "2022-07-17T13:34:00",
      message: "Which libraries",
    },
  ],
  [
    {
      date: "2022-07-17T13:24:00",
      message: "Ok"
    },
    {
      date: "2022-07-17T14:24:00",
      message: "Which version of yarn are you running? " +
      "I'm worried it's an issue with yarn berry. " +
      "There seems to be a lot of incompatibilities with it on other libraries",
    },
  ]
];

const messagesGroup = [
  [{
    nameMessage: "Niko",
    date: "2022-07-17T13:24:00",
    message: "Hey"
  }, {
    nameMessage: "Niko",
    date: "2022-07-17T13:26:00",
    message: "Can you hear me?"
  }, {
    nameMessage: "Niko",
    date: "2022-07-17T13:27:00",
    message: "Are you stupid?"
  }, {
    nameMessage: "Niko",
    date: "2022-07-17T13:28:00",
    message: "yes"
  }],
  [{
    nameMessage: "Tiron",
    date: "2022-07-17T14:24:00",
    message: "I wish you'd take better care of yourself."
  }],
  [{
    nameMessage: "Igor",
    date: "2022-07-17T14:25:00",
    message: "Pretty and smart. We're gonna get along just fine."
  }],
  [{
    nameMessage: "Oleg",
    date: "2022-08-17T11:24:00",
    message: "You're very kind. Some day it'll get you killed."
  }],
  [{
    nameMessage: "Jack",
    date: "2022-08-17T12:24:00",
    message: "You're late. As usual."
  }],
  [{
    nameMessage: "Bob",
    date: "2022-08-17T13:24:00",
    message: "I don't need your help."
  }],
  [{
    nameMessage: "Angel",
    date: "2022-08-17T13:24:00",
    message: "I just thought you'd like some company."
  }],
  [{
    nameMessage: "Mike",
    date: "2022-07-17T20:24:00",
    message: "You're a terrible flirt you know."
  }],
  [{
    nameMessage: "Stiven",
    date: "2022-09-17T13:24:00",
    message: "You owe me a dinner. A very nice dinner."
  }],
  [{
    nameMessage: "Gray",
    date: "2022-09-18T13:24:00",
    message: "I don't like this. It feels wrong. It feels wrong. It feels wrong."
  }],
];

export const ChatData = [
  {
    type: "person",
    id: " 882277 Jack Harington Jack Harington Jack Harington Jack Harington",
    name: "Jack Harington Jack Harington Jack Harington Jack Harington",
    isOnline: true,
    isVerified: true,
    isRead: false,
    messages: messages,
    icon: Jack,
  },
  {
    type: "person",
    id: "1122 Maria Bond",
    name: "Maria Bond",
    isOnline: true,
    isVerified: true,
    isRead: false,
    messages: messages,
    icon: Maria,
  },
  {
    type: "person",
    id: "999 Bob Dylan",
    name: "Bob Dylan",
    isOnline: false,
    isVerified: true,
    isRead: true,
    icon: Bob,
    messages: messages,
  },
  {
    type: "person",
    id: "777 Elina Rin",
    name: "Elina Rin",
    isOnline: true,
    isVerified: true,
    isRead: true,
    icon: Elina,
    messages: messages,
  },

  {
    type: "group",
    id: "666 Computer Club",
    name: "Computer Club",
    icon: Pad,
    isOnline: true,
    isVerified: true,
    isRead: false,
    isWarning: true,
    isMute: false,
    messages: messagesGroup,
  },
  {
    type: "group",
    id: "234144 Event event!",
    name: "Event event!",
    icon: Event,
    isOnline: true,
    isVerified: true,
    isRead: false,
    isWarning: true,
    isMute: true,
    messages: messagesGroup,
  },
  {
    type: "group",
    id: "12456 Event 2 event!",
    name: "Event 2 event!",
    icon: Event,
    isOnline: true,
    isVerified: true,
    isRead: false,
    isWarning: true,
    isMute: true,
    messages: messagesGroup,
  },
  {
    type: "group",
    id: "12345 Event 3 event!",
    name: "Event 3 event!",
    icon: Event,
    isOnline: true,
    isVerified: true,
    isRead: false,
    isWarning: true,
    isMute: true,
    messages: messagesGroup,
  },
  {
    type: "group",
    id: "Event 4 event! Event 4 event! Event 4 event! Event 4 event! 1245 ",
    name: "Event 4 event! Event 4 event! Event 4 event! Event 4 event! ",
    icon: Event,
    isOnline: true,
    isVerified: true,
    isRead: false,
    isWarning: true,
    isMute: true,
    messages: messagesGroup,
  },
  {
    type: "person",
    id: "Maria Blond 123",
    name: "Maria Blond",
    isOnline: true,
    isVerified: true,
    isRead: false,
    messages: messages,
    icon: Maria,
  },
];
