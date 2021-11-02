/* const teams = [['New York Mets'],['Texas Range']];
const modality = ['Baseball'];
const teamColors = [['blue, white, orange'],['red, blue, white']];
const hometown = ['United States of America'];
const players = [11];


let exibeListas = [teams, modality, teamColors, hometown, players];

const exibeListaCompleta = (itensDaLista) => {
    if (exibeListas[1].includes(itensDaLista)) {
        let indice = exibeListas[1].indexOf(itensDaLista)
        return exibeListas[1][indice] + ', is the modality chosen'
    } else {
        return 'O aluno não esta cadastrado'
    }
}
console.log(exibeListaCompleta('Baseball'));
document.write(`The modality chosen is ${modality},`);
document.write("<img src='./background-NYMets.jpg' alt='texasRange'>");


const myArray = [
    {
    'name':'New York Melts',
    'modality':'Baseball',
    'TeamColor':'Blue, White, Orange',
    'HomeTown':'Queens, New York, NY',
    'Players':'11 players'
    },

    {
    'name':'Texas Range',
    'modality':'Baseball',
    'TeamColor':'Blue, White, Red',
    'HomeTown':'Arlington, Texas, TX',
    'Players':'11 players'
    },

    {
    'name':'San Francisco Giants',
    'modality':'Baseball',
    'TeamColor':'black, ouro, metal gold, cream',
    'HomeTown':'San Francisco, CA',
    'Players':'11 players'
    }

]

document.write(JSON.stringify(myArray));

const myColors = myArray.filter((c) => {
    return c.color = 'blue';
});
document.getElementById(myArray).style.color = 'red';



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
console.table(team1,team2,team3);


const teams = [['New York Mets'],['Texas Range']];
const modality = ['Baseball'];
const teamColors = [['blue, white, orange'],['red, blue, white']];
const hometown = ['United States of America'];
const players = [11];

let exibeListas = [modality, teams, teamColors, hometown, players];

const exibeListaCompleta = (itensDaLista) => {
    if (exibeListas[3].includes(itensDaLista)) {
        let indice = exibeListas[3].indexOf(itensDaLista)
        return exibeListas[3][indice] + ', is the modality chosen'
    } else {
        return('Este item não esta cadastrado');
    }
}    
console.log(exibeListaCompleta('United States of America'));



const myArray = [['New York Mets','Texas Range'], ['Baseball'], ['blue, white, orange','red, blue, white'], ['United States of America'], [11]];

let exibeListas = [myArray];

const exibeListaCompleta = (itensDaLista) => {
    if (exibeListas[0].includes(itensDaLista)) {
        let indice = exibeListas[0].indexOf(itensDaLista)
        return exibeListas[0][indice] + ', is the modality chosen'
    } else {
        return('Este item não esta cadastrado');
    }
}    
console.log(exibeListaCompleta.indice[1]); */

 



