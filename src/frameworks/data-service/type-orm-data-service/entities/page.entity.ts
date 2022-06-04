import { AbstractEntity } from "./abstract.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Page extends AbstractEntity {

    @Column()
    resourceName: string;

    @ManyToMany(type => Tag, object => object.pages)
    tags: Tag[];

}