# A simple project to learn GraphQL

## Why use GraphQL:

- Type inspection
- Query multiple DBs from one GraphQL server
- Flexibility of the queries

---

## How to run locally

- Clone the project: `git clone git@github.com:Parissai/learn-graphql.git`
- Install dependencies: `npm i`
- [Install MongoDB](https://docs.mongodb.com/manual/installation/#mongodb-community-edition)
- Create a directory for the data: `mkdir -p /data/db`
  OR if you don't have admin access: `sudo mkdir -p /data/db`
- Make sure that you have access to the directory you just created: `sudo chmod 777 /data/db`
- Get MongoDB started with `mongod` in one terminal
- Run the server in another terminal: `npm start`

---

## Testing on http://localhost:3000/graphql


### Test create mutation

```javascript=
mutation {
  createContact(input: {
    firstName: "Par",
    lastName: "issa",
    company: "FAC"
  }) {
    id
  }
}
```

### Test getContacts query

```javascript=
query {
  getContacts {
    id
    firstName
    lastName
    company
  }
}
```


### Test update mutation

```javascript=
mutation {
  updateContact({input: {
    id: "5c2bde3403cad61267d308ad"
    firstName: "Parissa"
    lastName: "S"
    company: "Founders&Coders"
  }}), {
  firstName
  lastName
  company
  }
}
``` 

### Test delete mutation

```javascript=
mutation {
  deleteContact(id: "5c2c0fb12e03c8543f4fe538")
}
```