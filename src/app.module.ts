import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FacebookAuthController } from './controller/facebook.auth.controller';
import { UserAuthController } from './controller/user.auth.controller';
import { FacebookStrategy } from './middleware/strategy/facebook.strategy';
import { UserService } from './service/user.service';
import { LocalStrategy } from './middleware/strategy/local.strategy';
import { AuthService } from './service/auth.service';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './middleware/strategy/jwt.strategy';
import { GoogleStrategy } from './middleware/strategy/google.strategy';
import { GoogleAuthController } from './controller/google.auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '120s' }
      })
    })
  ],
  controllers: [FacebookAuthController, GoogleAuthController, UserAuthController],
  providers: [AuthService,  JwtStrategy, FacebookStrategy, GoogleStrategy, LocalStrategy, UserService],
})
export class AppModule {}
