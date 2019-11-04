import { Field, InputType } from 'type-graphql';

@InputType()
export class AccountInputDto {
  @Field()
  name: string;
  @Field()
  accountTypeId: number;
  @Field()
  currencyId: number;
}
