import { Tag } from "./tag";

export class Document {
    id: string;

    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];

    resourceName: string;

}