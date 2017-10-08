var { graphql, buildSchema } = require('graphql');

const graphqlHTTP = require('express-graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    greeting : String
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },

    rollDice: ({numDice, numSides}) => {
        let rolls = []
        for (let i=0; i<numDice; i++){
            rolls.push(Math.ceil(Math.random() * numSides))
        }

        return rolls
    }
};

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true
})