import { AbstractEntity } from "./abstract.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Document } from "./document.entity";

@Entity()
export class Tag extends AbstractEntity {
    @Column()
    value: string;

    @ManyToMany(type => Document, object => object.tags)
    documents: Document[];
}