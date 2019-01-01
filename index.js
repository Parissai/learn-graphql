import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './src/data/schema';

const app = express();
const PORT = 3000;

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(`GraphQL is running on port ${PORT}`)
)

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () =>
  console.log(`Server is running on port localhost:${PORT}/graphql`)
);
