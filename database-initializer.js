

let users=[{ username: "gurnoor", password: "qwertyuiop", followedUsers: { "amrit": "amrit"} }, { username: "amrit", password: "qwertyuiop", followedUsers: { "gurnoor": "gurnoor"} } ]

//"artist":"Arthur Bozonnet","attack":3,"cardClass":"MAGE","health":2,"name":"Fallen Hero","rarity":"RARE"
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let db;

MongoClient.connect("mongodb://localhost:27017/", function(err, client) {
  if(err) throw err;

  db = client.db('project');
  db.dropCollection("movies", function(err, result){
	  if(err){
			console.log("Error dropping collection. Likely case: collection did not exist (don't worry unless you get other errors...)")
		}else{
				console.log("Cleared movie collection.");
		}

		db.collection("movies").insertMany(movies, function(err, result){
			if(err) throw err;
			console.log("Successfuly inserted " + result.insertedCount + " movies.")
			process.exit();
		})
  });
  	db.dropCollection("users", function(err, result){
		if(err){
		  console.log("Error dropping collection. Likely case: collection did not exist (don't worry unless you get other errors...)")
	  	}else{
			  console.log("Cleared users collection.");
		  }
		  
		  db.collection("users").insertMany(users, function(err, result){
			if(err) throw err;
			console.log("Successfuly inserted " + result.insertedCount + " users.")
			process.exit();
		})
	});
	db.dropCollection("reviews", function(err, result){
		if(err){
		  console.log("Error dropping collection. Likely case: collection did not exist (don't worry unless you get other errors...)")
	  	}else{
			  console.log("Cleared reviews collection.");
	  	}
	});
});