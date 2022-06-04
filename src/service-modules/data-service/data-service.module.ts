import { Module } from "@nestjs/common";
import {
    TypeOrmDataServiceModule
} from "../../frameworks/data-service/type-orm-data-service/type-orm-data-service.module";

@Module({
    imports: [TypeOrmDataServiceModule],
    exports: [TypeOrmDataServiceModule]
})
export class DataServiceModule {
}
