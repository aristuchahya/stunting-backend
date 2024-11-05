import { Module } from '@nestjs/common';

import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { ChatGateway } from './modules/chat/chat.gateway';
import { ChatModule } from './modules/chat/chat.module';
import { UsersModule } from './modules/users/users.module';

import { FuzzyDetectionModule } from './modules/fuzzy-detection/fuzzy-detection.module';
import { FuzzyRuleModule } from './modules/fuzzy-rule/fuzzy-rule.module';
import { BalitaModule } from './modules/balita/balita.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    ChatModule,
    UsersModule,
    FuzzyDetectionModule,
    FuzzyRuleModule,
    BalitaModule,
  ],
  providers: [ChatGateway],
})
export class AppModule {}
