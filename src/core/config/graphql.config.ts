/* eslint-disable prettier/prettier */
import { isDev } from '@/src/shared/utils/is-dev.util';
import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

export function getGraphQLCongig(
  configService: ConfigService,
): ApolloDriverConfig {
  return {
    playground: isDev(configService),
    path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
    autoSchemaFile: join(process.cwd(), 'src/core/grapql/schema.gql'),
    sortSchema: true,
    context: ({ req, res }) => ({ req, res }),
  };
}
