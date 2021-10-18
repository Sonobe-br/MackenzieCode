'''Série Fibonnaci com sequência de 20 números'''

number1 = 1
number2 = 1

for i in range(20):
    print(number1, end=' ')
    value = number1 + number2
    number1 = number2
    number2 = value 
