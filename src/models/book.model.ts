import { arrayProp, prop, Ref, Typegoose } from 'typegoose'
import { Types } from 'mongoose'
import { ObjectType, Field } from 'type-graphql'
import { Author } from './author.model'

@ObjectType()
export class Book extends Typegoose {
  @Field({ nullable: true })
  readonly id?: string

  @Field()
  @prop({ required: true, unique: true, index: true })
  isbn: string

  @Field()
  @prop({ required: true })
  title: string

  @Field()
  @prop({ required: true })
  subTitle: string

  @Field()
  @prop({ required: true })
  description: string

  @Field()
  @prop({ required: true })
  genre: string

  @Field()
  @prop({ required: true })
  publisher: string

  @Field()
  @prop({ required: true, default: Date.now })
  publishDate: Date

  @Field()
  @prop({ required: true, default: 0 })
  price: number

  @Field()
  @prop({ required: true, default: 1 })
  edition: number

  @Field()
  @prop({ required: true, default: 0 })
  copiesSold: number

  @Field()
  @prop({ required: true, default: 0 })
  numberOfPages: number

  @Field()
  @prop()
  url?: string

  @Field()
  @prop({ required: true })
  language: string

  @prop()
  authorIds?: Types.ObjectId[]

  @Field(type => [Author], { nullable: true })
  authors?: Author[]
}
export const BookModel = new Book().getModelForClass(Book)
