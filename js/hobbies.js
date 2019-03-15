const hobbiesArray = [
{name:'reading', lengthInYearsAtHobby: 61},
{name:'movies', lengthInYearsAtHobby: 53},
{name:`woodworking`, lengthInYearsAtHobby: 40}
]
function printHobby (hobby) {
console.log(`${hobby.name}`);

}

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}
for (let hobby of hobbiesArray) {
printHobbyInfo(hobby);
}