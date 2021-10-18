'''Programa para Séries Numéricas'''

sum = 0
number = 1
for den in range(1,51):
    sum += number/den
    if den!=50:
        print(f'{number}/{den} + ', end = '')
    else:
        print(f'{number}/{den} = ', end = '')
    number+=2
print(sum)
    
