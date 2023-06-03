export interface SedMessageType {
  channelId?: number | null;
  recipientId?: number | null;
  content: string;
}

export interface SenderType {
  id: 2;
  name: string;
  email: string;
}

export interface MessageType {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  senderId: number;
  recipientId?: number;
  channelId?: number;
  sender: SenderType;
}
