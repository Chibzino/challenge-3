const firstDolphin = 96;
const secondDolphin = 108;
const thirdDolphin = 89;

const averageDolphin = (firstDolphin + secondDolphin + thirdDolphin)/3;
console.log(averageDolphin);

const firstKoalas = 88;
const secondKoalas = 91;
const thirdKoalas = 110;

const averageKoalas = (firstKoalas + secondKoalas + thirdKoalas)/3;
console.log(averageKoalas);

if (averageDolphin > averageKoalas) {
    console.log("Dolphin is the winner");
}

else if( averageKoalas > averageDolphin) {
    console.log("Koalas is the winner");
}

else if( averageKoalas == averageDolphin) {
    console.log("Koalas is the winner");
}

else{
    console.log("Both have the same average score");
}


// A team wins only if a team's score is higer than the other team and is not less than 100
if ((averageDolphin > averageKoalas) && (averageDolphin >= 100)) {
    console.log("Dolphin is the winner of the test");
}

else if((averageKoalas > averageDolphin) && averageKoalas >= 100 ){
    console.log("Koalas is the winner of the test");
}

else{
    console.log("There is no winner");
}

//A draw only happens when both team have the score greater or equal to 100

if ((averageDolphin === averageKoalas) && ((averageDolphin && averageKoalas) >= 100)) {
    console.log("Both have equal scores");
}

else{
    console.log("There's no winner and no draw");
}

