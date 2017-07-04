var faker = require("faker");

var name = faker.name.findName();

console.log(name);

faker.locale = "pt_BR";

name = faker.commerce.productName();

console.log(name);