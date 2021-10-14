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
