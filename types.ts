export interface User {
  _id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: string;
}

export interface File {
  url: string;
  name: string;
  type: string;
  size: number;
}

export interface Message {
  _id?: string;
  text: string;
  senderId: string;
  file?: File;
  createdAt: string;
}

export interface Conversation {
  messages: Message[];
  createdAt?: string;
  participants: string[];
}
