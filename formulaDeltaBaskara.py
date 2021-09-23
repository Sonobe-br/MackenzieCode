import math

a = int(input())
if a == 0:
    print('Não é possivel dividir por zero')
else:
    b = int(input())
    c = int(input())
    delta = b**2 - 4*a*c
    print(delta)
    if delta < 0:
        print('a equação não terá valores reais')
    elif delta > 0:
        x1 = (-b + math.sqrt(delta)) /(2*a)
        x2 = (-b - math.sqrt(delta)) /(2*a)
        print(x1)
        print(x2)
    else:
        x1 = (-b + math.sqrt(delta))/2*a
        print(x1)
