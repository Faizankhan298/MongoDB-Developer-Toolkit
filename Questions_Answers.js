/*

Which of the following cloud providers are available on a free-tier shared Atlas cluster? 
A. Amazon Web Services
B. Google Cloud
D. Microsoft Azure

You have an Atlas cluster and need to grant specific users access to specific projects. Where can you do this in Atlas? (Select
one.)
B. Organizations


What is the relationship between the MongoDB database and MongoDB Atlas? (Select one.)
B. The MongoDB database is a core element of MongoDB Atlas, which is a multi-cloud developer data platform.

Jenni works at an e-commerce start-up that uses MongoDB for its customer data managament, product catalog and payment processing. Her startup now wants to add personalized recommendations for customers using real-time analytics. Jenni and her team will need to move data to a separate analytics database to handle this new use case.

B.
False


Which of the following are data types that are supported by MongoDB by using BSON? (Select all that apply.)

A. 32-bit integer
B. Object
C. Array
D. ObjectId



Which of the following statements are true about the _id field in MongoDB? (Select all that apply.) 
B. The _id field is required for each document.
C. The _id field must be unique.
D. The _id field is automatically included and populated with an ObjectId if the _id field is omitted in an inserted document.





Use the following documents labeled Document A and Document B to answer this question.

Elena's company has been storing customer data in records that are structured like Document A. Her company wants to add a new field to their customer records so that they are structured like Document B. Before inserting records like Document B, Elena and her team must update all older records to include the new field.

Document A

{
  "username": "vreddy",
  "name": "Vasanti Reddy",
  "email": "vreddy1@gmail.com",
  "location": {
    "city": "Delhi",
    "country": "India"
  }
}
Document B

{
  "username": "avasa",
  "name": "Asad Vasa",
  "email": "avasa1@yahoo.com",
  "social_media": {
    "Twitter": "avasa",
    "Instagram": "Asad101",
    "LinkedIn": "AsadVasa"
  },
  "location": {
    "city": "Los Angeles",
    "country": "United States"
  }
}


B)False




To view databases and collections in the Atlas Data Explorer, which button should you select? (Select one.)
C. Browse Collections



Using the Atlas Data Explorer, how can you add a collection to an existing database? (Select one.)

A. Select the database, then click the Create Collection button




Which of the pre-formatted connection strings are available in the Atlas dashboard? (Select all that apply.)

A. Connect with the MongoDB Shell
B. Connect your application
C. Connect using MongoDB Compass





Which REPL environment does the MongoDB Shell use? (Select one.)
B. Node


To connect your Atlas cluster with the MongoDB Shell, what do you need to run in the command line? (Select one.)

C. Your connection string



Which of the following describes MongoDB Compass? (Select one.)
D. A graphical user interface (GUI) for querying, aggregating, and analyzing data in MongoDB 



What does a MongoDB driver do? (Select one.)
B. Connects MongoDB to applications via programming languages


Visit the official MongoDB driver documentation. Which of the following languages have drivers that are supported by MongoDB? (Select all that apply.)
A. C#
B. Go
C. Node



How can you fix the following error? (Select one.)

MongoServerSelectionError: connection <monitor> to 34.239.188.169:27017 closed
B.
Add your IP address in the Network Access panel in Atlas.




How can we fix the following error? (Select all that apply.)

MongoServerError: bad auth : Authentication failed  
A. Check that you are connecting to the correct database deployment.
C. Check that your username and password are spelled correctly in your connection string.


What methods are available in MongoDB for inserting a single document? (Select one.)

A. .insertOne()

What methods are available in MongoDB for inserting multiple documents? (Select one.)
D. .insertMany()

What methods are available in MongoDB for finding documents? (Select one.)

A. .find()



You are searching for data on a small area in downtown Chicago with the following zip codes:

“60601”
“60602”
“60603”
“60604”
“60605”
“60606”
Which of the following query documents should you use to ensure that only the documents with the specified zip codes are returned? (Select one.)

B. { zip: { $in : [ "60601", "60602", "60603", "60604", "60605", "60606"] } }


Your company is conducting research on the customer experience and is focused on identifying unsatisfied customers. You need to find all customers with a satisfaction rating of 1 or 2.

Which of the following query documents would return all customers with a satisfaction rating of 1 or 2? (Select one.)

D. { "customer.satisfaction" : { $lte : 2}}



Your company wants to offer a special discount for customers who are 65 or older. Your task is to find the records for these customers. Which of the following queries would return documents for all customers 65 or older? (Select all that apply.)
B. { "customer.age" : { $gt : 64 }}
C. { "customer.age" : { $gte : 65 }}


Which of the following operators can be used to find a subdocument that matches specific criteria in an array?
B. $elemMatch

What will the following query return? (Select one.)
db.books.find({ genre: "Historical" })

A. All documents where the genre field is equal to either the scalar value of “Historical” or an array that contains “Historical”.



You want to know which mobile food trucks in your neighborhood, Astoria, are the best spots to eat. Using the inspections collection, you’re making a map of all mobile food trucks nearby that have passed inspection. What should you include in your query document to ensure that you find all the mobile food vendors in Astoria that passed inspection? (Select one.)

C. { "sector": "Mobile Food Vendor - 881" , "address.city": "ASTORIA" , "result": "Pass"}


What will the following query return? (Select one.)

db.routes.find({
  $and: [
    { $or: [{ dst_airport: "IST" }, { src_airport: "IST" }] },
    { $or: [{ stops: 0 }, { airline.name: "Turkish Airlines"}] },
  ]
})

A. All flights departing from or landing at the Istanbul airport (IST) that are nonstop or operated by Turkish Airlines.



Which of the following statements regarding the `replaceOne()` method for the MongoDB Shell (`mongosh`) are true? (Select all that apply.)
A. This method is used to replace a single document that matches the filter document.
B. This method accepts a filter document, a replacement document, and an optional options document.
D. This method returns a document containing an acknowledgement of the operation, a matched count, modified count, and an upserted ID (if applicable).



You want to replace the following document from the birds collection with a new document that contains additional information on recent sightings, the scientific name of each species, and wingspan. What field should you use in the filter document to ensure that this specific document is replaced? (Select one.)

{ _id: ObjectId("6286809e2f3fa87b7d86dccd") },
{
  common_name: "Morning Dove",
  habitat: ["urban areas", "farms", "grassland"],
  diet: ["seeds"]
}
A. { _id: ObjectId("6286809e2f3fa87b7d86dccd") }



You want to add an element to the items array field in the sales collection. To do this, what should you include in the update document? (Select one.)

C.  { $push: { items:[{ “name”: "tablet", “price”: 200}] } }


Air France has recently passed inspection. In the following document, you need to update the results field from Fail to Pass. To do this, what should you include in your update document? (Select one.)

{
  _id: ObjectId("56d61033a378eccde8a837f9"),
  id: '31041-2015-ENFO',
  certificate_number: 3045325,
  business_name: 'AIR FRANCE',
  date: 'Jun  9 2015',
  result: 'Fail',
  sector: 'Travel Agency - 440',
  address: {
    city: 'JAMAICA',
    zip: 11430,
    street: 'JFK INTL AIRPORT BLVD',
    number: 1
  }
} 

{ $set: {result: ‘Pass’} }


Using the zips collection, you write the following query. This query updates the population, which is stored in the pop field, in one zip code in Santa Fe, New Mexico. What will be returned? (Select one.)

db.zips.findAndModify({
  query: { _id: ObjectId("5c8eccc1caa187d17ca72ee7") },
  update: { $set: { pop: 40000 } },
  new: true,
})
A. The updated document, which contains a population of 40000


What would happen if you ran the following query on the zips collection? Note that there is currently no document for the city of Taos. (Select one.)

db.zips.findAndModify({
  query: { zip: 87571 },
  update: { $set: { city: "TAOS", state: "NM", pop: 40000 } },
  upsert: true,
  new: true,
})

B. A new document would be inserted because the upsert option is set to true.



hree computer science classes, with the class_ids of 377, 259, and 350, have earned 100 extra credit points by competing in a hackathon. You need to update the database so that all students who are in these classes receive extra credit points. Note that you will use the grades collection, which is in the sample_training database.

Which of the following queries will accomplish this goal? (Select one).

db.grades.updateMany(
  {
    class_id: {
$in: [ 377, 259, 350 ]
    },
   },
  {
    $push: {
      scores: [ 
{ type : 'extra credit', score: 100 }
]
    }
  }
)


United Airlines is the only airline that has a route from the Denver Airport (DEN) to the Northwest Arkansas Airport (XNA). It has decided to cancel this route due to low ridership.

Which of the following queries will delete the route? (Select one.)

Note that these documents are contained in the routes collection in the sample_training database.

oction C- db.routes.deleteOne({ src_airport: "DEN", dst_airport: "XNA"})



Air Berlin has filed for bankruptcy and ceased operations. You need to update the routes collection to delete all documents that contain an airline name of Air Berlin. Which of the following queries should you use? (Select one.)

C db.routes.deleteMany({ "airline.name": "Air Berlin"})


Using the inspections collection within the sample_training database, you need to find all inspections that were passed. Your manager has requested that you organize this data by the certificate number in ascending order. Which query should you use? (Select one).

B.

db.inspections.find( { result : "Pass" }).sort( {certificate_number:  1});




You are considering creating a new membership tier for your bike sharing service for users who take long trips. Using the trips collection within the sample-training database, you need to find the trips, taken by subscribers, with the longest trip duration. Return the top 5 results in descending order. Which query should you use? (Select one.)
D
db.trips.find( { usertype: "Subscriber"}).sort( { tripduration:  - 1 }).limit(5)


Which of the following statements are true about a projection document? (Select all that apply.)
A. We can include fields in our results by setting their values to 1 in the projection document.
B. We can exclude fields from our results by setting their values to 0 in the projection document.
C. We can either include or exclude fields in the results, but not both. The _id field is the exception to this rule.

If we don’t want to return the _id field, we can add it to the projection document and set it to which of the following values? (Select all that apply.)

A. 0


Which of the following statements are true about the countDocuments() collection method? (Select all that apply.)
A. The method takes a query parameter, which selects the documents to be counted.
B. We can use the method to count all documents in a collection.


What can we expect to be returned by running db.inspections.countDocuments({})? (Select one.)
A. The total number of documents in the inspections collection




Which of the following tasks cannot be completed with an aggregation pipeline? (Select one.)
B. Finding data from outside sources


Which command performs an aggregation operation by using an aggregation pipeline? (Select one.)

D. aggregate()


You have a collection that contains zip codes in the United States. Here’s a sample document from this collection:

_id: ObjectId('5c8eccc1caa187d17ca6eea2')
city: "EVERGREEN"
zip: "36401"
loc: Object
   y: 31.458009
   x: 86.925771 
pop: 8556
state: "AL"
What will the output of this aggregation pipeline be? (Select one.)

db.zips.aggregate([
{
   $match: { "state": "CA" }
},
{
   $group: { "_id": "$zip" }
}
])
B. One document for each zip code located in California (CA)



You have a collection that contains zip codes in the United States. Here’s a sample document from this collection:

_id: ObjectId('5c8eccc1caa187d17ca6eea2')
city: "EVERGREEN"
zip: "36401"
loc: Object
   y: 31.458009
   x: 86.925771 
pop: 8556
state: "AL"
What will the output of this aggregation pipeline be? (Select one.)

db.zips.aggregate([
{
   $match: { "state": "TX" }
},
{
   $group: { "_id": "$city" }
}
])

A. One document for each city located in Texas (TX)



You have a collection that contains zip codes in the United States. Here’s a sample document from this collection:

_id: ObjectId('5c8eccc1caa187d17ca6eea2')
city: "EVERGREEN"
zip: "36401"
loc: Object
   y: 31.458009
   x: 86.925771 
pop: 8556
state: "AL"
What will the output of this aggregation pipeline be? (Select one.)

db.zips.aggregate([
{
   $group: { "_id": "$pop" }
},
{
   $sort: { _id: -1 }
}
]

C. One document for the population of each zip code, sorted in descending order

You have a collection that contains all the zip codes in the United States. Here’s a sample document from this collection:

_id: ObjectId('5c8eccc1caa187d17ca6eea2')
city: "EVERGREEN"
zip: "36401"
loc: Object
   y: 31.458009
   x: 86.925771 
pop: 8556
state: "AL"
What will the output of this aggregation pipeline be? (Select one.)

db.zips.aggregate([
{
   $group: { "_id": "$pop" }
},
{
   $sort: { _id: -1 }
},
{
   $limit: { 10 }
}
])

C. 10 documents, each containing the population of a zip code as the _id, sorted by population in descending orde




What is the main difference between $set and $project? (Select one.)

D. $set is used to create or change values of new or existing fields. $project can be used to create or change the value of fields, but it can also be used to specify which fields to show in the documents in the aggregation pipeline.

What does the $count stage return? (Select one.)
A. A single document with one field that contains the value set to the number of documents at this stage in the aggregation pipeline.



What does the $out stage do? (Select one). 
C. Creates a new collection that contains the documents in this stage of the aggregation pipeline.

What happens if you set the $out stage to output to a collection that already exists? (Select one.
A. The existing collection is erased and replaced with the outputted documents.



Which of the following statements about indexes are correct? (Select all the that apply.)
A. Indexes are data structures that improve performance, support efficient equality matches and range-based query operations, and can return sorted results.  
C. Indexes are used to make querying faster for users. One of the easiest ways to improve the performance of a slow query is create indexes on the data that is used most often.

Which of the following statements about indexes are true? (Select one.)
B. Indexes improve query performance at the cost of write performance.





What is a single field index? (Select one.)

A. An index that supports efficient querying against one field


You have a collection of customer details. The following is a sample document from the collection:

{
  "_id": { "$oid": "5ca4bbcea2dd94ee58162a6a" },
  "username": "hillrachel",
  "name": "Katherine David",
  "address": "55711 Janet Plaza Apt. 865\nChristinachester, CT 62716",
  "birthdate": { "$date": { "$numberLong": "582848134000" } },
  "email": "timothy78@hotmail.com",
  "Accounts": [
    { "$numberInt": "462501" },
    { "$numberInt": "228290" },
    { "$numberInt": "968786" },
    { "$numberInt": "515844" },
    { "$numberInt": "377292" }
  ],
  "tier_and_details": {}
}
You create a single field index on the email field, with the unique constraint set to true:

db.customers.createIndex({email:1}, {unique:true}) 
What would happen if you attempt to insert a new document with an email that already exists in the collection? (Select one.)

D. MongoDB will return a duplicate key error, and the document will not be inserted.


What is a multikey index? (Select one.)
B. An index where one of the indexed fields contains an array

What is the maximum number of array fields per multikey index? (Select one.)
A. 1


What is a compound index? (Select one.)
C. An index that contains references to multiple fields within a document

What is the recommended order of fields in a compound index? (Select one.)
C. Equality, Sort, Range


What are the ramifications of deleting an index that is supporting a query? (Select one.)
B. The performance of the query will be negatively affected.



You have a collection of customer details. The following is a sample document from this collection:

{
  "_id": { "$oid": "5ca4bbcea2dd94ee58162a6a" },
  "username": "hillrachel",
  "name": "Katherine David",
  "address": "55711 Janet Plaza Apt. 865\nChristinachester, CT 62716",
  "birthdate": { "$date": { "$numberLong": "582848134000" } },
  "email": "timothy78@hotmail.com",
  "Accounts": [
    { "$numberInt": "462501" },
    { "$numberInt": "228290" },
    { "$numberInt": "968786" },
    { "$numberInt": "515844" },
    { "$numberInt": "377292" }
  ],
  "tier_and_details": {}
}
You have an index on the email field. Here’s the command you used to create the index:

db.customers.createIndex({email:1})
Before deleting it, you want to assess the impact of removing this index on the performance of the query. To do this, which command should you use? (Select one.)
D. hideIndex()  


What type of index is written below? (Select one.)
{
  "analyzer": "lucene.standard",
  "searchAnalyzer": "lucene.standard",
  "mappings": {
    "dynamic": true
  }
}
A. A search index


When using a dynamic index, which fields does an Atlas Search query against? (Select one.)  
C. All of the fields including nested fields.


When would you use a dynamically mapped search index? (Select one.)

C. When you want to search all of the fields with equal weight


If the search index is statically mapped and the only field mapping is for the "storeLocation" field, and you searched for one of the items sold by the office supply company, notepads, how many results will come up? (Select one.)
C. None

The following code is a snippet from a search index. What type of field mapping does this search index use? (Select one.)

{
    "mappings": {
        "dynamic": false,
        "fields": {
            "common_name": [
            {
                "dynamic": true,
                "type": "document"
            },
            {
                "type": "string"
            }
            ]
        }
    }
}
B. Static Mapping


What does the “filter” clause do? (Select one.)
A. It returns results that match the clause

Which clauses used by the compound operator contribute to the score given the results? (Select one.) 
D. "must", "must not", and "should"


If you want to view the metadata (facets and their count) for Atlas Search, which aggregation stage must you use? (Select one.)
B. $searchMeta

Which operator can you use to group Atlas search results? (Select one.)
D. facet



Which of the following statements is/are true about data modeling? (Select all that apply.)

A. Data modeling is the process of defining how data is stored.
B. Data modeling is the process of defining the relationships that exist among different entities in your data.



Which of the following are benefits of a proper data model? (Select all that apply.)

A. A proper data model makes it easier to manage your data.
B. A proper data model makes queries more efficient.
C. A proper data model uses less memory and CPU.
D. A proper data model reduces costs.


Which of the following is a benefit of the document model?

A.
The document model does not enforce any document structure by default. This means that documents even in the same collection can have different structures.


Which of the following are common types of relationships that are found in every database? (Select all that apply.)

A. One-to-one relationship
B. One-to-many relationship
C. Many-to-many relationship

What is the type of relationship shown in the following document?

{
    "_id": ObjectId("00000001"),
    "name": "Marnie Dupree",
    "grade": "Freshman",
    "studentId": 123456,
    "email": "mdupree@college.edu"
}
A.
One-to-one relationship





A legacy bank database has been ported to MongoDB, resulting in a set of collections that were mapped to their original tables.

You're tasked with redesigning the accounts collection of the banking database to make the information clearer. The bank would like you to keep the customers' contact information and account information separate.

The following is a sample document in the accounts collection:

{
  "account_id": "MDB653115886",
  "account_holder": "Herminia Mckinney",
  "account_type": "savings",
  "balance": 6617.34,
  "street_num": 123,
  "street": "Main St",
  "city": "Tulsa",
  "state": "OK",
  "zip": 74008,
  "country": "USA",
  "home_phone": 1234567890,
  "cell_phone": 1111111111,
  "transfers": [
    ...
  ],    
}
Which of the following actions can be made to improve this schema? Consider the following requirements:

Preserve the one-to-one relationship among all the fields.
Keep the contact and account information separate.
Store data together that is accessed together.

Hint
Remember that you can embed subdocuments and create separate collections.
A. Create two collections: one for accounts and one for customer_info.

B. Embed the phone numbers as a subdocument.

Which of the following statements is/are true about embedding data in documents? (Select all that apply.)

Correct Answer
A. Embedding data in documents simplifies queries.
B. Embedding data in documents improves the overall performance of queries.


Which of the following relationship types often use embedding? (Select all that apply.)

B. One-to-many relationship
C. Many-to-many relationship


Which of the following statements is/are true about referencing data in documents? (Select all that apply.) 

A. Referencing data in documents avoids duplication of data.
B. Referencing data in documents may result in smaller documents.
C. Referencing data in documents links documents by using the same field.



Imagine the following are a sample of documents from a users collection:

...
{
    "id": "AL001",
    "name": "Ella Richardson"
},
{
    "id": "AL002",
    "name": "Jackie Thomas"
},
{
    "id": "AL003",
    "name": "Justin McDonald"
},
...  
Consider the following document from a posts collection, which contains data about a blog post and its comments. Which field is used as a reference? (Select one.)

{
    "author": "Aileen Long",
    "title": "Learn MongoDB in 30 Mins",
    "published_date": ISODate("2020-05-18T14:10:30Z"),
    "tags": ["mongodb", "introductory", "database", "nosql"],
    "comments": [
        {
            "comment_id": "LM001",
            "user_id": "AL001",
            "comment_date": ISODate("2020-05-19T14:22:00Z"),
            "comment": "Great read!"
        },
        {
            "comment_id": "LM002",
            "user_id": "AL002",
            "comment_date": ISODate("2020-06-01T08:00:00Z"),
            "comment": "So easy to understand - thanks!"
        }
    ]
}
Correct Answer
D. user_id


What are the effects of creating unbounded documents when embedding data? (Select all that apply.)
A. Unbounded documents impact write performance.
C. Unbounded documents cause storage problems.


What is the recommended way to avoid the unbounded document sizes that may result from embedding?

A.
Break data into multiple collections and use references.

What is MongoDB's principle for how you should design your data model?

A.
Data that is accessed together should be stored together.


Which tab in Data Explorer shows ways to improve your schemas?
B Schema anti-pattern 

What is the minimum Atlas Cluster tier that you must have to use the Performance Advisor tool?
B.
M10


Which of the following is the best definition of an ACID transaction? (Select one.)
C. A group of database operations that must happen all together or not at all.



Which of the following scenarios require the use of an ACID transaction? (Select all that apply.)

A. Updating a bank database to reflect the transfer of money from Customer A's bank account into Customer B's bank account.
B. Updating inventory and shopping cart records when a customer adds an item to their online shopping cart in an ecommerce app



Which of the following statements are true about multi-document transactions in MongoDB? (Select all that apply.)
A. Database operations that affect more than one document, like .updateMany(), are not inherently atomic in MongoDB and must be completed by using a multi-document transaction in order to have ACID properties.
B. Multi-document transactions should be treated as a precise tool that is used only in certain scenarios.
C. Using a multi-document transaction with a MongoDB database ensures that the database will be in a consistent state after running a set of operations on multiple documents.


Nadia needs to update customer account balances across multiple collections in MongoDB. It's important that the database operations used in this transaction adhere to ACID properties. Should Nadia use a transaction in this scenario? (Select one.)

B. Nadia does need to use a transaction in this scenario because multi-document operations are NOT inherently atomic in MongoDB.



You are creating a transaction that does the following:

Inserts a new savings account into the accounts collection for an existing customer

Funds the new savings account with $200 from their checking account

The transaction looks like this: 

const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('bank').getCollection('accounts')

account.insertOne({
  account_id: "MDB361428849",
  account_holder: "Donna Wood",
  account_type: "savings",
  balance: 200.0,
  transfers_complete: [],
  last_updated: new Date()
})
account.updateOne( { account_id: "MDB919841472" }, {$inc: { balance: -200.00 }})

What method should you use to complete this transaction? (Select one.)

B. commitTransaction()


Which of the following commands will output to the shell if they are successful?

B. .commitTransaction()


*/