import { arrayProp, prop, Ref, Typegoose, instanceMethod } from 'typegoose'
import { Book } from './book.model'

import { Schema, model, Types } from 'mongoose'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Author extends Typegoose {
  @Field(type => Types.ObjectId, { name: 'id', nullable: true })
  _id?: Types.ObjectId

  @Field()
  @prop({ required: true })
  name: string

  @Field()
  @prop({ required: true })
  email: string

  @Field()
  @prop()
  url?: string

  // @Field()
  // @arrayProp({ itemsRef: Book })
  // books?: Ref<Book>[]
}

export const AuthorModel = new Author().getModelForClass(Author)
