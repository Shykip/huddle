import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Conversation } from "./Conversation";
import { User } from "./User";

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.messages)
  sender!: User;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  conversation!: Conversation;

  @Column({ 
    type: 'text',
    nullable: false
  })
  text!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
