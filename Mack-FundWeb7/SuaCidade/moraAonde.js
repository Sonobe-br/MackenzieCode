alert("Seja bem vindo a minha página | Welcome to my page");
prompt('Digite o nome da cidade: São Paulo');

const city = ['São Paulo'];
let cityList = city; /* deixei criado essa variável para caso eu precise adicionar novas cidades 
na minha array. Dessa forma escrita deixo o código mais dinâmico.*/

const showMyCity = (cityName) => {
    if(city[0].includes(cityName)){
        let i = city[0].indexOf(cityList);
        document.write('<img src="./sao_paulo.jpg">');
        document.write('<br>Você é Paulistano<br> You are from Paulistano');   
    }else if(cityName !== cityList){
        document.write ('A sua cidade não esta cadastrada');
    }else{
        return;
    }
}

