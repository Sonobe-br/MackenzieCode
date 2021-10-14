print('Digite os números encerrando com 0:')
numero = int(input())
maior = numero
menor = numero
soma = 0
while numero != 0:
    soma += numero
    if numero > maior:
        maior = numero
    elif numero < menor:
        menor = numero
    numero = int(input())
print ('Soma = ', soma)
print ('Maior = ', maior)
print ('Menor = ', menor)


"""Enunciado
Faremos o programa em Python para resolver o seguinte problema: 
Elabore um programa em Python que solicite um conjunto de números (encerrando a entrada de dados com 0) .  
Determine o menor e o  maior valor do conjunto e a soma dos valores  digitados.""" 
