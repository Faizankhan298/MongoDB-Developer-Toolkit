/*

LESSON 1: USING MONGODB INDEXES IN COLLECTIONS

What are indexes?
Special data structures
Store small portion
of the data
Ordered and easy
to search efficiently
Point to the document
identity

Indexes improve
query performance:
Speed up queries
Reduce disk 1/0
Reduce resources required
Support equality matches
and range-based operations
and return sorted results


Without indexes
MongoDB reads all
documents (collection
scan)
Sorts results in memory

With indexes
MongoDB only fetches
the documents identified
by the index based on the
query

return result faster


There is one default index
per collection, which
includes only the _ id
field
Every query should use
an index

If we insert or update
documents, we need to
update the index data
structure
Delete unnecessary or
redundant indexes

Most common
index types:

1-Single field index
2- Compound index

Multikey indexes operate
on an array field

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: CREATING A SINGLE FIELD INDEX IN MONGODB

Create a single-field index
by using createIndex()

Index on single field
Support queries and
sort on a single field

Enforce uniqueness
Identify indexes
by using getIndexes()

Determine the indexes
being used in a query
by using explain()

Create a Single Field Index
db.customers.createIndex({
  birthdate: 1
})

Create a Unique Single Field Index
db.customers.createIndex({
  email: 1
},
{
  unique:true
})

View the Indexes used in a Collection
db.customers.getIndexes()


Check if an index is being used on a query

The IXSCAN stage indicates the query is using an index and what index is being selected.
The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
The FETCH stage indicates documents are being read from the collection.
The SORT stage indicates documents are being sorted in memory.

db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  })
db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  }).sort({
    email:1
    })
Previous

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: CREATING A MULTIKEY INDEX IN MONGODB
Multikey indexes
Index on an array field
Can be single field or
compound index

One array field per index

Multikey indexing
in MongoDB:
Any index where one of
the indexed fields contains
an array
The array can hold nested
objects or other field types
In a compound index, only
one field can be an array
per index

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: WORKING WITH COMPOUND INDEXES IN MONGODB
Compound indexes
Index on multiple fields
Can be a multikey index
if it includes an array field
Maximum of one array
field per index
Support queries that
match on the prefix
of the index fields

The order of the fields in
a compound index
matters
Follow this order:
Equality, Sort, Range
The sort order of the
field values in the
index matters

Equality
Test exact matches on
single field
Should be placed first in
a compound index
Reduces query
processing time
Retrieves fewer
documents


Sort
Determines the order of
results
Index sort eliminates
the need for in-memory
sorts
Sort order is important if
query results are sorted
by more than 1 field and
they mix sort orders

Create a Compound Index
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})

Order of Fields in a Compound Index
Equality: field/s that matches on a single field value in a query
Sort: field/s that orders the results by in a query
Range: field/s that the query filter in a range of valid values
db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: DELETING MONGODB INDEXES  

Indexes improve
performance.
Indexes have a write cost.
Too many indexes in a
collection can affect
system performance
Delete unused or redundant
indexes.


Make sure the index is
not being used
Deleting an index that's
the only index supporting
a query will affect the
performance of the query.
Recreating an index
takes time and resources.
Hide the index
before deleting it.
db.collection.hideIndex(<index>)


Deleting an index can affect
the query performance.
droplndex()
to delete one index.
droplndexes()
to delete more than one index.
hidelndex()
to hide an index.
Delete an index in the Atlas
UI with the Drop Index option.


View the Indexes used in a Collection
db.customers.getIndexes()


Delete an Index
Delete index by name:
db.customers.dropIndex(
  'active_1_birthdate_-1_name_1'
)

Delete index by key:
db.customers.dropIndex({
  active:1,
  birthdate:-1, 
  name:1
})


Delete Indexes
db.customers.dropIndexes()

db.collection.dropIndexes([
  'index1name', 'index2name', 'index3name'
  ])


*/  