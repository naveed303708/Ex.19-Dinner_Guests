
let Guest_List :string[] = ['jahanzain','ali','salman','mehran'];
// for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'imran khan' ;
let new_Guest :string = 'kamran tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// console.log(`Mr.${absent_Guest}is not coming to the party.`);
// console.log('Good News! we find big Table so we are inviting 3 more guests.')

// array me 3 guest add kiye hain.
Guest_List.unshift('Jahanzaib') ;
Guest_List.splice(2 , 0 , 'Mehran') ;
Guest_List.push('Salman') ;

// yahan per main 6 guest ke array ko print kraya he.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// sorry message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

// yahan per mein ny guest remove kiye hain.
while(Guest_List.length > 2){
let remove_Guest = Guest_List.pop();
// console.log(`sorry Mr.${remove_Guest}, you are not invited for Dinner.`);
}

// hamare bachy huwe 2 invite guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
// }

// Mein ny sare guest array se remove kar diya.
    Guest_List.splice(0, 2);
    console.log(Guest_List);


    // Exercise 19

    //print a message indicating the number of people you are inviting to dinner.

    console.log(`Total number of Guest Are: ${Guest_List.length}`);