//name case: store your name in a variable and then print in to upper case, lower case & titlecase.
//for upper and lower case.
var myname = "Abdul Hadi Khan";
console.log("Uppercase:".concat(myname.toUpperCase()));
console.log("Lowecase:".concat(myname.toLowerCase()));
//title case
var words = myname.split(" ");
var titlecasemyname = "";
for (var i = 0; i < words.length; i++) {
    titlecasemyname += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecasemyname);
