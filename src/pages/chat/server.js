class ChatMessage {
  constructor(senderme, text) {
    this.id = Math.random().toString();
    this.me = senderme;
    this.text = text;
  }
}

class ChatManager {
  constructor() {
    this.chats = [
      {
        id: 1,
        name: "Maryam Habibi",
        avatar: "/avatar-f.png",
        time: "21:14",
        unreadMessageCount: 5,
        text: "Hi, This is a message",
        messages: [
          {
            id: "1",
            me: false,
            time: "12:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "13:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "14:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "15:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "16:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 2,
        name: "Mina Mohammadi",
        avatar: "/avatar-f.png",
        time: "11:30",
        unreadMessageCount: 15,
        text: "Another Message",
        messages: [
          {
            id: "1",
            me: false,
            time: "10:00",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam. Morbi tristique senectus et netus.",
          },
          {
            id: "2",
            me: true,
            time: "11:00",
            text:
              "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Dolor morbi non arcu risus quis varius quam.",
          },
          {
            id: "3",
            me: false,
            time: "12:00",
            text:
              "Habitasse platea dictumst vestibulum rhoncus est. Sem integer vitae justo eget. At auctor urna nunc id cursus metus aliquam eleifend. Pellentesque elit ullamcorper dignissim cras.",
          },
          {
            id: "4",
            me: false,
            time: "13:00",
            text:
              "Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Amet porttitor eget dolor morbi. Eget duis at tellus at urna condimentum mattis.",
          },
          {
            id: "5",
            me: true,
            time: "14:00",
            text:
              "Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Gravida in fermentum et sollicitudin ac orci phasellus egestas. In ornare quam viverra orci sagittis eu.",
          },
          {
            id: "6",
            me: true,
            time: "15:00",
            text:
              "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam. Morbi tristique senectus et netus.",
          },
        ],
      },
      {
        id: 3,
        name: "Reza Ahmadi",
        avatar: "/avatar.png",
        time: "21:14",
        unreadMessageCount: 65,
        text: "Hi, This is a message",
        messages: [
          {
            id: "1",
            me: false,
            time: "7:00",
            text:
              "Tellus cras adipiscing enim eu turpis egestas pretium aenean.",
          },
          {
            id: "2",
            me: false,
            time: "8:00",
            text:
              "Mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Cum sociis natoque penatibus et magnis dis parturient montes. ",
          },
          {
            id: "3",
            me: true,
            time: "9:00",
            text: "Vitae tortor condimentum lacinia quis vel eros.",
          },
          {
            id: "4",
            me: false,
            time: "10:00",
            text:
              "0912912912912 . Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet.",
          },
          {
            id: "5",
            me: true,
            time: "11:00",
            text:
              "Magna etiam tempor orci eu lobortis elementum. Sed cras ornare arcu dui vivamus. In hac habitasse platea dictumst quisque. At elementum eu facilisis sed.",
          },
        ],
      },
      {
        id: 4,
        name: "Afshin Karimi",
        avatar: "/avatar.png",
        time: "11:30",
        unreadMessageCount: 15,
        text: "Another Message",
        messages: [
          {
            id: "1",
            me: false,
            time: "19:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "20:00",

            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "21:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "22:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "23:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 5,
        name: "Mohammad Mardan Nia",
        avatar: "/avatar.png",
        time: "21:14",
        unreadMessageCount: 65,
        text: "Hi, This is a message",
        messages: [
          {
            id: "1",
            me: false,
            time: "24:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "00:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "01:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "02:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "03:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 6,
        name: "Sarah Kiani",
        avatar: "/avatar-f.png",
        time: "11:30",
        unreadMessageCount: 15,
        text: "Another Message",
        messages: [
          {
            id: "1",
            me: false,
            time: "03:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "04:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "05:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "06:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "07:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 7,
        name: "Minoo Mohammadian",
        avatar: "/avatar-f.png",
        time: "21:14",
        unreadMessageCount: 65,
        text: "Hi, This is a message",
        messages: [
          {
            id: "1",
            me: false,
            time: "07:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "08:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "09:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "10:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "11:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 8,
        name: "Fereydoon Sabet",
        avatar: "/avatar.png",
        time: "11:30",
        unreadMessageCount: 15,
        text: "Another Message",
        messages: [
          {
            id: "1",
            me: false,
            time: "03:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "04:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "05:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "06:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "07:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 9,
        name: "Zahra Gholami",
        avatar: "/avatar-f.png",
        time: "21:14",
        unreadMessageCount: 65,
        text: "Hi, This is a message",
        messages: [
          {
            id: "1",
            me: false,
            time: "13:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "14:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "15:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "16:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "17:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
      {
        id: 10,
        name: "Mohammad Bayat",
        avatar: "/avatar.png",
        time: "11:30",
        unreadMessageCount: 15,
        text: "Another Message",
        messages: [
          {
            id: "1",
            me: false,
            time: "20:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
          {
            id: "2",
            me: true,
            time: "21:00",
            text: "A single line message.",
          },
          {
            id: "3",
            me: false,
            time: "22:00",
            text:
              "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
          },
          {
            id: "4",
            me: false,
            time: "23:00",
            text:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
          },
          {
            id: "5",
            me: true,
            time: "24:00",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
          },
        ],
      },
    ];
  }

  getMessages(chatId) {
    const chat = this.chats.find((x) => x.id === chatId);
    if (chat) {
      chat.unreadMessageCount = 0;
      return chat;
    } else {
      return [];
    }
  }

  getChatLists() {
    // return this.chats.map(({ messages, ...rest }) => rest);
    return this.chats;
  }

  setMessage(text, chatId) {
    const chat = this.chats.find((x) => x.id === chatId);
    if (chat) {
      return chat.messages.push(new ChatMessage(true, text));
    } else {
      return [];
    }
  }
}

const chatManager = new ChatManager();

export function getRecentChats(chatId) {
  return chatManager.getMessages(chatId);
}

export function getListItems() {
  return fakeApiCall(chatManager.getChatLists());
}

export function setSubmitMessage(text, chatId) {
  chatManager.setMessage(text, chatId);
}

function fakeApiCall(values) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(values);
    }, 500);
  });
}
