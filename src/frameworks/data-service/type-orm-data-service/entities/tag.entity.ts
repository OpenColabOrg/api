import { AbstractEntity } from "./abstract.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Page } from "./page.entity";

@Entity()
export class Tag extends AbstractEntity {
    @Column()
    value: string;

    @ManyToMany(type => Page, object => object.tags)
    pages: Page[];
}