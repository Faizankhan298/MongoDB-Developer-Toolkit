/*
LESSON 1: INSERTING DOCUMENTS IN A MONGODB COLLECTION

insertOne()
db.<collection>.insertOne()
db.grades.insertOne()

insertMany()
db.<collection>.insertMany([
<document1>,
<document2>,
...])

Insert a Single Document
Use insertOne() to insert a document into a collection. Within the parentheses of insertOne(), include an object that contains the document data. Here's an example:

db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
})

Insert Multiple Documents
Use insertMany() to insert multiple documents at once. Within insertMany(), include the documents within an array. Each document should be separated by a comma. Here's an example:

db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: FINDING DOCUMENTS IN A MONGODB COLLECTION 
find() - db.<collection>.find()

it - for more results

specific 
{ field: {$eq: <value> } }
{ field: <value>  }

db.<collection>.find({state:"AZ"})

$in -The $in operator allows us
to select all documents that
have a field value equal to
any of the values specified
in the array.

db.<collection>.find({state: {$in: ["AZ", "CA"]}})


Use the $eq operator
to find documents with
a field and value

Use the $in operator to
select documents equal
to the values specified in
the array

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: FINDING DOCUMENTS BY USING COMPARISON OPERATORS
db.collection.findOne()
db.collection.find({ "items.price": { $gt: 200}})


$gt (greater than)
$lt (less than)
$lte (less than or equal to)
$gte (greater than or equal to)

<field>: { <operator> : <value> }


$gt
Returns documents where
the field contains a value
greater than the specified
value.

$lte
Returns all documents
less than or equal to a
given number. 


Finding Documents by Using Comparison Operators
Review the following comparison operators: $gt, $lt, $lte, and $gte.

$gt
Use the $gt operator to match documents with a field greater than the given value. For example:

db.sales.find({ "items.price": { $gt: 50}})
$lt
Use the $lt operator to match documents with a field less than the given value. For example:

db.sales.find({ "items.price": { $lt: 50}})
$lte
Use the $lte operator to match documents with a field less than or equal to the given value. For example:

db.sales.find({ "customer.age": { $lte: 65}})
$gte
Use the $gte operator to match documents with a field greater than or equal to the given value. For example:

db.sales.find({ "customer.age": { $gte: 65}})

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: QUERYING ON ARRAY ELEMENTS IN MONGODB

Query arrays in
documents
$elemMatch 

Find Documents with an Array That Contains a Specified Value
db.accounts.find({ products: "InvestmentFund"})

Find a Document by Using the $elemMatch Operator
db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: FINDING DOCUMENTS BY USING LOGICAL OPERATORS

$and
$or 

When including the same operator—
more than once in your query, you
need to use the explicit $and operator.


Find a Document by Using Implicit $and
db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } })


Find a Document by Using the $and Operator
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})

Find a Document by Using the $or Operator
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})



*/
