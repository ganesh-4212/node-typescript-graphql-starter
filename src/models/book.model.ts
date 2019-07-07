import { arrayProp, prop, Ref, Typegoose } from 'typegoose'
import { Author } from './author.model'
import { ObjectType } from 'type-graphql'

@ObjectType()
export class Book extends Typegoose {
  @prop({ required: true, unique: true, index: true })
  isbn: string

  @prop({ required: true })
  title: string

  @prop({ required: true })
  subTitle: string

  @prop({ required: true })
  description: string

  @prop({ required: true })
  genre: string

  @prop({ required: true })
  publisher: string

  @prop({ required: true, default: Date.now })
  publishDate: Date

  @prop({ required: true, default: 0 })
  price: number

  @prop({ required: true, default: 1 })
  edition: number

  @prop({ required: true, default: 0 })
  copiesSold: number

  @prop({ required: true, default: 0 })
  numberOfPages: number

  @prop()
  url?: string

  @prop({ required: true })
  language: string

  @arrayProp({ itemsRef: { name: 'Author' } })
  authors?: Ref<Author>[]
}
export const BookModel = new Book().getModelForClass(Book)
