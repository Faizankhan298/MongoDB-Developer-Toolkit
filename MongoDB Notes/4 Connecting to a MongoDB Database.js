/*
LESSON 1: USING MONGODB CONNECTION STRINGS

How to use the connection string
Where to locate the connection string What the string consists of-

Shell
Compass
Applications

Standard format - Used to connect to standalone clusters, replica sets, or sharded clusters

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 2: CONNECTING TO A MONGODB ATLAS CLUSTER WITH THE SHELL

DNS seed list format    
Provides a DNS server list to our connection string Gives more flexibility of deployment Ability to change servers in rotation without
reconfiguring clients

mongodb+srv://<username>:<password>@cluster@.usqsf.mongodb.net/?retryWrites=true&w=majority

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 3: CONNECTING TO A MONGODB ATLAS CLUSTER WITH COMPASS

Located the MongoDB Shell connection string Connected to theMongoDB Shell by using the connection string Used the Node.js REPL environment
to create JavaScript expressions

Connect to the MongoDB Shell Node.js REPL environment
then you can use 
JavaScript
Variables
Functions
Conditionals
Loops
Control flow statements

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 4: CONNECTING TO A MONGODB ATLAS CLUSTER FROM AN APPLICATION

MongoDB Drivers
Driver
documentation

MongoDB drivers connect our application to our database by using a connection string

MongoDB drivers connect an application to our database by using the programming language of our choice.

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------

LESSON 5: TROUBLESHOOTING MONGODB ATLAS CONNECTION ERRORS

Network access
errors
User authentication
errors

User authentication protects access to our data.

For user network access errors, use the Atlas dashboard to add your IP address to the Network Access tab.

MongoDB doesn't autofill your password field in the connection string, so make sure the password is populated and correct before connecting.  

Compass is a graphical user interface for our databases


*/
