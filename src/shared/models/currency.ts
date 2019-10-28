import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Currency {
  @Field(type => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  code: string;
  @Field()
  symbol: string;
}
