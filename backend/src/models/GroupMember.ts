import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./Conversation";
import { User } from "./User";

@Entity()
export class GroupMember {
  @PrimaryGeneratedColumn()
  id!: string;

  @ManyToOne(() => User, (user) => user.id)
  user!: User;

  @ManyToOne(() => Conversation, (conversation) => conversation.members)
  conversation!: Conversation;
}