const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

//1* connecting with the database

server = express();
server.use(bodyparser.urlencoded({extended:true}));

var myDB = mysql.createConnection({
    user: "myDBuser",
    host: "127.0.0.1",
    database: "myDBuser",
});

myDB.connect((err) => {
    if (err) console.log(err);
    else console.log("connected");
})

server.listen(3000);

//2* creating tables directly in the module


// let createProducts = `CREATE TABLE products(
//     product_id int auto_increment,
//     product_url varchar(255) not null,
//     product_name varchar(255) not null,
//     PRIMARY KEY (product_id)
//     )`;
// let createDescriptions = `CREATE TABLE productDescription(
//      description_id int auto_increment,
//      product_id int not null,
//      product_breif_description TEXT not null,
//      product_description TEXT not null,
//      product_img varchar(255) not null,
//      product_link varchar(255) not null,
//      PRIMARY KEY (description_id),
//      FOREIGN KEY (product_id) REFERENCES products(product_id)
//     )`;
// let createPrice = `CREATE TABLE productPrice(
//     price_id int auto_increment,
//     description_id int not null,
//     starting_price varchar(255) not null,
//     price_range varchar(255) not null,
//     PRIMARY KEY (price_id),
//     FOREIGN KEY (description_id) REFERENCES productDescription(description_id)
//    )`;   
// let createUser = `CREATE TABLE user(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_password varchar(255) not null,
//     PRIMARY KEY (user_id)
//    )`;      
// let createOrder =  `CREATE TABLE orders(
//     order_id int auto_increment,
//     productid int not null,
//     user_id int not null,
//     PRIMARY KEY (order_id),
//     FOREIGN KEY (user_id) REFERENCES user(user_id)
//    )`;       
// myDB.query(createProducts, (err, results, fields) => {
//     if(err) console.log(err);
// });
// myDB.query(createDescriptions, (err, results, fields) => {
//     if(err) console.log(err);
// });
// myDB.query(createPrice, (err, results, fields) => {
//     if(err) console.log(err);
// });
// myDB.query(createUser, (err, results, fields) => {
//     if(err) console.log(err);
// });
// myDB.query(createOrder, (err, results, fields) => {
//     if(err) console.log(err);
// });


// creating table using a request service


server.get("/install", (req, res) => {

    let createProducts = `CREATE TABLE products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
        )`;
    let createDescriptions = `CREATE TABLE productDescription(
         description_id int auto_increment,
         product_id int not null,
         product_breif_description TEXT not null,
         product_description TEXT not null,
         product_img varchar(255) not null,
         product_link varchar(255) not null,
         PRIMARY KEY (description_id),
         FOREIGN KEY (product_id) REFERENCES products(product_id)
        )`;
    let createPrice = `CREATE TABLE productPrice(
        price_id int auto_increment,
        description_id int not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (description_id) REFERENCES productDescription(description_id)
       )`;
    let createUser = `CREATE TABLE user(
        user_id int auto_increment,
        user_name varchar(255) not null,
        user_password varchar(255) not null,
        PRIMARY KEY (user_id)
       )`;
    let createOrder = `CREATE TABLE orders(
        order_id int auto_increment,
        productid int not null,
        user_id int not null,
        PRIMARY KEY (order_id),
        FOREIGN KEY (user_id) REFERENCES user(user_id)
       )`;

    myDB.query(createProducts, (err, results, fields) => {
        if (err) console.log(err);
    });
    myDB.query(createDescriptions, (err, results, fields) => {
        if (err) console.log(err);
    });
    myDB.query(createPrice, (err, results, fields) => {
        if (err) console.log(err);
    });
    myDB.query(createUser, (err, results, fields) => {
        if (err) console.log(err);
    });
    myDB.query(createOrder, (err, results, fields) => {
        if (err) console.log(err);
    });


});

server.post("/addproduct", (req, res) => {

    let id = req.body.product_id;
    let url = req.body.product_url;
    let name = req.body.product_name;

    console.log(id + "\n" + url + "\n" + name );
    let addproducts = "INSERT INTO products (product_id, product_url, product_name) VALUES('" + id +"','" + url +"','"+ name +"' )" ;

    myDB.query(addproducts, (err, result) => {
        if(err) console.log(err);
    });
});

