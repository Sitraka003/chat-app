export interface CreateChannelType {
  name: string;
  type?: string;
  members?: string;
}

export interface OwnerType {
  id: number;
  name: string;
  email: string;
}

export interface ChannelMember {
  id: number;
  name: string;
  email: string;
  bio?: string;
}

export interface ChannelType {
  id: number;
  name: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  ownerId?: number;
  owner: OwnerType;
}
