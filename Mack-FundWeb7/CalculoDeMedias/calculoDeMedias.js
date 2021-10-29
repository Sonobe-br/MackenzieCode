const notas = prompt('Digite as suas notas:');
let listaNotas = ['primeira','segunda','terceira','quarta'];
let notas = [0,0,0,0];
for(var i = 0; i < 4; i++){
    do {
        let res = prompt("Entre com a " + listaNotas[i] + " nota:");
        if (res != null && res != "") {
            notas[i] = parseFloat(res);
        }
    }while(res == null || res == "");
}
let media = notas[0] + notas[1] + notas[2] + notas[3];
media = media / 4;
alert("notas = " + notas + "\nmédia = " + media);
