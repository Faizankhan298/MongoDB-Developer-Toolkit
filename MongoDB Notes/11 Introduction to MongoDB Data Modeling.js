/*

LESSON 1: INTRODUCTION TO DATA MODELING

Purpose of data
modeling
Differences between the
traditional relational
data model and the
document model
Advantages of the
document model

What does my application do?
What data will I store?
How will users access this
data?
What data will be most
valuable to me?

Your tasks as well as
those of users
What your data looks
like
The relationships among
the data
The tooling you plan to
have
The access patterns that
might emerge


A good data
model can:
Make it easier to
manage data
Make queries more
efficient
Use less memory and
CPU
Reduce costs

Data that is accessed
together should be
stored together.

MongoDB implements a
flexible document data
model

Embedded document model
enables us to build complex
relationships among data

How your application will
use the data rather than
how it's stored in the
database

Store, query, and use
resources optimally

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: TYPES OF DATA RELATIONSHIPS 

Relationship types
One-to-one
One-to-many
any-to-many

Ways to model
relationships
Embedding
Referencing

Structure your data to
match the ways that
your application queries
and updates it

Data that is
accessed together
should be
stored together.



One-to-one
A relationship where a
data entity in one set is
connected to exactly one
data entity in another set

One-to-many
A relationship where a
data entity in one set is
connected to any number
of data entities in
another set

Many-to-many
A relationship where any
number of data entities
in one set are connected
to any number of data
entities in another set

Embedding
We take related data and
insert it into our
document

Referencing
We refer to documents in
another collection in our
document

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: MODELING DATA RELATIONSHIPS

one-to-one
one-to-many
many-to-many

Embedding
Referencing

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: EMBEDDING DATA IN DOCUMENTS

Embedding:
Used when you have
one-to-many or
many-to-many
relationships in the data
that's being stored

Embedding:
Avoids application joins
Provides better
performance for read
operations
Allows developers to
update related data in a
single write operation

WARNING:
Embedding data into a
single document can
create large documents.
Large documents have to
be read into memory in
full, which can result in
a slow application
performance for your
end user.


Continuously adding
data without limit
creates unbounded
documents
Unbounded documents
may exceed the BSON
document threshold of
16 MB.

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: REFERENCING DATA IN DOCUMENTS

References:
Save the id field of one
document in another
document as a link
between the two
Simple and sufficient
for most use cases

Using references is
called linking or data
normalization

Referencing:
No duplication of data
Smaller documents
Querying from multiple
documents costs extra
resources and impacts
read performance


Embedding
Single query to
retrieve data
Single operation to
update/delete data
Data duplication
Large documents

Referencing
No duplication
Smaller documents
Need to join data from
multiple documents

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 6: SCALING A DATA MODEL
Optimum efficiency of:
Query result times
Memory usage
CPU usage
Storage

take care of:
unbounded documents

Problems as the
array grows larger:
It will take up more
space in memory
May impact write
performance
Difficult to perform
pagination of comments
Maximum document size
of 16 MB will lead to
storage problems

Avoid:
More than the document
size limit of 16MB
Poor query performance
Poor write performance
Too much memory being
used

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 7: USING ATLAS TOOLS FOR SCHEMA HELP
Schema design patterns are guidelines that help developers plan,organize,and model data.


Schema anti-pattern
results:
Sub-optimal performance
Non-scalable solutions

Common schema
anti-patterns:
Massive arrays
Massive number of
collections
Bloated documents
Unnecessary indexes
Queries without indexes
Data that's accessed
together, but stored in
different collections


Data Explorer:
Free tier
Shows schema
anti-patterns
Collection and index
stats for each collection

Performance
Advisor:
MIO tier or higher
Analyzes the most active
collections
Recommends schema
improvements





*/