import { Author } from './../models/author.model'
import { InputType, Field } from 'type-graphql'

@InputType()
export class AuthorInput implements Partial<Author> {
  @Field()
  name: string

  @Field()
  email: string

  @Field({ nullable: true })
  url?: string
}
