var express = require('express');
var app = express();
var server = require("http").Server(app);
var mysql = require("mysql");
var io = require("socket.io")(server);


server.listen(process.env.PORT|| 5000);
// var conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "chemmist"
// });

// conn.connect(function (err) {
//     //nếu có nỗi thì in ra
//     if (err) throw err.stack;
//     //nếu thành công
//     console.log('ket noi thanh cong');
//     var sql = "SELECT * FROM tbl_users";
//     conn.query(sql, function (err, results) {
//         if (err) throw err;
//         console.log(results);
//     })

// });

app.get('/public/home.html', function (req, res) {
    res.send('Hello world');
    // var sql = "SELECT * FROM tbl_users";
    // conn.query(sql, function (err, results) {
    //     if (err) throw err;
    //     res.send(results);
    // });
});

io.on("connection", function (socket) {
    console.log("Co nguoi vua ket noi " + socket.id);
    socket.on("client-to-server", function (data) {
        console.log("Du lieu vua nhan dc: " + data);
    });
});