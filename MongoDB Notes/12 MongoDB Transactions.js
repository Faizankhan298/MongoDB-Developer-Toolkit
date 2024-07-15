/*

LESSON 1: INTRODUCTION TO ACID TRANSACTIONS

An ACID transaction
is a group of database
operations that must
happen together or
not at all, ensuring
database safety and
consistency

ACID Transactions
A group of database operations
that will be completed as a
unit or not at all


ACID Acronym

Atomicity
All operations will either
succeed or fail together

Consistency
All changes made by
operations are consistent
with database constraints

Isolation
Multiple transactions can happen
at the same time without affecting
the outcome of the other
transaction

Durability
All of the changes that are made
by operations in a transaction
will persist, no matter what

Use-cases for
ACID Transactions

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: ACID TRANSACTIONS IN MONGODB

Single and Multi-document
ACID transactions in MongoDB

When to use a Multi-document
transaction in MongoDB


Single-document
operations are already
atomic in MongoDB

updateOne()


Multi-document
Operations
Are not inherently atomic
Require extra steps to have
ACID properties

Multi-document
ACID Transaction
MongoDB "locks" resources
involved in a transaction

Incurs performance cost and
affects latency

Use multi-document transactions
as a precise tool

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: USING TRANSACTIONS IN MONGODB

Use a multi-document transaction
with a session in the shell
Abort a multi-document
transaction in the shell
Transfer money between two
accounts

Session
Used to group database operations
that are related to each other and
should be run together

A transaction has a maximum
runtime of less than one minute
after the first write
MongoServerError:
Transaction 1 has been aborted

.startSession()
.startTransaction()
.commitTransaction()
.abortTransaction()


Multi-Document Transactions
Using a Transaction: Video Code
Here is a recap of the code that's used to complete a multi-document transaction:

const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('< add database name here>').getCollection('<add collection name here>')

Add database operations like .updateOne() here

session.commitTransaction()

Aborting a Transaction
If you find yourself in a scenario that requires you to roll back database operations before a transaction is completed, you can abort the transaction. Doing so will roll back the database to its original state, before the transaction was initiated.


Aborting a Transaction: Video Code
Here is a recap of the code that's used to cancel a transaction before it completes:

const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('< add database name here>').getCollection('<add collection name here>')

Add database operations like .updateOne() here

session.abortTransaction()


*/