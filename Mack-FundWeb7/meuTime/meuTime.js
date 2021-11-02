class Team {
    TeamName; 
    Modality;
    TeamColors;
    Hometown;
    Players; 
}

const team1 = new Team()
team1.TeamName = 'New York Mets';
team1.Modality = 'Baseball';
team1.TeamColors = 'Orange, Blue, White';
team1.Hometown = 'Queens, New York NY';
team1.Players = 11;

const team2 = new Team()
team2.TeamName = 'Texas Range';
team2.Modality = 'Baseball';
team2.TeamColors = 'Red, Blue, White';
team2.Hometown = 'Arlington, Texas TX';
team2.Players = 11;

const team3 = new Team()
team3.TeamName = 'San Francisco Giants';
team3.Modality = 'Baseball';
team3.TeamColors = 'Black, Metal Gold, Cream';
team3.Hometown = 'San Francisco, CA';
team3.Players = 11;


document.write('<br>');
document.write(JSON.stringify(team1));
document.write('<br>');
document.write(JSON.stringify(team2));
document.write('<br>');
document.write(JSON.stringify(team3));
console.log(team1, team2, team3);
/* console.table(team1,team2,team3); */

/* let cor = newArray("red");
document.getElementsById(resultadoCor).sytle.color='red'; */ 
/* Nestas últimas duas linhas houve uma tentativa de estilizar os textos impressos no navegador, mas
não consegui. */







