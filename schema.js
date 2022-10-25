import {gql} from 'apollo-server-express'

const typeDefs= gql`

  type User{
    name:String!
  }

  type Query{
    user(name: String!): User
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
  
  }
`;

export default typeDefs