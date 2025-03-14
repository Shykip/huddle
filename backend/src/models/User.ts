import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { Message } from "./Message";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ 
        type: "varchar", 
        length: 100, 
        unique: true, 
        nullable: false 
    })
    email!: string;

    @Column({ 
        type: "varchar", 
        length: 255, 
        nullable: false 
    })
    password!: string;

    @Column({ 
        type: "varchar", 
        length: 50, 
        unique: true, 
        nullable: false 
    })
    username!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => Message, (message) => message.sender)
    messages!: Message[];
}
