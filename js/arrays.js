let hobbiesArray = ['reading', 'movies', 'woodworking'];

function printHobbies(inArray) {
    console.log(`I like ${inArray.length} things:`);
    for(let index = 0; index < inArray.length;index++) {
            let element = inArray[index];
            console.log(`I like` + element);

    }
}
printHobbies(hobbiesArray);

