# nodejs_basic_app_mongodb_2
Node JS basic app 2 with Mongo DB Connection
Connecting With Mongo DB

You should check first app before doing this to understand better: https://github.com/StudentTW/nodejs_basic_app_1

1.	Open https://mlab.com/
2.	Create your account 
3.	Verify your email address
4.	Click on Create New to create new MongoDB Instance 

5.	Select AWS as Cloud Provider

6.	Click on Single Node
8.	Select Sandbox as Standard Line

9.	Enter Database Name (Make sure you enter unique Db Name, as we are using shared Database)



10.	Click on Create new MongoDB deployement  

11.	Your Database is successfully Created

12.	Click on your database

13.	Navigate to user Tab

14.	Click on add database user

15.	Enter username and password (I entered admin as username and password)

16.	Now you have successfully created Mongo DB and User to access you DB.

17.	Copy the Database url displayed above

18.	The MongoDB URL is 

        mongodb://<dbuser>:<dbpassword>@ds137801.mlab.com:37801/sampledb1234

19.	Replace dbuser and dbpassword with you newly created db user details


20.	After replace it should be like

        mongodb://admin:admin@ds137801.mlab.com:37801/sampledb1234

21.	Open package.json from basic app project.
22.	Let’s add dependencies to use Mongodb
    We need Mongo dB & Mongoose Libraries.
23.	Add this 2 lines after “express”:”latest”
  
         "mongodb": "latest",
         "mongoose": "latest"


24.	Save the package.json after changes

25.	Open app.js

26.	Import the required libraries line 6 & 7

        var mongodb = require('mongodb');
        var mongoose = require('mongoose');

27.	 Add Mondb Url in line 15 (Add you link)

          var url='mongodb://admin:admin@ds137801.mlab.com:37801/sampledb1234';

28.	Use mongoose to connect to mongodb

        mongoose.connect(url);


29.	Check the connection status

        var db = mongoose.connection;
        db.on('error', function callback(err) {console.log("Database connection failed. Error: " + err);});
        db.once('open', function callback() {console.log("Database connection successful.");});


30.	Save the file after doing changes.

31.	Now the download the libraries using cmd
  
         “npm install” 

32.	Now execute the app using cmd

          “npm start”

33.	You will see

		Example app listening at http://0.0.0.0:8080
        Database connection successful.




