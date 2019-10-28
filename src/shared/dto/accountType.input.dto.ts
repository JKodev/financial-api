import { InputType, Field } from 'type-graphql';

@InputType()
export class AccountTypeInputDto {
  @Field()
  slug: string;
  @Field()
  name: string;
}
