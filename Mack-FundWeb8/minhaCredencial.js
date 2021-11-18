class Credencial{
    nome;
    sobrenome;
    idade;
    sexo;
    cidade;
    curso;
    universidade;    
}

const credencial1 = new Credencial();
credencial1.nome = 'Daniel';
credencial1.sobrenome = 'Sonobe Silveira';
credencial1.idade = 43 + ' anos de idade,';
credencial1.sexo = 'Masculino';
credencial1.cidade = 'São Paulo/SP';
credencial1.curso = 'Análise e Desenvolvimento de Sistemas';
credencial1.universidade = 'Universidade Presbiteriana Mackenzie';

alert(`Olá meu nome é ${credencial1.nome} ${credencial1.sobrenome}, tenho ${credencial1.idade} sexo ${credencial1.sexo}, morador da cidade de ${credencial1.cidade}, estou cursando ${credencial1.curso} na ${credencial1.universidade}.`);
console.log(credencial1); //concatei as variáveis no método template strings.

