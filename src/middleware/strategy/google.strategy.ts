import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from "passport-google-oauth20"
import { IUserSocial } from "src/interface/user-social.interface";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "http://localhost:8080/google-profile",
            scope: ["email", "profile"]
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback): Promise<any> {
        const {name, emails}  = profile;
        const user:IUserSocial = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
        }
        const payload = {
            user,
            accessToken
        }
        done(null, payload);
    }

}