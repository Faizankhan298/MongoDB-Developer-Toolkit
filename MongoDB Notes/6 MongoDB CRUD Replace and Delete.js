/*
LESSON 1: REPLACING A DOCUMENT IN MONGODB

replaceOne()
db.collection.replaceOne(filter,replacement,options) 


filter - id
replacement - new document
options - upsert, collation, writeConcern

filter: A query that matches the document to replace.
replacement: The new document to replace the old one with.
options: An object that specifies options for the update.

db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: UPDATING MONGODB DOCUMENTS BY USING UPDATEONE()

updateOne() - Updates a single document that matches the filter.
Update operators:
$set and $push
upsert

3 parameters:
filter: A query that matches the document to update.
update: The modifications to apply.
options: An object that specifies options for the update.

The $set operator:
Adds new fields and
values to a document
Replaces the value of
a field with a specified
value

db.podcasts.updateOne(
  {
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"),
  },

  {
    $set: {
      subscribers: 98562,
    },
  }
)

The $push operator:
Appends a value to
an array
If absent, $push adds the
array field with the value
as its element

db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)

upsert
Insert a document with
provided information if
matching documents
don't exist.

The update operations
will be carried out.

db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: UPDATING MONGODB DOCUMENTS BY USING FINDANDMODIFY()

How and when to use
findAndModify()

findAndModify()
Returns the document
that has just been
updated

3 parameters:
query: A query that matches the document to update.
update: The modifications to apply.
new: If true, returns the modified document.

db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
})


How findAndModify()
is different from
updateOne() and findOne()

Problem with
approach
Two round trips to
the server
Another user could
modify the document
before findOne(),
returning a different
version of the document

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: UPDATING MONGODB DOCUMENTS BY USING UPDATEMANY()

updateMany()
Filter document
Update document
Options object

Not an all-or-nothing
operation
Will not roll back updates
Updates will be visible
as soon as they're
performed
Not appropriate for some
use cases

Update multiple documents
with updateMany()
Accepts a filter document,
an update document, and
an options object
Returns an output message
showing the number of
matched and modified
documents

db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
)   

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: DELETING DOCUMENTS IN MONGODB

deleteOne()
db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") })

deleteMany()    
db.podcasts.deleteMany({category: “crime”})


*/
