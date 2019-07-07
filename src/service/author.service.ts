import { AuthorModel, Author } from './../models/author.model'
import { Service } from 'typedi'
import { AddAuthorInput } from '../schema/input-types'

@Service()
export class AuthorService {
  getById(id) {
    return AuthorModel.findById(id).exec()
  }

  getAll() {
    return AuthorModel.find().exec()
  }

  createAuthor(authorDoc: AddAuthorInput) {
    return AuthorModel.create(authorDoc)
  }

  findByIds(ids: any[]) {
    return AuthorModel.find({
      _id: {
        $in: ids
      }
    }).exec()
  }

  updateAuthor(id, author: AddAuthorInput) {
    return AuthorModel.findByIdAndUpdate(id, author, { new: true }).exec()
  }
}
