import express from "express"
import bodyParser from "body-parser"
import { ApolloServer } from "apollo-server-express"
import typeDefs from "./schema"
import resolvers from "./resolvers"


const app = express()
app.use(bodyParser.json())
const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError: error => {
    return error
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    }
  },
})


async function startServer() {

    await server.start();
    server.applyMiddleware({ app, path: "/graphql" })
}


startServer()
app.listen(8081, () => {
  console.log("app is listening to port 8081")
})
