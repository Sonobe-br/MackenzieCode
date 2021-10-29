let res = prompt("Você mora na cidade de São Paulo?","Sim");
let listaDeCidades = ['São Paulo','Rio de Janeiro'];
let minhasCidades = [listaDeCidades];

function exibeMinhaCidade(nomeDasCidades){
    if(minhasCidades == listaDeCidades.indexOf[0]){
        document.write('<img src="./sao_paulo.jpg">');    
    } 
    else if(minhasCidadesCidades == listaDeCidades.indexOf[1]){
        document.write('<img src="./rio_janeiro.jpg">');
    }
    else if(minhasCidades == listaDeCidades.indexOf[0]){
        console.log('A sua cidade não esta cadastrada');
    }else{
        return;
    }

}
 */
/* function gerarCidade(){
    let estado = document.getElementById('estado').add;
    let cidade  = document.getElementById('cidade');
    let option = '';

    if(estado == ''){
        limpaCombo();
    }
    if(estado == 'São Paulo'){
        document.write('<img src="./sao_paulo.jpg">');
    }
    option = document.createElement('option');
        option.value = '1';
        option.text = 'Limeira';
        cidade.add(option);

        option = document.createElement('option');

        option.value = '2';
        option.text = 'Campinas';
        cidade.add(option);
} */

/* let city = ['São Paulo'];
let cityList = city;
let cityName = "";

const showMyCity = (cityName) => {
    if(cityName == cityList.indexOf[0]){
        document.write('<img src="./sao_paulo.jpg">');
        document.write('<br>Você é Paulistano<br> You are from Paulistano');   
    }
    
    if(city[0] !== cityList){
        document.write ('A sua cidade não esta cadastrada');
    }else{
        return;
    }
} */


//const cidade = ['São Paulo'];
//let listaDeCidade = [cidade]; /* deixei criado essa variável para caso eu precise adicionar novas cidades na minha array  */

/* const exibeMinhaCidade = (nomeDaCidade) => {
    if(listaDeCidade[0].includes(nomeDaCidade)){
        let i = listaDeCidade[0] .indexOf(nomeDaCidade);
        document.write('<img src="./sao_paulo.jpg">');
        document.write('Are you from Paulistano');   
    }else{
        return 'A sua cidade não esta cadastrada';
    }
}
console.log(exibeMinhaCidade('São Paulo')); */

/* let saoPaulo = true;
let rioDeJaneiro = true; */
/* 
function home(){
    if(saoPaulo === false){
        console.log('Você é paulistano');
    }else if(rioDeJaneiro === false){
        console.log('Você é carioca');
    }else{
        console.log('Então digite o nome da sua cidade');
    }
}
home(); */
    
    