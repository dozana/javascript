/*

CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team,t using the tes data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

*/

const dolpinsTeam1 = 96;
const dolpinsTeam2 = 108;
const dolpinsTeam3 = 89;

const koalasTeam1 = 88;
const koalasTeam2 = 91;
const koalasTeam3 = 110;

const scoreDolphins = (dolpinsTeam1 + dolpinsTeam2 + dolpinsTeam3) / 3;
const scoreKoalas = (koalasTeam1 + koalasTeam2 + koalasTeam3) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if(scoreDolphins < scoreKoalas && scoreDolphins >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy.");
}