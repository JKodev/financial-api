import { Field, InputType } from 'type-graphql';

@InputType()
export class CategoryInputDto {
  @Field()
  slug: string;
  @Field()
  name: string;
}
