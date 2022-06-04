import { AbstractEntity } from "./abstract.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Document extends AbstractEntity {

    @Column()
    resourceName: string;

    @ManyToMany(type => Tag, object => object.documents)
    tags: Tag[];

}