import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({unique:true})
  telephone: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  password: string;

  @CreateDateColumn({type:'date'})
  createdAt: string;

  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[];

}

export { User };
