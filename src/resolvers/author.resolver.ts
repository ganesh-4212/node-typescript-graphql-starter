import { Book } from './../models/book.model'
import { BookService } from './../service/book.service'
import { AuthorInput } from './../schema/input-types'
import { AuthorService } from './../service/author.service'
import { Author } from './../models/author.model'
import { Resolver, Query, Arg, Mutation, Root, FieldResolver } from 'type-graphql'

@Resolver(of => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService, private bookService: BookService) {}
  @Query(returns => Author, { nullable: true })
  author(@Arg('authorId') authorId: string) {
    return this.authorService.getById(authorId)
  }

  @FieldResolver()
  books(@Root() author: Partial<Author>) {
    return this.bookService.findByAuthorId(author.id)
  }

  @Query(returns => [Author])
  authors() {
    return this.authorService.getAll()
  }

  @Mutation(returns => Author)
  async createAuthor(@Arg('author') author: AuthorInput) {
    return this.authorService.createAuthor(author)
  }
}
