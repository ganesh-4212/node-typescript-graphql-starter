import { AddAuthorInput } from './../schema/input-types'
import { AuthorService } from './../service/author.service'
import { Author } from './../models/author.model'
import { Resolver, Query, Arg, Mutation } from 'type-graphql'

@Resolver(of => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}
  @Query(returns => Author, { nullable: true })
  async author(@Arg('authorId') authorId: string) {
    console.log('Query called')
    return this.authorService.getById(authorId)
  }

  @Query(returns => [Author])
  async authors() {
    return this.authorService.getAll()
  }

  @Mutation(returns => Author)
  async createAuthor(@Arg('author') author: AddAuthorInput) {
    return this.authorService.createAuthor(author)
  }
}
