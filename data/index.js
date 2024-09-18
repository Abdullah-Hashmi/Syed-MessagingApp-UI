import { images } from "../constants";
// import images from "../constants/images";

export const users = [
  {
    id: "1",
    username: "Jeanne",
    image: images.user1,
    isOnlive: false,
  },
  {
    id: "2",
    username: "Julia",
    image: images.user2,
    isOnlive: true,
  },
  {
    id: "3",
    username: "Brinda",
    image: images.user3,
    isOnlive: false,
  },
  {
    id: "4",
    username: "John",
    image: images.user4,
    isOnlive: false,
  },
  {
    id: "5",
    username: "Shuina",
    image: images.user5,
    isOnlive: false,
  },
  {
    id: "6",
    username: "Lucia",
    image: images.user6,
    isOnlive: false,
  },
  {
    id: "7",
    username: "Lucas",
    image: images.user7,
    isOnlive: false,
  },
];

export const statusData = [
  {
    id: "1",
    name: "John Doe",
    status: "Feeling great today!",
    profilePic: images.user1, // Use provided images
  },
  {
    id: "2",
    name: "Jane Smith",
    status: "Working on a new project.",
    profilePic: images.user2, // Use provided images
  },
  {
    id: "3",
    name: "Emily Johnson",
    status: "Loving the new book I’m reading.",
    profilePic: images.user3, // Use provided images
  },
  {
    id: "4",
    name: "Emily Johnson",
    status: "Loving the new book I’m reading.",
    profilePic: images.user4, // Use provided images
  },
  {
    id: "5",
    name: "Emily Johnson",
    status: "Loving the new book I’m reading.",
    profilePic: images.user5, // Use provided images
  },
  {
    id: "6",
    name: "Emily Johnson",
    status: "Loving the new book I’m reading.",
    profilePic: images.user6, // Use provided images
  },
  // Add more users as needed
];

// Sample joined groups data using available images
export const groupsData = [
  {
    id: "1",
    name: "Family Group",
    groupPic: images.user2, // Use provided images
  },
  {
    id: "2",
    name: "Work Team",
    groupPic: images.user5, // Use provided images
  },
  {
    id: "3",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "4",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "5",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "6",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "7",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "8",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "9",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  {
    id: "10",
    name: "Friends Hangout",
    groupPic: images.user6, // Use provided images
  },
  // Add more groups as needed
];

export const messsagesData = [
  {
    id: "1",
    fullName: "Ayesha khan",
    isOnline: false,
    userImg: images.user1,
    lastSeen: "2023-11-16T04:52:06.501Z",
    lastMessage: "I love you. see you soon baby",
    messageInQueue: 2,
    lastMessageTime: "12:25 PM",
  },
  {
    id: "2",
    fullName: "Syed Abdullah",
    isOnline: true,
    userImg: images.user2,
    lastSeen: "2023-11-18T04:52:06.501Z",
    lastMessage: "I Know. you are so busy man.",
    messageInQueue: 0,
    lastMessageTime: "12:15 PM",
  },
  {
    id: "3",
    fullName: "Zarnab",
    isOnline: true,
    userImg: images.user3,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Ok, see u soon",
    messageInQueue: 0,
    lastMessageTime: "09:12 PM",
  },
  {
    id: "4",
    fullName: "Shakir Khan",
    isOnline: false,
    userImg: images.user4,
    lastSeen: "2023-11-18T04:52:06.501Z",
    lastMessage: "Great! Do you Love it.",
    messageInQueue: 0,
    lastMessageTime: "04:12 PM",
  },
  {
    id: "5",
    fullName: "Shakib Hasan",
    isOnline: false,
    userImg: images.user5,
    lastSeen: "2023-11-21T04:52:06.501Z",
    lastMessage: "Thank you !",
    messageInQueue: 2,
    lastMessageTime: "10:30 AM",
  },
  {
    id: "6",
    fullName: "Iqra Khan",
    isOnline: false,
    userImg: images.user6,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Do you want to go out dinner",
    messageInQueue: 3,
    lastMessageTime: "10:05 PM",
  },
  {
    id: "7",
    fullName: "Wajid Ali",
    userImg: images.user7,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Do you want to go out dinner",
    messageInQueue: 2,
    lastMessageTime: "11:05 PM",
    isOnline: true,
  },
  {
    id: "8",
    fullName: "Faiza",
    isOnline: false,
    userImg: images.user8,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Can you share the design with me?",
    messageInQueue: 2,
    lastMessageTime: "09:11 PM",
  },
  {
    id: "9",
    fullName: "Shakir Ullah",
    userImg: images.user9,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Tell me what you want?",
    messageInQueue: 0,
    lastMessageTime: "06:43 PM",
    isOnline: true,
  },
  {
    id: "10",
    fullName: "Maryam",
    userImg: images.user10,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Tell me what you want?",
    messageInQueue: 0,
    lastMessageTime: "06:43 PM",
    isOnline: true,
  },
  {
    id: "11",
    fullName: "Ali Usman",
    userImg: images.user11,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Tell me what you want?",
    messageInQueue: 0,
    lastMessageTime: "06:43 PM",
    isOnline: true,
  },
  {
    id: "12",
    fullName: "shakir",
    userImg: images.user9,
    lastSeen: "2023-11-20T04:52:06.501Z",
    lastMessage: "Tell me what you want?",
    messageInQueue: 0,
    lastMessageTime: "06:43 PM",
    isOnline: true,
  },
];

export const callsData = [
  {
    id: 1,
    fullName: "Ayesha khan",
    userImg: images.user1,
    callType: "incoming", // or "outgoing" or "missed"
    callTime: "2024-09-10T15:20:00", // ISO 8601 formatted timestamp
    duration: 10,
  },
  {
    id: 2,
    fullName: "Syed Abdullah",
    userImg: images.user2,
    callType: "outgoing",
    callTime: "2024-09-10T14:50:00",
    duration: 1,
  },
  {
    id: 3,
    fullName: "Zarnab",
    userImg: images.user3,
    callType: "missed",
    callTime: "2024-09-10T13:30:00",
  },
  {
    id: 4,
    fullName: "Shakir Khan",
    userImg: images.user4,
    callType: "missed",
    callTime: "2024-09-09T16:45:00",
  },
  {
    id: 5,
    fullName: "Shakib Hassan",
    userImg: images.user5,
    callType: "incoming",
    callTime: "2024-09-08T10:20:00",
    duration: 15,
  },
  {
    id: 6,
    fullName: "Iqra Khan",
    userImg: images.user6,
    callType: "incoming",
    callTime: "2024-09-10T09:10:00",
    duration: 12,
  },
  {
    id: 7,
    fullName: "Wajid Ali",
    userImg: images.user7,
    callType: "outgoing",
    callTime: "2024-09-10T11:30:00",
    duration: 2,
  },
  {
    id: 8,
    fullName: "Faiza",
    userImg: images.user8,
    callType: "missed",
    callTime: "2024-09-09T17:50:00",
  },
  {
    id: 9,
    fullName: "Shakir Ullah",
    userImg: images.user9,
    callType: "incoming",
    callTime: "2024-09-08T12:15:00",
    duration: 13,
  },
  {
    id: 10,
    fullName: "Maryam",
    userImg: images.user10,
    callType: "outgoing",
    callTime: "2024-09-07T19:40:00",
    duration: 10,
  },
  {
    id: 11,
    fullName: "Ali Usman",
    userImg: images.user11,
    callType: "missed",
    callTime: "2024-09-07T14:10:00",
  },
  {
    id: 12,
    fullName: "Shakir",
    userImg: images.user9,
    callType: "missed",
    callTime: "2024-09-07T14:10:00",
  },
];
