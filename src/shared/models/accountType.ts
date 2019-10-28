import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AccountType {
  @Field(type => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  slug: string;
}
