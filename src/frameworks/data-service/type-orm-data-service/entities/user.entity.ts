import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract.entity";

@Entity()
export class User extends AbstractEntity {
    @Column()
    email: string;

    @Column()
    password: string;
}