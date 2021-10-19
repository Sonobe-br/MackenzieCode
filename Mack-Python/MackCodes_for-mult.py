print('Enter a actual value from 1 to 10')
numberValue = int(input())

while numberValue < 0 or numberValue > 10:
    print('INVALID VALUE')
    numberValue = int(input())

for i in range(1, 11):
    print(f'{numberValue}x{i}={numberValue*i}')
