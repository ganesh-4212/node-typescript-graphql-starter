import { BookModel } from './../models/book.model'
import { Service } from 'typedi'
import { Types } from 'mongoose'

@Service()
export class BookService {
  getBook(id) {
    return BookModel.findById(id).exec()
  }
  getBookByISBN(isbn) {
    return BookModel.findOne({ isbn }).exec()
  }
  createBook(book) {
    return BookModel.create(book)
  }
  getAllBooks() {
    return BookModel.find().exec()
  }
  findByIds(ids: any[]) {
    return BookModel.find({
      _id: {
        $in: ids
      }
    }).exec()
  }

  findByAuthorId(id: string) {
    return BookModel.find({
      authors: new Types.ObjectId(id)
    })
  }
}
