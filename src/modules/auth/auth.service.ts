import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { CreateUserRequestDto } from "./dtos/create-user.request.dto";
import { User } from "../../core/entities/user";
import { IDataService } from "../../service-modules/data-service/interfaces";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private readonly configService: ConfigService,
        protected readonly dataService: IDataService
    ) {
    }

    async createNewUser(createUserDto: CreateUserRequestDto): Promise<boolean> {
        const userExists = await this.dataService.users.findOneByEmail(createUserDto.email);

        if (userExists) {
            return false;
        }

        const { email, password } = createUserDto;
        const salt = await bcrypt.genSalt();
        const pepper = this.configService.get<string>("APP_AUTH_PEPPER");
        const hashedPassword = await bcrypt.hash(password + pepper, salt);
        await this.dataService.users.save({ email, password: hashedPassword });
        return true;
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.dataService.users.findOneByEmail(email);
        if (user) {
            const pepper = this.configService.get("APP_AUTH_PEPPER");
            const match = await bcrypt.compare(pass + pepper, user.password);
            if (match) {
                const { password, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async generateJwtToken(user: User) {
        const payload = { username: user.email, sub: user.id };
        return this.jwtService.sign(payload);
    }
}
