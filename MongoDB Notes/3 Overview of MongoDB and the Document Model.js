/*
MongoDB Database - General Purpose Document Database

Document - Basic unit of data in MongoDB
Collection - Group of documents
Database - A Container for collections

The MongoDB database is at the core of Atlas

Document Model - Easier to plan how application data will correspond to data in the database Model data of any shape or structure

Advantages
Key-value
Text
Geospatial
Time-series
Graph data
Scalability
Resilience
Speed of development
Privacy and Security

Document - Displayed in JSON and Stored in BSON(Binary JavaScript Object Notation) - adds support for data types unavailable in JSON

Document Structure
The values in a document can be any data type, including strings, objects, arrays, booleans, nulls, dates, ObjectIds, and more. Here's the syntax for a MongoDB document, followed by an example:

Syntax:
{
"key": value,
"key": value,
"key" : value
}

Example:
{
"_id": 1,
"name": "AC3 Phone",
"colors" : ["black", "silver"],
"price" : 200,
"available" : true
}


Object ID's-
A data type used to create unique identifiers for the required _ id field
Every document requires an _ id field, which acts as a primarykey.
If an inserted document doesn't include the id field, MongoDB automatically generates an Objectld for the id field.


*/
