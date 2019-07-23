import { InputType, Field } from 'type-graphql'

import { Book } from '../models/book.model'

@InputType()
export class BookInput implements Partial<Book> {
  @Field()
  isbn: string

  @Field()
  title: string

  @Field()
  subTitle: string

  @Field()
  description: string

  @Field()
  genre: string

  @Field()
  publisher: string

  @Field()
  publishDate: Date

  @Field()
  price: number

  @Field()
  edition: number

  @Field()
  copiesSold: number

  @Field()
  numberOfPages: number

  @Field()
  url?: string

  @Field()
  language: string
}
