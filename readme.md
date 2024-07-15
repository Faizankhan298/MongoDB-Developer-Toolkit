# MongoDB Developer's Toolkit: CRUD Mastery with Node.js, Java, Python
## Indexing

- [MongoDB Developer's Toolkit: CRUD Mastery with Node.js, Java, Python](#mongodb-developers-toolkit-crud-mastery-with-nodejs-java-python)
  - [Indexing](#indexing)
- [MONGODB INTRODUCTION](#mongodb-introduction)
  - [Introduction](#introduction)
  - [What is MongoDB](#what-is-mongodb)
  - [Key Features of MongoDB:](#key-features-of-mongodb)
- [GETTING STARTED WITH MONGODB ATLAS](#getting-started-with-mongodb-atlas)
  - [Steps to Get Started:](#steps-to-get-started)
- [MONGODB AND THE DOCUMENT MODEL](#mongodb-and-the-document-model)
  - [Overview](#overview)
  - [Databases, Collections, and Documents](#databases-collections-and-documents)
    - [Key Features](#key-features)
    - [Summary](#summary)
- [CONNECTING TO A MONGODB DATABASE](#connecting-to-a-mongodb-database)
  - [MongoDB Connection Strings: A Comprehensive Guide](#mongodb-connection-strings-a-comprehensive-guide)
    - [Example of a MongoDB Connection String](#example-of-a-mongodb-connection-string)
    - [Breakdown of the Example](#breakdown-of-the-example)
    - [Example in Context](#example-in-context)
    - [Components of a MongoDB Connection String](#components-of-a-mongodb-connection-string)
  - [CONNECTING TO A MONGODB DATABASE](#connecting-to-a-mongodb-database-1)
    - [Introduction](#introduction-1)
    - [1. Connecting to a MongoDB Atlas Cluster with the Shell](#1-connecting-to-a-mongodb-atlas-cluster-with-the-shell)
      - [Steps:](#steps)
  - [2. Connecting to a MongoDB Atlas Cluster with Compass](#2-connecting-to-a-mongodb-atlas-cluster-with-compass)
    - [Steps:](#steps-1)
  - [3. Connecting from Applications](#3-connecting-from-applications)
    - [Node.js (Using the MongoDB Node.js Driver)](#nodejs-using-the-mongodb-nodejs-driver)
    - [Python (Using the PyMongo Driver)](#python-using-the-pymongo-driver)
    - [Java (Using the MongoDB Java Driver)](#java-using-the-mongodb-java-driver)
- [CRUD OPERATIONS](#crud-operations)
  - [1. INSERT AND FIND](#1-insert-and-find)
  - [2. REPLACE, UPDATE AND DELETE](#2-replace-update-and-delete)
  - [3. MODIFYING QUERY RESULTS](#3-modifying-query-results)
- [MONGODB AGGREGATION](#mongodb-aggregation)
    - [1. Aggregation Pipeline](#1-aggregation-pipeline)
    - [2. Key Stages](#2-key-stages)
  - [Using `$match` and `$group` Stages in MongoDB Aggregation Pipeline](#using-match-and-group-stages-in-mongodb-aggregation-pipeline)
    - [Example 1: $match](#example-1-match)
    - [Example 2: $group](#example-2-group)
    - [Combined Example: $match and $group](#combined-example-match-and-group)
    - [Breakdown of the Stages](#breakdown-of-the-stages)
  - [Using `$sort` and `$limit` Stages in a MongoDB Aggregation Pipeline](#using-sort-and-limit-stages-in-a-mongodb-aggregation-pipeline)
    - [Example: $sort](#example-sort)
    - [Example: $limit](#example-limit)
    - [Combined Example: $sort and $limit](#combined-example-sort-and-limit)
    - [Breakdown of the Stages](#breakdown-of-the-stages-1)
  - [Using `$project`, `$count` and `$set` Stages in a MongoDB Aggregation Pipeline](#using-project-count-and-set-stages-in-a-mongodb-aggregation-pipeline)
    - [Example: $project](#example-project)
    - [Example: $count](#example-count)
    - [Example: $set](#example-set)
    - [Combined Example: $match, $group, $project, and $set](#combined-example-match-group-project-and-set)
    - [Breakdown of the Stages](#breakdown-of-the-stages-2)
  - [Using `$out` Stage in a MongoDB Aggregation Pipeline](#using-out-stage-in-a-mongodb-aggregation-pipeline)
    - [Breakdown of the Stages with $out](#breakdown-of-the-stages-with-out)
- [MONGODB INDEXES](#mongodb-indexes)
    - [Why Use Indexes?](#why-use-indexes)
    - [Types of Indexes](#types-of-indexes)
    - [Creating Indexes](#creating-indexes)
    - [Viewing Indexes](#viewing-indexes)
    - [Dropping Indexes](#dropping-indexes)
    - [Best Practices](#best-practices)
  - [Creating a Single Field Index in MongoDB](#creating-a-single-field-index-in-mongodb)
    - [Example in MongoDB Shell](#example-in-mongodb-shell)
    - [Explanation](#explanation)
    - [Creating an Index on the `location.geo` Field](#creating-an-index-on-the-locationgeo-field)
  - [Creating a Multikey Index in MongoDB](#creating-a-multikey-index-in-mongodb)
    - [Creating a Multikey Index](#creating-a-multikey-index)
    - [Use Case Example](#use-case-example)
    - [Example Scenario: JobApp](#example-scenario-jobapp)
    - [Use Case Example for JobApp](#use-case-example-for-jobapp)
    - [Benefits of Multikey Indexes](#benefits-of-multikey-indexes)
    - [Best Practices](#best-practices-1)
  - [Working with Compound Indexes in MongoDB](#working-with-compound-indexes-in-mongodb)
    - [Creating a Compound Index](#creating-a-compound-index)
      - [Example Document](#example-document)
      - [Creating a Compound Index](#creating-a-compound-index-1)
    - [Use Case Examples](#use-case-examples)
    - [Understanding Index Prefix](#understanding-index-prefix)
    - [Querying with `explain`](#querying-with-explain)
    - [Best Practices](#best-practices-2)
    - [Summary](#summary-1)
  - [Deleting MongoDB Indexes](#deleting-mongodb-indexes)
    - [Deleting an Index](#deleting-an-index)
      - [1. **Delete a Specific Index**](#1-delete-a-specific-index)
      - [2. **Delete Multiple Indexes**](#2-delete-multiple-indexes)
      - [3. **Delete All Indexes**](#3-delete-all-indexes)
    - [Finding Index Names](#finding-index-names)
    - [Example Scenario](#example-scenario)
      - [Viewing Indexes](#viewing-indexes-1)
      - [Deleting a Specific Index](#deleting-a-specific-index)
      - [Deleting All Indexes](#deleting-all-indexes)
    - [Summary](#summary-2)
  - [Hiding and Showing MongoDB Indexes](#hiding-and-showing-mongodb-indexes)
    - [Hiding an Index](#hiding-an-index)
      - [Example](#example)
    - [Showing an Index](#showing-an-index)
      - [Example](#example-1)
    - [Checking Index Visibility](#checking-index-visibility)
      - [Example](#example-2)
    - [Example Scenario](#example-scenario-1)
      - [Hiding an Index](#hiding-an-index-1)
      - [Checking Indexes](#checking-indexes)
      - [Output](#output)
      - [Unhiding an Index](#unhiding-an-index)
    - [Summary](#summary-3)
- [MONGODB ATLAS SEARCH](#mongodb-atlas-search)
    - [Key Features](#key-features-1)
    - [Getting Started with Atlas Search](#getting-started-with-atlas-search)
      - [Step 1: Create an Atlas Cluster](#step-1-create-an-atlas-cluster)
      - [Step 2: Enable Atlas Search](#step-2-enable-atlas-search)
      - [Step 3: Define Search Indexes](#step-3-define-search-indexes)
      - [Step 4: Performing a Search Query](#step-4-performing-a-search-query)
    - [Example Use Case: JobApp](#example-use-case-jobapp)
    - [Conclusion](#conclusion)
- [INTRODUCTION TO DATA MODELING IN MONGODB](#introduction-to-data-modeling-in-mongodb)
  - [Introduction to MongoDB Data Modeling](#introduction-to-mongodb-data-modeling)
  - [Introduction to Data Modeling](#introduction-to-data-modeling)
  - [Types of Data Relationships](#types-of-data-relationships)
    - [1. One-to-One](#1-one-to-one)
    - [2. One-to-Many](#2-one-to-many)
    - [3. Many-to-Many](#3-many-to-many)
  - [Modeling Data Relationships](#modeling-data-relationships)
    - [Embedding Data in Documents](#embedding-data-in-documents)
    - [Referencing Data in Documents](#referencing-data-in-documents)
  - [Scaling a Data Model](#scaling-a-data-model)
  - [Using Atlas Tools for Schema Help](#using-atlas-tools-for-schema-help)
- [MONGODB TRANSACTIONS](#mongodb-transactions)
  - [Introduction to ACID Transactions](#introduction-to-acid-transactions)
    - [Introduction to ACID Transactions](#introduction-to-acid-transactions-1)
    - [ACID Transactions in MongoDB](#acid-transactions-in-mongodb)
  - [Using Transactions in MongoDB](#using-transactions-in-mongodb)
    - [Example of Using Transactions in MongoDB](#example-of-using-transactions-in-mongodb)
    - [Key Steps in Using Transactions](#key-steps-in-using-transactions)

#   MONGODB INTRODUCTION

## Introduction

In today's digital age, where data reigns supreme, the need for robust, scalable, and flexible database solutions is paramount. `MongoDB`, a leading `NoSQL database`, has emerged as a popular choice among developers and enterprises alike. In this guide, we'll explore the fundamentals of MongoDB and show you how to get started with MongoDB Atlas, the Developer Data Platform, to kickstart your database journey.

## What is MongoDB

`MongoDB` is a document-oriented NoSQL database that provides high performance, scalability, and flexibility for managing modern, unstructured data. Unlike traditional relational databases, MongoDB stores data in flexible, `JSON-like documents`, making it ideal for handling diverse and evolving data structures.

## Key Features of MongoDB:

- **Flexible Schema**: Store heterogeneous data without predefined schemas, enabling agile development and easy data modeling.
- **High Scalability**: Distributed architecture allows for seamless horizontal scaling across multiple nodes.
- **Rich Query Language**: Powerful query language supports rich queries, indexing, and aggregation pipelines.
- **Document-Based Storage**: Stores data in BSON (Binary JSON) format for efficient storage and retrieval of complex data structures.
- **Replication and Sharding**: Supports automatic replication and sharding for fault tolerance, data redundancy, and horizontal scaling.

**[Back To Top ⬆ ](#indexing)**

# GETTING STARTED WITH MONGODB ATLAS 

MongoDB Atlas is a fully managed cloud database service provided by MongoDB, designed to simplify database deployment, management, and scaling. With MongoDB Atlas, developers can focus on building applications without worrying about infrastructure management.

## Steps to Get Started:

1. **Sign Up for MongoDB Atlas**: 
   - Go to the [MongoDB website](https://www.mongodb.com/cloud/atlas).
   - Sign up for a free account. MongoDB offers a free tier with generous usage limits, making it easy for developers to get started without any upfront costs.

2. **Create a Cluster**:
   - After signing up, log in to the MongoDB Atlas dashboard.
   - Click on "Build a New Cluster" and follow the prompts to configure your cluster. Choose your cloud provider, region, and cluster tier based on your requirements.

3. **Connect to Your Cluster**:
   - Once your cluster is created, MongoDB Atlas provides a connection string.
   - Use this connection string to connect your application to the database. You can connect using:
     - **MongoDB Shell**: For command-line interactions.
     - **Drivers**: For various programming languages (e.g., Node.js, Python, Java).
     - **MongoDB Compass**: A graphical user interface for managing your database.

4. **Manage Your Cluster**:
   - MongoDB Atlas offers tools for monitoring, backups, and security.
   - Monitor your cluster's performance, set up automated backups, and configure access controls to secure your data.

5. **Scale Your Cluster**:
   - As your application grows, you can easily scale your cluster.
   - Upgrade instance sizes, add additional shards for horizontal scaling, or enable auto-scaling to automatically adjust resources based on demand.

---
**[Back To Top ⬆ ](#indexing)**
# MONGODB AND THE DOCUMENT MODEL

## Overview

MongoDB is a general-purpose database used for a variety of use cases and is part of the Atlas developer data platform. The MongoDB document model organizes data into *documents*, *collections*, and *databases*. This readme provides an overview of these concepts and how to use MongoDB and Atlas Data Explorer.

## Databases, Collections, and Documents

- ### Database
      A container for collections, similar to a schema in relational databases

- ### Collection
      A group of MongoDB documents, analogous to a table in relational databases.

- ### Document
      A record in a collection, stored in BSON format.

  - #### The MongoDB Document Model

  - #### BSON
    Binary JSON format used to store MongoDB documents, which can contain nested data structures.

  - #### Document Structure
    The values in a document can be any data type, including strings, objects, arrays, booleans, nulls, dates, ObjectIds, and more. Here's the syntax for a MongoDB document, followed by an example:

  - #### Syntax
    ```json
    {
    "key": value,
    "key": value,
    "key": value
    }
   
   - #### Example
     ```json
     {
      "_id": ObjectId("507f1f77bcf86cd799439011"),
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "address": {
                  "street": "123 Main St",
                  "city": "Anytown",
                  "zip": "12345"
               },
      "hobbies": ["reading", "travelling", "coding"]
     }
  - ### Field
        A key-value pair within a document.

### Key Features
- **Data Organization:** Data is organized into documents, collections, and databases.
- **BSON:** Documents are stored in BSON, supporting a wide range of data types including JSON data types, dates, numbers, and ObjectIds.
- **_id Field:** Every document requires an _id field, acting as a primary key or unique identifier. MongoDB generates one automatically if not provided.
- **Flexible Schema:** Documents with different structures can be stored in the same collection.

### Summary
- A **Database** contains multiple **Collections**.
- Each **Collection** contains multiple **Documents**.
- Each **Document** contains multiple **Fields**.
  
**[Back To Top ⬆ ](#indexing)**

# CONNECTING TO A MONGODB DATABASE


## MongoDB Connection Strings: A Comprehensive Guide

MongoDB's connection strings encapsulate all the necessary information required to connect to a MongoDB database instance. Understanding these connection strings is crucial for establishing a successful connection to your MongoDB server. Below is a detailed breakdown of the components of a MongoDB connection string:

### Example of a MongoDB Connection String

Here is an example of a MongoDB connection string with all components included:

```
mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
```

### Breakdown of the Example

- **Protocol**: `mongodb+srv://`
- **Username**: `<username>`
- **Password**: `<password>`
- **Hostname**: `<cluster-url>`
- **Database Name**: `<dbname>`
- **Options**: `retryWrites=true&w=majority`

### Example in Context

For a MongoDB cluster hosted on MongoDB Atlas, the connection string might look like this:

```
mongodb+srv://admin:admin123@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

In this example:
- The protocol is `mongodb+srv://`.
- The username is `admin`.
- The password is `admin123`.
- The cluster URL is `cluster0.mongodb.net`.
- The database name is `myDatabase`.
- The options include `retryWrites=true` and `w=majority`.

### Components of a MongoDB Connection String

1. **Protocol**
   - The protocol specifies the communication protocol used to connect to the MongoDB server.
   - Common protocols include:
     - `mongodb://` for unencrypted connections.
     - `mongodb+srv://` for connections using DNS seed list discovery.

2. **Hostname and Port ( CLUSTER URL)**
   - The hostname and port components denote the address and port number of the MongoDB server.

3. **Authentication Credentials**
   - Authentication credentials include the `username` and `password` required to authenticate against the MongoDB server.
   - These credentials are essential for securing access to your database.
   - Example: `mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority`

4. **Database Name**
   - The database name specifies the name of the database to which you want to connect.
   - If the database does not exist, MongoDB will create it upon connection.

5. **Options**
   - Additional options can be included in the connection string to customize the connection.
   - Common options include:
     - `retryWrites=true` to enable automatic retries of certain write operations.
     - `w=majority` to set the write concern to "majority".

**[Back To Top ⬆ ](#indexing)**
## CONNECTING TO A MONGODB DATABASE

### Introduction
MongoDB Atlas, a cloud-based database service, offers developers a robust platform for managing their data. Establishing a connection to your MongoDB Atlas cluster is a crucial first step. This guide explores two methods for connecting to a MongoDB Atlas cluster: using the `MongoDB shell` and `MongoDB Compass`. Additionally, it covers connecting from `Applications`.

### 1. Connecting to a MongoDB Atlas Cluster with the Shell

#### Steps:
1. **Locate Connection String**: 
   - Navigate to your MongoDB Atlas dashboard.
   - Select your cluster and click "Connect."
   - Choose "Connect Your Application" and select "Mongo Shell."
   - Copy the connection string provided.
2. **Open Terminal**: 
   - Launch your terminal or command prompt.
   - Paste the copied connection string, replacing `<password>` with your MongoDB Atlas password.
3. **Connect to Cluster**: 
   - Execute the command to connect to your MongoDB Atlas cluster:
     ```bash
     mongo "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"
     ```
   - Enter your MongoDB Atlas username and password when prompted.
4. **Authentication**: 
   - Once authenticated, you are connected to your MongoDB Atlas cluster and can execute MongoDB commands and queries.

## 2. Connecting to a MongoDB Atlas Cluster with Compass

### Steps:
1. **Download and Install Compass**:
   - Download MongoDB Compass from the MongoDB website.
   - Follow the installation instructions.
2. **Locate Connection String**:
   - In the MongoDB Atlas dashboard, select your cluster and click "Connect."
   - Choose "Connect Your Application" and select "MongoDB Compass."
   - Copy the connection string provided.
3. **Launch Compass**:
   - Open MongoDB Compass and click on the "New Connection" button.
4. **Paste Connection String**:
   - In the connection dialog, paste the copied connection string.
5. **Connect**:
   - Click "Connect" and enter your MongoDB Atlas username and password if prompted.

## 3. Connecting from Applications

MongoDB Atlas supports various programming languages and frameworks. Below are examples for Node.js, Python, and Java:

### Node.js (Using the MongoDB Node.js Driver)
```javascript
const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
async function connectToAtlas() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    // Perform database operations here
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  }
}

connectToAtlas();
```

### Python (Using the PyMongo Driver)
```python
from pymongo import MongoClient

# MongoDB connection string
uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"

# Connect to MongoDB Atlas
def connect_to_atlas():
    client = MongoClient(uri)
    try:
        print("Connected to MongoDB Atlas")
        # Perform database operations here
    except Exception as e:
        print("Error connecting to MongoDB Atlas:", e)
    finally:
        client.close()
        print("Disconnected from MongoDB Atlas")

connect_to_atlas()
```

### Java (Using the MongoDB Java Driver)
```java
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.ConnectionString;

public class Main {
    public static void main(String[] args) {
        // MongoDB's connection string
        String uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

        // Connect to MongoDB Atlas
        try (MongoClient client = MongoClients.create(new ConnectionString(uri))) {
            System.out.println("Connected to MongoDB Atlas");
            // Perform database operations here
        } catch (Exception e) {
            System.err.println("Error connecting to MongoDB Atlas: " + e);
        }
    }
}
```
---

**[Back To Top ⬆ ](#indexing)**

# CRUD OPERATIONS
## 1. INSERT AND FIND
  When you insert a document in a collection, it returns insertedId.
  - ## insertOne()
         db.<collection>.insertOne({<document>})
      *Example*

      ```js
      db.Sales.insertOne(
         { 
         'item': 'abc',   // key : value
         'price': 10, 
         'quantity': 2, 
         'date': new Date('2014-03-01T08:00:00Z') 
         }
      )
      ```

     ### *You can see the insertedId in the terminal output.*

      ![alt text](/assets/image.png)
  - ## insertMany()
    
        db.<collection>.insertMany([{<document>},{<document>},{<document>}])
      
      *Example*

      ```js
      db.Sales.insertMany(
      [
         { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
         { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
         { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
         { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
         { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
         { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
         { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
      ]
      );
      ```
      ### *You can see the insertedIds in the terminal output.*

      ![alt text](/assets/image-1.png)

  - ## find()
         db.<collection>.find()
      It returns all the documents in the collection

      *Example*
      ```js
      db.sales.find()
      ```
      ![alt text](/assets/image-2.png)

  - ## findOne()
        db.<collection>.findOne()
      It returns the first document in the collection.

      *Example*
      ```js
      db.sales.findOne()
      ```

      ![alt text](/assets/image-3.png)

  - ## find({query})
        db.<collection>.find({query})
      It returns the documents that match the query.

      *Example*
      ```js
      db.sales.find({item: 'xyz'})
      ```
      There is 2 documents with same query.

      ![alt text](/assets/image-4.png)

  - ## findOne({query})
        db.<collection>.findOne({query})
        
      It returns the first document that match the query.

      *Example*
      ```js
      db.sales.findOne({item: 'xyz'})
      ```
      ![alt text](/assets/image-5.png)

  - ## find({ $in operator })
        db.<collection>.find({<field>:{$in:[<value>,<value>,<value>]}})
        
      It returns the documents that match the value in the array.

      *Example*
      ```js
      db.sales.find({price:{$in:[10,5,20]}})
      ```
      ![alt text](/assets/image-6.png)

  - ## find({comparison operator})
    - **$gt** : stands for `greater than`.
    - **$lt** : stands for `less than`.
    - **$gte** : stands for `greater than or equal`.
    - **$lte** : stands for `less than or equal`.
    - **$ne** : stands for `not equal`.
  
          db.<collection>.find({<field>:{$(comparison operator):<value>}})
          

      *Example*
      ```js
      db.movies.find({"imdb.rating":{$gt:7}})
      ```
      ![alt text](/assets/image-7.png)

            db.<collection>.find({
            <field>:{$(comparison operator):<value>},
            <field:{$(comparison operator):<value>}
            })

      *Example*

      ```js
         db.movies.find({
         "imdb.rating":{$gt:7},
         "tomatoes.viewer.rating":{$gt:4},
         })
      ```

      ![alt text](/assets/image-8.png)

  - ## find({query in Array})
         db.<collection>.find({<field>:{
          $elemMatch:{$eq:<value>}
         }})
      It returns the documents that match the value in the array.

      *Example*
      ```js
      db.movies.find({cast:{
        $elemMatch:{$eq:"John Bowers"}
      }})
      ```
      ![alt text](/assets/image-9.png)

  - ## find({logical operator})
    * **$and**
    * **$or**
         
           db.<collection>.find({
            $(logical operator):[
              {<expression>},
              {<expression>},
            ]
           })

      *$and Example*
      ```js
      db.movies.find({
        $and:[
          {"imdb.rating":{$gte:6.9}},
          {runtime:65}
          ]
      })
      ```

      ![alt text](/assets/image-10.png)

      *$or Example*
      ```js
      db.movies.find(
        $or:[
          {runtime:65},
          {directors:{
            $elemMatch:{$eq:"Winsor McCay"}
          }}
        ]
      )
      ```
      ![alt text](/assets/image-11.png)

**[Back To Top ⬆ ](#indexing)**

## 2. REPLACE, UPDATE AND DELETE

  - ## replaceOne(filter , replacement)
  
    * **filter**: The filter is used to find the document to be replaced.   
    * **replacement**: The replacement document is used to replace the document found by the filter.
    * **options**: The options are used to specify the behavior of the replaceOne() method.
    * **Upsert Option**:
      When upsert is set to true, if no document matches the filter, MongoDB will insert the replacement document as a new document.
      If a document matches the filter, it will be replaced with the replacement document.
  
          db.<collection>.replaceOne(filter, replacement, options)

    *Example*

    ```js
    db.sales.replaceOne(
       {_id:new ObjectId("6682e1a165332a71e20576f5")},
       {
        "item": "abc",
        "price": 15,
        "quantity": 5,
        "date": {
          "$date": "2014-03-01T08:00:00Z"
          }
       }
       {
        upsert: true
       }
    )
    ```
    ![alt text](/assets/image-12.png)

  - ## updateOne(filter, update, options)
          db.<collection>.updateOne(filter, update, options)

      *Example*
      ```js
      db.movies.updateOne(
        {title:"The Matrix"},
        {$set:{title:"The Matrix Reloaded"}}
      )
      ```
      ![alt text](/assets/image-13.png)

      ```js
      db.movies.updateOne({
        {title:"The Matrix Reloaded"},
        {
          $push:{
            genres:"Horror"
          }
        }
      })
      ```
      ![alt text](/assets/image-14.png)

  - ## findAndModify(query,update,options)
        db.<collection>.findAndModify(query,update,options)

    *Example*

    ```js
    db.movies.findAndModify(
      {
        query:{title:"The Matrix Reloaded"},
        update:{
          $inc:{"imdb.rating":1}
        },
        new:true
      }
    )
    ```
    ![alt text](/assets/image-15.png)

    *Rating increased by 1.*

    ![alt text](/assets/image-16.png)

  - ## updateMany(filter,update)
         db.<collection>.updateMany(filter,update)

      *Example*
      ```js
      db.movies.updateMany(
        {year:1999},
        {
          $inc:{"imdb.rating":-1}
        }
      )
      ```
      ![alt text](/assets/image-17.png)

  - ## deleteOne(filter)
        db.<collection>.deleteOne(filter)
        
      *Example*
      ```js
      db.sales.deleteOne({price:15})
      ```
      ![alt text](/assets/image-18.png)

  - ## deleteMany(filter)
    It will delete all the document that matches the filter.

        db.<collection>.deleteMany(filter)

    *Example*
    ```js
    db.sales.deleteMany({price:5})
    ```
    ![alt text](/assets/image-19.png)

**[Back To Top ⬆ ](#indexing)**

## 3. MODIFYING QUERY RESULTS
  
  - ## Sorting and Limiting Query Result 
    - **limit(n)**
         
           db.<collection>.find().limit(n)
      *Example*
      ```js
      db.sales.find().limit(2)
      ```
      ![alt text](/assets/image-20.png)

    - **sort({field:n})**
       
       n=1 Ascending.
       n=-1 Descending.

             db.<collection>.find().sort({filed:n})

      *Example*
      ```js
      db.sales.find().sort({item:1})
      ```
      ![alt text](/assets/image-21.png)

      ```js
      db.movies.find({"imdb.rating":{
        $ge:6
      }},{"imdb.rating":-1}).sort({"imdb.rating":-1})
      ```
      ![alt text](/assets/image-22.png)

  - ## Returning Specific Data from a Query 
  
    - Getting single field only along with _id.
  
            db.<collection>.find().project({field:1})
    - - 1 mean include and 0 means exclude.
    
    *Example*
    ```js
    db.movies.find().projection({cast:1});
    ```
    ![alt text](/assets/image-23.png)

    - Getting more than 1 field along with _id.
  
             db.<collection>.find().projection({filed1:1,field2:1})

    *Example*
    ```js
    db.movies.find().projection({cast:1,title:1})
    ```
    ![alt text](/assets/image-24.png)

    - Excluding the desired filed.
   
      *Example*
      ```js
      db.movies.find().projection({cast:0,title:0})
      ```

      ![alt text](/assets/image-25.png)
    
  - ## Counting Documents in MongoDB Documents
    
    - countDocuments({filter})
            
            db.<collection>.countDocuments()

      *Example*
      ```js
      db.movies.countDocuments()
      ```
      ![alt text](/assets/image-26.png)

      *Example*
      ```js
      db.movies.countDocuments("imdb.rating":{
        $gte: 8
      })
      ```

      ![alt text](/assets/image-27.png)

---
**[Back To Top ⬆ ](#indexing)**

# MONGODB AGGREGATION

MongoDB Aggregation Framework is a powerful tool for performing data processing and analysis directly within the database. It allows you to transform and combine data from multiple documents, providing a way to conduct complex operations and analytics without the need to pull data into your application. Here's an introduction to its key concepts:

### 1. Aggregation Pipeline

The core of MongoDB’s aggregation framework is the **aggregation pipeline**. This is a series of stages that process documents. Each stage transforms the documents as they pass through the pipeline. The stages are executed in sequence, and the output of one stage is passed as input to the next stage.

### 2. Key Stages

- **$match**: Filters documents to pass only those that match the specified conditions.
- **$group**: Groups documents by a specified identifier and can calculate aggregates, such as sums, averages, and counts.
- **$project**: Reshapes documents, including or excluding fields, adding new fields, or computing new fields.
- **$sort**: Sorts documents by a specified field.
- **$limit**: Limits the number of documents passing through the pipeline.
- **$skip**: Skips a specified number of documents.
- **$unwind**: Deconstructs an array field from the input documents to output a document for each element.
- **$lookup**: Performs a left outer join to another collection to filter in documents from the “joined” collection.

**[Back To Top ⬆ ](#indexing)**

## Using `$match` and `$group` Stages in MongoDB Aggregation Pipeline

### Example 1: $match

Suppose you want to find all theaters in the city of Mansfield.

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.city": "Mansfield"
    }
  }
])
```

### Example 2: $group

Let's say you want to group theaters by state and count the number of theaters in each state.

```javascript
db.theaters.aggregate([
  {
    $group: {
      _id: "$location.address.state",
      theaterCount: { $count: {} }
    }
  }
])
```
![alt text](/assets/image-28.png)
### Combined Example: $match and $group

You might also want to find the count of theaters in each city within Texas (`TX`).

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: "$location.address.city",
      theaterCount: { $count: {} }
    }
  }
])
```
![alt text](/assets/image-29.png)

### Breakdown of the Stages

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition.
    - In the first example, it filters theaters located in Mansfield.
    - In the combined example, it filters theaters located in the state of Texas.

2. **$group Stage**:
    - Groups the documents by a specified identifier (e.g., city or state).
    - Computes aggregate values such as counts, sums, averages, etc.
    - In the second example, it groups theaters by state and counts them.
    - In the combined example, it groups theaters by city within Texas and counts them.

## Using `$sort` and `$limit` Stages in a MongoDB Aggregation Pipeline


### Example: $sort

Suppose you want to sort theaters by their `theaterId` in ascending order.

```javascript
db.theaters.aggregate([
  {
    $sort: {
      theaterId: 1
    }
  }
])
```

In this example, the `$sort` stage sorts the documents by the `theaterId` field in ascending order (1 for ascending, -1 for descending).

### Example: $limit

If you want to limit the results to the first 5 theaters, you can use the `$limit` stage.

```javascript
db.theaters.aggregate([
  {
    $limit: 5
  }
])
```

### Combined Example: $sort and $limit

Let's combine `$sort` and `$limit` to sort the theaters by `theaterId` in descending order and limit the results to the top 3 theaters.

```javascript
db.theaters.aggregate([
  {
    $sort: {
      theaterId: -1
    }
  },
  {
    $limit: 3
  }
])
```
![alt text](/assets/image-30.png)

### Breakdown of the Stages

1. **$sort Stage**:
    - Sorts the documents by the specified field(s).
    - In the combined example, it sorts the theaters by `theaterId` in descending order.

2. **$limit Stage**:
    - Limits the number of documents passing through the pipeline.
    - In the combined example, it limits the results to the top 3 theaters after sorting.

## Using `$project`, `$count` and `$set` Stages in a MongoDB Aggregation Pipeline

### Example: $project

Suppose you want to project only the `theaterId` and `location.address.city` fields from the documents.

```javascript
db.theaters.aggregate([
  {
    $project: {
      _id: 0,
      theaterId: 1,
      city: "$location.address.city"
    }
  }
])
```

In this example, the `$project` stage reshapes the documents to include only the `theaterId` and `city` fields.

### Example: $count

If you want to count the total number of theaters, you can use the `$count` stage.

```javascript
db.theaters.aggregate([
  {
    $count: "totalTheaters"
  }
])
```

### Example: $set

Let's say you want to add a new field `state` that duplicates the value of `location.address.state`.

```javascript
db.theaters.aggregate([
  {
    $set: {
      state: "$location.address.state"
    }
  }
])
```

### Combined Example: $match, $group, $project, and $set

Let's combine several stages: filter theaters in Texas (`$match`), group by city and count the number of theaters in each city (`$group`), project the results to include the city and count (`$project`), and then use $set to create a field "fullAddress" containing the street, city, state, and zip code separated by commas.

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: {
        city: "$location.address.city",
        street: "$location.address.street1",
        state: "$location.address.state",
        zipcode: "$location.address.zipcode"
      },
      theaterCount: { $sum: 1 }
    }
  },
  {
    $set: {
      fullAddress: {
        $concat: [
          "$_id.street", ", ",
          "$_id.city", ", ",
          "$_id.state", ", ",
          "$_id.zipcode"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      theaterCount: 1,
      fullAddress: 1
    }
  }
])

```
![alt text](/assets/image-31.png)

### Breakdown of the Stages

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition (theaters in Texas).

2. **$group Stage**:
    - Groups the documents by city and counts the number of theaters in each city.

3. **$project Stage**:
    - Reshapes the documents to include only the `city` and `theaterCount` fields, and excludes the `_id` field.

4. **$set Stage**:
    - Adds a new field `label` with the value "Number of Theaters".

5. **$count Stage**:
    - Although not included in the combined example, it can be used to count the total number of documents passing through the pipeline.

**[Back To Top ⬆ ](#indexing)**

## Using `$out` Stage in a MongoDB Aggregation Pipeline

The `$out` stage in MongoDB’s aggregation pipeline writes the results of the aggregation to a specified collection. This stage must be the last stage in the pipeline.

Here’s an example of how to modify the previous pipeline to use the `$out` stage to write the results to a new collection called `texas_theaters_summary`:

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: {
        city: "$location.address.city",
        street: "$location.address.street1",
        state: "$location.address.state",
        zipcode: "$location.address.zipcode"
      },
      theaterCount: { $sum: 1 }
    }
  },
  {
    $set: {
      fullAddress: {
        $concat: [
          "$_id.street", ", ",
          "$_id.city", ", ",
          "$_id.state", ", ",
          "$_id.zipcode"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      theaterCount: 1,
      fullAddress: 1
    }
  },
  {
    $out: "texas_theaters_summary"
  }
])
```

### Breakdown of the Stages with $out

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition (theaters in Texas).

2. **$group Stage**:
    - Groups the documents by a compound key of `city`, `street`, `state`, and `zipcode` and counts the number of theaters in each group.

3. **$set Stage**:
    - Adds a new field `fullAddress` that concatenates the `street`, `city`, `state`, and `zipcode` fields separated by commas.

4. **$project Stage**:
    - Reshapes the documents to include only the `theaterCount` and `fullAddress` fields, excluding the `_id` field.

5. **$out Stage**:
    - Writes the results of the aggregation pipeline to the specified collection `texas_theaters_summary`.

This pipeline processes the documents and writes the results to the `texas_theaters_summary` collection, which will contain documents like this:

```json
{
  "theaterCount": 1,
  "fullAddress": "2041 Highway 287 N, Mansfield, TX, 76063"
}
```
![alt text](/assets/image-32.png)

The `$out` stage will overwrite the `texas_theaters_summary` collection if it already exists. If it does not exist, MongoDB will create it.

**[Back To Top ⬆ ](#indexing)**

# MONGODB INDEXES

Indexes in MongoDB are special data structures that store a small portion of the collection's data set in an easy-to-traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.

### Why Use Indexes?
- **Improve Query Performance:** Indexes support the efficient execution of queries by providing a faster path to data retrieval.
- **Reduce Query Execution Time:** Indexes allow the database to quickly locate the required data without scanning the entire collection.

### Types of Indexes
1. **Single Field Index:** Index on a single field.
   ```javascript
   db.collection.createIndex({ field: 1 })  // Ascending order
   db.collection.createIndex({ field: -1 }) // Descending order
   ```

2. **Compound Index:** Index on multiple fields.
   ```javascript
   db.collection.createIndex({ field1: 1, field2: -1 })
   ```

3. **Multikey Index:** Index on an array field, allowing queries to search for array elements.
   ```javascript
   db.collection.createIndex({ arrayField: 1 })
   ```

4. **Text Index:** Index for text search on string content.
   ```javascript
   db.collection.createIndex({ field: "text" })
   ```

5. **Geospatial Index:** Index for spatial data queries.
   ```javascript
   db.collection.createIndex({ location: "2dsphere" })
   ```

6. **Hashed Index:** Index based on a hash of the field's value.
   ```javascript
   db.collection.createIndex({ field: "hashed" })
   ```

### Creating Indexes
To create an index, use the `createIndex` method on the collection. For example:
```javascript
db.users.createIndex({ username: 1 })
```

### Viewing Indexes
To view the indexes on a collection, use the `getIndexes` method:
```javascript
db.collection.getIndexes()
```

### Dropping Indexes
To drop an index, use the `dropIndex` method:
```javascript
db.collection.dropIndex("indexName")
```

### Best Practices
1. **Index Fields Used in Queries:** Index the fields that are frequently used in query filters, sorts, and join operations.
2. **Limit Number of Indexes:** While indexes improve read performance, they can degrade write performance as the database must update the index each time a document is written.
3. **Monitor Index Usage:** Use MongoDB tools like `explain()` to understand how queries use indexes and optimize accordingly.

**[Back To Top ⬆ ](#indexing)**

## Creating a Single Field Index in MongoDB

To create a single field index on the `theaterId` field in the given MongoDB document, you can use the `createIndex` method. Here's how you can do it:

```javascript
db.collection.createIndex({ theaterId: 1 })
```

This command will create an ascending index on the `theaterId` field. If you want to create a descending index, you can use `-1` instead of `1`:

```javascript
db.collection.createIndex({ theaterId: -1 })
```

### Example in MongoDB Shell

```javascript
db.theaters.createIndex({ theaterId: 1 })
```

### Explanation

- `db.theaters` specifies the collection name, which you should replace with your actual collection name if it's different.
- `createIndex` is the method to create the index.
- `{ theaterId: 1 }` specifies that you are creating an ascending index on the `theaterId` field.

### Creating an Index on the `location.geo` Field

If you want to create a geospatial index on the `location.geo` field to support geospatial queries, you can use the following command:

```javascript
db.theaters.createIndex({ "location.geo": "2dsphere" })
```

This command creates a `2dsphere` index, which supports queries that calculate geometries on an Earth-like sphere.

## Creating a Multikey Index in MongoDB

In MongoDB, a multikey index is an index that can be created on fields that contain arrays. When you create a multikey index, MongoDB indexes each element of the array, allowing queries to efficiently filter and sort documents based on array values.

### Creating a Multikey Index

Suppose you have a collection of documents representing movies, and each document has a `genres` field that is an array of genres. Here’s an example document:

```javascript
{
  "_id": ObjectId("59a47286cfa9a3a73e51e74d"),
  "title": "Inception",
  "director": "Christopher Nolan",
  "genres": ["Action", "Sci-Fi", "Thriller"]
}
```

To create a multikey index on the `genres` field, you would use the `createIndex` method:

```javascript
db.movies.createIndex({ genres: 1 })
```

### Use Case Example

1. **Querying for Movies of a Specific Genre**

Suppose you want to find all movies that belong to the "Action" genre. With a multikey index on the `genres` field, MongoDB can efficiently retrieve these documents.

```javascript
db.movies.find({ genres: "Action" })
```

2. **Querying for Movies of Multiple Genres**

You can also query for movies that belong to multiple genres. MongoDB will use the multikey index to optimize this query.

```javascript
db.movies.find({ genres: { $all: ["Action", "Sci-Fi"] } })
```

### Example Scenario: JobApp

Let's consider your JobApp, where job listings might have an array of required skills:

```javascript
{
  "_id": ObjectId("59a47286cfa9a3a73e51e74d"),
  "title": "Software Developer",
  "company": "TechCorp",
  "location": "New York",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

To create a multikey index on the `skills` field:

```javascript
db.jobs.createIndex({ skills: 1 })
```

### Use Case Example for JobApp

1. **Querying for Jobs Requiring a Specific Skill**

If you want to find all job listings that require "React":

```javascript
db.jobs.find({ skills: "React" })
```

2. **Querying for Jobs Requiring Multiple Skills**

If you want to find job listings that require both "JavaScript" and "Node.js":

```javascript
db.jobs.find({ skills: { $all: ["JavaScript", "Node.js"] } })
```

### Benefits of Multikey Indexes

- **Efficient Array Queries:** Allows efficient querying of documents with array fields.
- **Improved Query Performance:** Enhances performance for queries that filter on array elements.

### Best Practices

- **Limit Array Size:** Large arrays can increase the index size and impact performance. Try to limit the size of arrays in your documents.
- **Monitor Index Usage:** Use MongoDB's `explain` method to analyze query execution and ensure indexes are used effectively.

Creating multikey indexes on array fields in your MongoDB collections will optimize queries that involve array elements, improving the overall performance and responsiveness of your application.

**[Back To Top ⬆ ](#indexing)**

## Working with Compound Indexes in MongoDB

Compound indexes in MongoDB allow you to create an index on multiple fields within a document. These indexes can improve the performance of queries that filter and sort by multiple fields. 

### Creating a Compound Index

To create a compound index, you use the `createIndex` method and specify multiple fields in the index key specification. The order of the fields in the index is significant as it affects the types of queries that can utilize the index.

#### Example Document
Consider a collection of job listings with documents like this:
```javascript
{
  "_id": ObjectId("59a47286cfa9a3a73e51e74d"),
  "title": "Software Developer",
  "company": "TechCorp",
  "location": "New York",
  "postedDate": new Date("2023-06-15"),
  "salary": 120000
}
```

#### Creating a Compound Index
Suppose you frequently query this collection by `location` and `salary`. You can create a compound index on these fields:

```javascript
db.jobs.createIndex({ location: 1, salary: -1 })
```

- `location: 1` specifies an ascending order for the `location` field.
- `salary: -1` specifies a descending order for the `salary` field.

### Use Case Examples

1. **Query Filtering by Location and Sorting by Salary**

   With the compound index in place, this query can efficiently filter jobs by `location` and sort the results by `salary` in descending order:

   ```javascript
   db.jobs.find({ location: "New York" }).sort({ salary: -1 })
   ```

2. **Query Filtering by Location and Salary Range**

   The compound index also improves performance for queries that filter by `location` and a range of `salary` values:

   ```javascript
   db.jobs.find({ location: "New York", salary: { $gt: 100000, $lt: 150000 } })
   ```

3. **Query Filtering by Location Only**

   The compound index can still be used for queries that filter by `location` only:

   ```javascript
   db.jobs.find({ location: "New York" })
   ```

### Understanding Index Prefix

MongoDB can use the index for queries that include a prefix of the indexed fields. In the compound index `{ location: 1, salary: -1 }`, the following queries can use the index:

- Queries that filter by `location` and sort by `salary`.
- Queries that filter by `location`.
- Queries that filter by `location` and `salary`.

However, queries that only filter by `salary` cannot use this index efficiently.

### Querying with `explain`

To understand how MongoDB uses the index, you can use the `explain` method:

```javascript
db.jobs.find({ location: "New York", salary: { $gt: 100000 } }).explain("executionStats")
```

The `explain` output will show whether the index is being used and how many documents are being scanned.

### Best Practices

- **Order Matters:** The order of fields in a compound index is significant. Place the most selective field first (the field that reduces the number of matching documents the most).
- **Index Only Required Fields:** Limit the number of fields in the compound index to what is necessary for your queries.
- **Monitor Index Performance:** Use MongoDB's monitoring tools to ensure that indexes are improving query performance as expected.

### Summary

Compound indexes in MongoDB provide a powerful way to optimize queries that filter and sort by multiple fields. By carefully selecting and ordering the fields in a compound index, you can significantly improve query performance and ensure efficient data retrieval for your application.

**[Back To Top ⬆ ](#indexing)**

## Deleting MongoDB Indexes

Deleting indexes in MongoDB is a straightforward process. You can delete indexes to optimize performance, manage storage, or if they are no longer needed for your query patterns.

### Deleting an Index

#### 1. **Delete a Specific Index**
To delete a specific index, use the `dropIndex` method and provide the name of the index you want to remove.

```javascript
db.collection.dropIndex("indexName")
```

For example, if you have an index on the `title` field in a `jobs` collection:

```javascript
db.jobs.dropIndex("title_1")
```

#### 2. **Delete Multiple Indexes**
You can delete multiple indexes at once by providing an array of index names to the `dropIndexes` method.

```javascript
db.collection.dropIndexes(["indexName1", "indexName2"])
```

#### 3. **Delete All Indexes**
To delete all indexes on a collection except for the `_id` index, use the `dropIndexes` method without any arguments.

```javascript
db.collection.dropIndexes()
```

For example:

```javascript
db.jobs.dropIndexes()
```
### Finding Index Names

To determine which indexes exist on a collection, use the `getIndexes` method:

```javascript
db.collection.getIndexes()
```

For example, to list all indexes on the `jobs` collection:

```javascript
db.jobs.getIndexes()
```

This command will return an array of index specifications, including the index names.

### Example Scenario

Consider the `jobs` collection with the following indexes:

```javascript
db.jobs.createIndex({ title: 1 })
db.jobs.createIndex({ location: 1, salary: -1 })
db.jobs.createIndex({ company: 1 })
```

#### Viewing Indexes

```javascript
db.jobs.getIndexes()
```

Output:
```json
[
  { "v": 2, "key": { "_id": 1 }, "name": "_id_", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "title": 1 }, "name": "title_1", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "location": 1, "salary": -1 }, "name": "location_1_salary_-1", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "company": 1 }, "name": "company_1", "ns": "yourDatabase.jobs" }
]
```

#### Deleting a Specific Index

To delete the index on the `title` field:

```javascript
db.jobs.dropIndex("title_1")
```

#### Deleting All Indexes

To delete all indexes except for the `_id` index:

```javascript
db.jobs.dropIndexes()
```

### Summary

- **Specific Index:** Use `db.collection.dropIndex("indexName")` to delete a specific index.
- **Multiple Indexes:** Use `db.collection.dropIndexes(["indexName1", "indexName2"])` to delete multiple indexes.
- **All Indexes:** Use `db.collection.dropIndexes()` to delete all indexes except the `_id` index.
- **Find Indexes:** Use `db.collection.getIndexes()` to list all indexes on a collection.

Regularly review and manage your indexes to ensure they align with your query patterns and optimize your MongoDB performance.

**[Back To Top ⬆ ](#indexing)**

## Hiding and Showing MongoDB Indexes

In MongoDB 4.4 and later, you have the ability to hide and unhide indexes. This feature allows you to test the impact of removing an index on your query performance without actually dropping the index. If you find that the performance is acceptable without the index, you can then drop it. If not, you can unhide it.

### Hiding an Index

To hide an index, you use the `hideIndex` command.

#### Example

Suppose you have an index on the `title` field in the `jobs` collection:

```javascript
db.jobs.createIndex({ title: 1 })
```

To hide this index:

```javascript
db.jobs.hideIndex("title_1")
```

### Showing an Index

To unhide (show) an index, you use the `unhideIndex` command.

#### Example

To unhide the previously hidden index on the `title` field:

```javascript
db.jobs.unhideIndex("title_1")
```

### Checking Index Visibility

You can check whether an index is hidden or not by using the `getIndexes` method. Hidden indexes will have a `hidden` field set to `true`.

#### Example

To list all indexes and their visibility status:

```javascript
db.jobs.getIndexes()
```

Output:
```json
[
  { "v": 2, "key": { "_id": 1 }, "name": "_id_", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "title": 1 }, "name": "title_1", "ns": "yourDatabase.jobs", "hidden": true },
  { "v": 2, "key": { "location": 1, "salary": -1 }, "name": "location_1_salary_-1", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "company": 1 }, "name": "company_1", "ns": "yourDatabase.jobs" }
]
```

In this example, the index on `title` is hidden.

### Example Scenario

Assume you have a `jobs` collection with several indexes:

```javascript
db.jobs.createIndex({ title: 1 })
db.jobs.createIndex({ location: 1, salary: -1 })
db.jobs.createIndex({ company: 1 })
```

#### Hiding an Index

To hide the index on `location` and `salary`:

```javascript
db.jobs.hideIndex("location_1_salary_-1")
```

#### Checking Indexes

To verify the index status:

```javascript
db.jobs.getIndexes()
```

#### Output

```json
[
  { "v": 2, "key": { "_id": 1 }, "name": "_id_", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "title": 1 }, "name": "title_1", "ns": "yourDatabase.jobs" },
  { "v": 2, "key": { "location": 1, "salary": -1 }, "name": "location_1_salary_-1", "ns": "yourDatabase.jobs", "hidden": true },
  { "v": 2, "key": { "company": 1 }, "name": "company_1", "ns": "yourDatabase.jobs" }
]
```

#### Unhiding an Index

To unhide the `location` and `salary` index:

```javascript
db.jobs.unhideIndex("location_1_salary_-1")
```

### Summary

- **Hide an Index:** Use `db.collection.hideIndex("indexName")` to hide an index.
- **Unhide an Index:** Use `db.collection.unhideIndex("indexName")` to unhide an index.
- **Check Index Visibility:** Use `db.collection.getIndexes()` to list indexes and check their visibility status.

These commands provide a flexible way to manage your indexes and test the impact of their removal on query performance.

**[Back To Top ⬆ ](#indexing)**


# MONGODB ATLAS SEARCH

MongoDB Atlas Search is a powerful, integrated full-text search solution that allows you to run sophisticated searches on your MongoDB data. It leverages the power of the Lucene search engine and is fully managed within MongoDB Atlas, the cloud-based MongoDB service.

### Key Features

1. **Full-Text Search:** Provides capabilities like relevance scoring, text indexing, tokenization, and more.
2. **Rich Query Language:** Supports advanced search queries with operators like `$search`, `$text`, `$and`, `$or`, `$regex`, and many more.
3. **Faceted Search:** Allows you to categorize search results into groups.
4. **Autocomplete:** Provides real-time search suggestions as you type.

### Getting Started with Atlas Search

To use Atlas Search, you need to have a MongoDB Atlas cluster. Here’s a step-by-step guide to enable and use Atlas Search:

#### Step 1: Create an Atlas Cluster

1. **Sign up for MongoDB Atlas:** If you haven't already, sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. **Create a Cluster:** Follow the prompts to create a new cluster. Choose your cloud provider, region, and cluster tier based on your needs.

#### Step 2: Enable Atlas Search

1. **Access the Cluster:** In the MongoDB Atlas UI, go to the cluster where you want to enable search.
2. **Create Search Index:** 
   - Navigate to the "Collections" tab.
   - Select the database and collection you want to enable search for.
   - Click on the "Search Indexes" tab and then "Create Search Index".
   - Define your index by specifying the fields you want to include in the search index.

#### Step 3: Define Search Indexes

When creating a search index, you define which fields to index and how they should be indexed. Here’s an example JSON configuration for a simple search index:

```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "tags": {
        "type": "string"
      }
    }
  }
}
```

#### Step 4: Performing a Search Query

Once your search index is created, you can perform search queries using the `$search` stage in the aggregation pipeline.

Here’s an example using the MongoDB shell or a MongoDB driver:

```javascript
db.collection.aggregate([
  {
    $search: {
      index: "default",
      text: {
        query: "software developer",
        path: ["title", "description"]
      }
    }
  }
])
```

This query searches for the phrase "software developer" in the `title` and `description` fields.

### Example Use Case: JobApp

Consider your JobApp project, where you have a collection of job listings with fields like `title`, `description`, `skills`, and `location`. You want to enable full-text search on these fields.

1. **Create a Search Index:**

```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "skills": {
        "type": "string"
      },
      "location": {
        "type": "string"
      }
    }
  }
}
```

2. **Search Query Example:**

To search for job listings that mention "JavaScript developer" in the title or description:

```javascript
db.jobs.aggregate([
  {
    $search: {
      index: "default",
      text: {
        query: "JavaScript developer",
        path: ["title", "description"]
      }
    }
  }
])
```

3. **Using Autocomplete:**

To provide real-time search suggestions as users type, use the autocomplete operator:

```javascript
db.jobs.aggregate([
  {
    $search: {
      index: "default",
      autocomplete: {
        query: "soft",
        path: "title",
        fuzzy: {
          maxEdits: 2
        }
      }
    }
  }
])
```

### Conclusion

MongoDB Atlas Search offers a robust, fully integrated search solution for your MongoDB data. By enabling full-text search, faceted search, and autocomplete capabilities, it enhances the user experience and allows for more sophisticated querying of your data. This makes it an excellent choice for applications like your JobApp, where searching and filtering through job listings are essential features.

**[Back To Top ⬆ ](#indexing)**

# INTRODUCTION TO DATA MODELING IN MONGODB

## Introduction to MongoDB Data Modeling

Data modeling in MongoDB is the process of creating a data structure that matches the requirements of the application, taking into account how the data will be queried and updated. Unlike traditional SQL databases, MongoDB uses a flexible schema design that allows for the storage of varied and complex data structures.

## Introduction to Data Modeling

Data modeling involves defining the structure of data in a way that is optimized for the application’s requirements. It includes determining the relationships between different types of data and how they will be stored and accessed. In MongoDB, this involves using collections and documents instead of tables and rows.

## Types of Data Relationships

### 1. One-to-One
A one-to-one relationship occurs when a single document is related to another single document. For example, a user profile and user settings might have a one-to-one relationship.

### 2. One-to-Many
A one-to-many relationship exists when a single document is related to multiple documents. For instance, a single customer can have multiple orders.

### 3. Many-to-Many
A many-to-many relationship is when multiple documents are related to multiple other documents. An example would be students and courses, where a student can enroll in multiple courses and a course can have multiple students.

## Modeling Data Relationships

### Embedding Data in Documents
Embedding data means storing related data within a single document. This approach is useful when you frequently need to retrieve the related data together. It improves read performance by reducing the need for joins.

**Example:**
```json
{
  "title": "Post Title",
  "content": "Post Content",
  "comments": [
    {
      "author": "Commenter Name",
      "content": "Comment Content"
    }
  ]
}
```

### Referencing Data in Documents
Referencing involves storing the related data in separate documents and using references (or links) between them. This approach is useful for maintaining data consistency and avoiding duplication.

**Example:**
```json
// Post Document
{
  "title": "Post Title",
  "content": "Post Content",
  "comments": [
    ObjectId("comment_id_1"),
    ObjectId("comment_id_2")
  ]
}

// Comment Document
{
  "_id": ObjectId("comment_id_1"),
  "author": "Commenter Name",
  "content": "Comment Content",
  "postId": ObjectId("post_id")
}
```

## Scaling a Data Model

As your application grows, you need to ensure that your data model can scale effectively. Considerations for scaling include:

- **Sharding:** Distributing data across multiple servers to handle large volumes of data and traffic.
- **Indexing:** Creating indexes to improve query performance.
- **Data Partitioning:** Dividing data into partitions to manage and query large datasets efficiently.

## Using Atlas Tools for Schema Help

MongoDB Atlas provides several tools to help with schema design and optimization:

- **Schema Analyzer:** Analyzes your data and suggests schema improvements.
- **Performance Advisor:** Provides indexing suggestions based on your query patterns.
- **Data Explorer:** Allows you to visually explore your data and understand its structure.

**[Back To Top ⬆ ](#indexing)**

# MONGODB TRANSACTIONS

## Introduction to ACID Transactions


### Introduction to ACID Transactions
ACID stands for Atomicity, Consistency, Isolation, and Durability, which are a set of properties that ensure reliable processing of database transactions.

- **Atomicity:** Ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted.
- **Consistency:** Ensures that the database remains in a valid state before and after the transaction.
- **Isolation:** Ensures that the operations within a transaction are isolated from other concurrent transactions.
- **Durability:** Ensures that once a transaction is committed, it remains so, even in the event of a system failure.

### ACID Transactions in MongoDB
MongoDB supports multi-document ACID transactions, which allow multiple operations to be executed within a single transaction. This ensures that the operations are executed in an all-or-nothing manner, maintaining the integrity of the database.

## Using Transactions in MongoDB

MongoDB transactions can be used in a variety of scenarios, such as when multiple documents need to be updated atomically or when complex operations must be executed while maintaining database consistency.

### Example of Using Transactions in MongoDB

```javascript
const { MongoClient } = require('mongodb');

async function run() {
  const uri = "your_mongodb_connection_string";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const session = client.startSession();

    session.startTransaction();

    const usersCollection = client.db("exampleDB").collection("users");
    const ordersCollection = client.db("exampleDB").collection("orders");

    try {
      await usersCollection.updateOne(
        { _id: 1 },
        { $inc: { balance: -100 } },
        { session }
      );

      await ordersCollection.insertOne(
        {
          userId: 1,
          item: "item_name",
          price: 100
        },
        { session }
      );

      await session.commitTransaction();
      console.log("Transaction committed.");
    } catch (error) {
      await session.abortTransaction();
      console.error("Transaction aborted due to an error: ", error);
    } finally {
      session.endSession();
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```

### Key Steps in Using Transactions
1. **Start a Session:** Transactions are associated with sessions.
2. **Start a Transaction:** Begin the transaction using `startTransaction()`.
3. **Perform Operations:** Execute the necessary operations within the transaction.
4. **Commit or Abort:** Depending on the outcome, either commit the transaction using `commitTransaction()` or abort it using `abortTransaction()`.
5. **End the Session:** Clean up by ending the session.

Using transactions effectively ensures data integrity and consistency, particularly in scenarios involving multiple document updates or complex operations.

---
