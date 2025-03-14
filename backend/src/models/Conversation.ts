import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./Message";
import { GroupMember } from "./GroupMember";

@Entity('conversations')
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => Message, (message) => message.conversation)
  messages!: Message[];

  @OneToMany(() => GroupMember, (groupMember) => groupMember.conversation)
  members!: GroupMember[];
}