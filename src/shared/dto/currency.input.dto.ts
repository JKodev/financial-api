import { Field, InputType } from 'type-graphql';

@InputType()
export class CurrencyInputDto {
  @Field()
  name: string;
  @Field()
  code: string;
  @Field()
  symbol: string;
}
