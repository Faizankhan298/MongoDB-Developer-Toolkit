/*

LESSON 1: USING RELEVANCE-BASED SEARCH AND SEARCH INDEXES

Use cases for Atlas
Search
Relevance-based search
vs. database search
Search index
vs. database index
Components of a
search index


Relevance-Based Search
Surface records based ona search term
(Like Atlas then searches for all records that contain atlas)

Search Indexes
Specify how records are
referenced for relevance-
based search

Database Indexes
Used by developers and
database administrators
to make their frequent
database queries easier
and more efficient

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: CREATING A SEARCH INDEX WITH DYNAMIC MAPPING

Create search index
Set option for
dynamic mapping
Test with a query

Search Index
Defines how a search
should be performed
Database Index
Makes database queries
more efficient

Search Index with
Dynamic Mapping
All fields indexed (except
booleans, objectlds and
timestamps)

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: CREATING A SEARCH INDEX WITH STATIC FIELD MAPPING

Static Indexing
The fields being queried
are always the same

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: USING $SEARCH AND COMPOUND OPERATORS

$search , compound operators in aggregation pipeline

$search stage

must - all terms must be present
must not - all terms must not be present
should - at least one term must be present
filter - filter the results based on the search query

$search {
  "compound": {
    "must": [{
      "text": {
        "query": "field",
        "path": "habitat"
      }
    }],
    "should": [{
      "range": {
        "gte": 45,
        "path": "wingspan_cm",
        "score": {"constant": {"value": 5}}
      }
    }]
  }
}

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: GROUP SEARCH RESULTS BY USING FACETS

Facets
Buckets that we group
our search results into

Numbers
Dates
Strings

$searchMeta
Allows us to see the
facets and how many
results are in each bucket

Updated field mappings
to include facet fields
Used $searchMeta to
categorize results

$searchMeta: {
    "facet": {
        "operator": {
            "text": {
            "query": ["Northern Cardinal"],
            "path": "common_name"
            }
        },
        "facets": {
            "sightingWeekFacet": {
                "type": "date",
                "path": "sighting",
                "boundaries": [ISODate("2022-01-01"), 
                    ISODate("2022-01-08"),
                    ISODate("2022-01-15"),
                    ISODate("2022-01-22")],
                "default" : "other"
            }
        }
    }
}


*/