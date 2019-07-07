import 'reflect-metadata'
import { AuthorResolver } from './resolvers/author.resolver'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { Container } from 'typedi'
import * as mongoose from 'mongoose'
import config from './config'
import { ObjectIdScalar } from './custom-scalars/objectId.scalar'
declare const module: any
async function bootstrap() {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.dbURL, {
      useNewUrlParser: true
    })
  }
  const schema = await buildSchema({
    resolvers: [AuthorResolver],
    container: Container,
    scalarsMap: [{ type: mongoose.Types.ObjectId, scalar: ObjectIdScalar }]
  })

  const server = new ApolloServer({
    schema,
    playground: true
  })

  // Start the server
  const { url } = await server.listen()
  console.log(`Server is running, GraphQL Playground available at ${url}`)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
      if (server) {
        server.stop()
      }
    })
  }
}

bootstrap()
