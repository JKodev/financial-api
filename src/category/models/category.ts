import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Category {
  @Field(type => ID)
  id: number;
  @Field()
  slug: string;
  @Field()
  name: string;
}
