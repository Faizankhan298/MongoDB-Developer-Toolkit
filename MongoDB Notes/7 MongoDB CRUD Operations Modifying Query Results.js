/*

LESSON 1: SORTING AND LIMITING QUERY RESULTS IN MONGODB

cursor.sort()
cursor.limit()

Cursor
Pointer to the result set of
a query
find() returns a cursor

Cursor methods
Chained to queries
Perform actions on the
result set

cursor.sort()
1  Sorts the result set in ascending order
-1 Sorts the result set in descending order

db.companies.find({ category_code: "music" }).sort({ name: 1 });


cursor.limit()

Limiting the number of
results can enhance
performance

db.companies
  .find({ category_code: "music" })
  .sort({ number_of_employees: -1, _id: 1 })
  .limit(3);

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------  

LESSON 2: RETURNING SPECIFIC DATA FROM A QUERY IN MONGODB


Projection - Selecting fields to return in our result

Inclusion & exclusion
statements can't be
combined in projections
id field is an exception


Return all restaurant inspections - business name, result, and _id fields only  
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 }
)

Return all inspections with result of "Pass" or "Warning" - exclude date and zip code
db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 }
)

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: COUNTING DOCUMENTS IN A MONGODB COLLECTION

Count Documents
db.collection.countDocuments( <query>, <options> )


Count number of docs in trip collection
db.trips.countDocuments({})

Count number of trips over 120 minutes by subscribers
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })


*/