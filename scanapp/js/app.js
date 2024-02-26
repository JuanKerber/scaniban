var isbn = require('node-isbn');
var jquery = require('jquery');
var filesaver = require('filesaverjs');
var tableexport = require('tableexport');
//var tableToCsv = require('node-table-to-csv');

var i=1;


var myLink = document.getElementById('button');
// 9783140464079
button.onclick = function msg() {
    var isbnid = document.getElementById("myISBN").value;

    isbn.provider(['google', 'openlibrary']).resolve(isbnid, function (err, book) {
        if (err) {
            console.log('Book not found', err);
        } else {
            console.log('Book found', book);

            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(1);
            var cell4 = row.insertCell(1);
            cell1.innerHTML = i;
            cell2.innerHTML = book.publisher;
            cell3.innerHTML = book.title;
            cell4.innerHTML = book.authors;

            i = i+1;
        }
    });
  }



dlbutton.onclick = function msg() {
    csv = tableToCsv(document.getElementById("myTable"));
    console.log(csv);
    //download("hello world", "hello.txt", "text/plain");
}