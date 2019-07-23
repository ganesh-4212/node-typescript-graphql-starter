import { arrayProp, prop, Ref, Typegoose } from 'typegoose'
import { Book } from './book.model'

import { Types } from 'mongoose'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Author extends Typegoose {
  @Field({ nullable: true })
  readonly id?: string

  @Field()
  @prop({ required: true })
  name: string

  @Field()
  @prop({ required: true })
  email: string

  @Field()
  @prop()
  url?: string

  @Field(type => [Book], { nullable: true })
  books?: Book[]
}

export const AuthorModel = new Author().getModelForClass(Author)
