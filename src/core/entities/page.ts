import { Tag } from "./tag";

export class Page {
    id: string;

    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];

    resourceName: string;

}