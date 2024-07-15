/*
LESSON 1: INTRODUCTION TO MONGODB AGGREGATION

Aggregation

A way to filter, sort,
group, reshape, and
analyze data


An analysis and summary
of data

Stage
An aggregation operationl
performed on the data

Stage
A single operation on
the data

$match
Filters for data that
matches criteria
$group
Groups documents based
on criteria
$sort
Puts the documents in a
specified order


Aggregation Pipeline    
A series of stages
completed one at a time,
in order

Filtered
Sorted
Grouped
Transformed


db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: USING $MATCH AND $GROUP STAGES IN A MONGODB AGGREGATION PIPELINE

$match
Filter for documents
matching criteria
$group
Create a single document
for each distinct value

$match
Place as early as possible
in the pipeline so it can
use indexes
Reduces the number of
documents
Lessens processing
required

$group
Groups documents by a
group key
Output is one document
for each unique value of
the group key

db.zips.aggregate([
{   
   $match: { 
      state: "CA"
    }
},
{
   $group: {
      _id: "$city",
      totalZips: { $count : { } }
   }
}
])

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: USING $SORT AND $LIMIT STAGES IN A MONGODB AGGREGATION PIPELINE

$sort
Sorts all input documents
and passes them through
pipeline in sorted order

1: Ascending order
-1: Descending order

$limit
Limits the number of
documents that are
passed on to the next
aggregation stage

db.zips.aggregate([
{
  $sort: {
    pop: -1
  }
},
{
  $limit:  5
}
])

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: USING $PROJECT, $COUNT, AND $SET STAGES IN A MONGODB AGGREGATION PIPELINE

$project
{
    $project: {
        state:1, 
        zip:1,
        population:"$pop",
        _id:0
    }
}

$set    
{
    $set: {
        place: {
            $concat:["$city",",","$state"]
        },
        pop:10000
     }
  }

$count
{
  $count: "total_zips"
}

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: USING THE $OUT STAGE IN A MONGODB AGGREGATION PIPELINE

$out
Writes the documents
that are returned by an
aggregation pipeline into
a collection
Must be the last stage
Creates a new collection
if it does not already exist
If collection exists, $out
replaces the existing
collection with new data


order of stages in aggregation pipeline

$match

$group

$sort

$limit

$project

$count

$set

$out

*/