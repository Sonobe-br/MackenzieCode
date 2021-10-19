print('Enter a positive value')
integerValue = int(input())

while integerValue == 0 or integerValue < 0:
    print('VALOR INVÁLIDO')
    break
for value in range(0,1,10):
    print(integerValue, end='')
    answer = value/integerValue
    print(answer)


