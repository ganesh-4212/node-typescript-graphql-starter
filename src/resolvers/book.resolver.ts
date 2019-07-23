import { AuthorService } from './../service/author.service'
import { BookInput } from './../schema/book.input'
import { Book } from './../models/book.model'
import { Resolver, Query, Arg, Mutation, Root, FieldResolver } from 'type-graphql'
import { BookService } from '../service/book.service'

@Resolver(of => Book)
export class BookResolver {
  constructor(private bookService: BookService, private authorService: AuthorService) {}
  @Query(returns => Book, { nullable: true })
  async book(@Arg('bookId') bookId: string) {
    return this.bookService.getBook(bookId)
  }

  @FieldResolver()
  authors(@Root() book: Partial<Book>) {
    return this.authorService.findByIds(book.authorIds)
  }

  @Query(returns => [Book])
  async books() {
    return this.bookService.getAllBooks()
  }

  @Mutation(returns => Book)
  async createBook(@Arg('book') book: BookInput) {
    return this.bookService.createBook(book)
  }
}
