// Import the ORM and connection objects
var orm = require("./orm-test.js/index.js");
// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require("./connection.js");

orm.selectAll("burgers", function(data){
    console.log("orm.selectAll test...\n\n");
    console.log('__________Burger Menu__________\n');

    for(var i = 0; i < data.length; i++) {
        console.log("burger ID = " + data[i].id);
        console.log("Burger name = " + data[i].burger_name);
        console.log("available = " + data[i].devoured);

        console.log('+++++++++++++++++++++++++++++++++++++++');

    }
});

// Insert a single entry into the database
orm.insertOne('burgers', 
	         ['burger_name', 'devoured'], 
	         ['Success Story Mushroom Double-Stack Burger', false], 
	         function (data) {
	console.log('\n\norm.insertOne test...\n\n');

	console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
});

// Update a single entry in the database
orm.updateOne('burgers', {devoured: true}, 'id = 7', function (data) {
	console.log('\n\norm.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();