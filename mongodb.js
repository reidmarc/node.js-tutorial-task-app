// CRUD create read update delete

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to database");
        }

        const db = client.db(databaseName);
        // db.collection("users").insertOne(
        //     {
        //         name: "Marc",
        //         age: 36,
        //     },
        //     (error, result) => {
        //         if (error) {
        //             return console.log("Unable to insert user");
        //         }

        //         console.log(result.insertedId);
        //     }
        // );

        // db.collection("users").insertMany(
        //     [
        //         {
        //             name: "Jen",
        //             age: 28,
        //         },
        //         {
        //             name: "Gunther",
        //             age: 27,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) {
        //             return console.log("Unable to insert users");
        //         }

        //         console.log(result.insertedIds);
        //     }
        // );

        db.collection("tasks").insertMany(
            [
                { description: "Set Alarm", completed: true },
                { description: "Brush Teeth", completed: true },
                { description: "Shower", completed: false },
            ],
            (error, result) => {
                if (error) {
                    return console.log("Unable to insert tasks");
                }

                console.log(result.acknowledged);
                console.log(result.insertedIds);
            }
        );
    }
);
