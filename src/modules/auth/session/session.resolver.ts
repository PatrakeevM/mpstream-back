/* eslint-disable prettier/prettier */
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SessionService } from './session.service';
import type { GqlContext } from '@/src/shared/types/gql-context.type';
import { LoginInput } from './inputs/login.input';
import { UserModel } from '../account/models/user.model';

@Resolver('Session')
export class SessionResolver {
  public constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => UserModel, { name: 'login' })
  public async login(
    @Context() { req }: GqlContext,
    @Args('data') input: LoginInput,
  ) {
    return this.sessionService.login(req, input);
  }

  @Mutation(() => Boolean, { name: 'logout' })
  public async logout(@Context() { req }: GqlContext) {
    return this.sessionService.logout(req);
  }
}
