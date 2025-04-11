import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { IS_DEV_ENV } from '../shared/utils/is-dev.util';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { getGraphQLCongig } from './config/graphql.config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: getGraphQLCongig,
    }),
    PrismaModule,
    RedisModule,
  ],
})
export class CoreModule {}
