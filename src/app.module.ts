import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ModulesModule } from './modules/modules.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CommonModule, ModulesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
