/* Q9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If the programs are straightforward at this point, just add your name and the current date at the top 
of each program file. Then, write one sentence describing what the program does.*/

let personName5 = "Asharib";

let message2 = `Hello ${personName5}, would you like to learn some typescript today?`;

console.log(message2);  //this shows person name and print a message 




let favoriteNumber: number = 10
console.log(`My fav number is ${favoriteNumber}`);   //this program shows fav number and print a message



/* Q10 Names: Store the names of a few of your friends in an array called names. 
Print each person’s name by accessing each element in the list, one at a time.*/

let Names: string[] = ["Huda" , "Bakhtawar" , "Ambreen" , "Zunnar"];

Names.forEach(friendName => console.log(friendName));


/* Q11 Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a 
message to them. The message should be the same for each person, but personalized with their name.*/

let Names1: string[] = ["Huda" , "Bakhtawar" , "Ambreen" , "Zunnar"];

Names1.forEach(friendName => (console.log(`Hello ${friendName}, would you like to some typescript today.`)));