import { AccountType } from '../../shared/models';
import { Field, ID, ObjectType } from 'type-graphql';
import { Currency } from '../../shared/models';

@ObjectType()
export class Account {
  @Field(type => ID)
  id: number;
  @Field(type => String)
  name: string;
  @Field(type => AccountType)
  accountType: AccountType;
  @Field(type => Currency)
  currency: Currency;
}
