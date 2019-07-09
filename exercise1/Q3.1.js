var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
    { Song_Name: "Evano Oruvan", Film: "Alai Payuthey",Music_Director:"A.R.Rahman",Singer:"Swarnalatha"},
    { Song_Name: "Roja Poonthottam", Film: "Kanukkul Nilavu",Music_Director:"Ilaiyaraaja",Singer:"Unnikrishnan,Anuradha Sriram"},
    { Song_Name: "Vennilavae Vennilavae Vinnaithaandi", Film: "Minsara Kanavu",Music_Director:"A.R.Rahman",Singer:"Hariharan,Sadhana Sargam"},
    { Song_Name: "Sollamal Thottu Chellum Thendral", Film: "Dheena",Music_Director:"Yuvan Shankar Raja",Singer:"Hariharan"},
    ];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
