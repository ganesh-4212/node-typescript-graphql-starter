import { AuthorModel, Author } from './../models/author.model'
import { Service } from 'typedi'
import { AuthorInput } from '../schema/input-types'

@Service()
export class AuthorService {
  getById(id): Promise<Author> {
    return AuthorModel.findById(id).exec()
  }

  getAll() {
    return AuthorModel.find().exec()
  }

  createAuthor(authorDoc: AuthorInput) {
    return AuthorModel.create(authorDoc)
  }

  findByIds(ids: any[]) {
    return AuthorModel.find({
      _id: {
        $in: ids
      }
    }).exec()
  }

  updateAuthor(id, author: AuthorInput) {
    return AuthorModel.findByIdAndUpdate(id, author, { new: true }).exec()
  }
}
