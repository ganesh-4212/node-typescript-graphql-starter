import 'reflect-metadata'
import { AuthorResolver } from './resolvers/author.resolver'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import * as mongoose from 'mongoose'
import config from './config'
import { ObjectIdScalar } from './custom-scalars/objectId.scalar'
import { BookResolver } from './resolvers/book.resolver'
async function bootstrap() {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.dbURL, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
  try {
    const schema = await buildSchema({
      resolvers: [AuthorResolver, BookResolver],
      container: Container,
      dateScalarMode: 'isoDate',
      scalarsMap: [{ type: mongoose.Types.ObjectId, scalar: ObjectIdScalar }]
    })
    const server = new ApolloServer({
      schema,
      playground: true
    })
    const { url } = await server.listen()
    console.log(`Server is running, GraphQL Playground available at ${url}`)
  } catch (ex) {
    console.error(ex)
  }

  // Start the server
}

bootstrap()
