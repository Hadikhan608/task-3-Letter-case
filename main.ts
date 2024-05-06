//name case: store your name in a variable and then print in to upper case, lower case & titlecase.
//for upper and lower case.
let myname = "Abdul Hadi Khan";
console.log(`Uppercase:${myname.toUpperCase()}`);
console.log(`Lowecase:${myname.toLowerCase()}`);

//title case
let words:string[] = myname.split(" ");
let titlecasemyname:string= "";
for (let i = 0; i < words.length; i++) {
    titlecasemyname += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() +" "};
    console.log(titlecasemyname);
    
