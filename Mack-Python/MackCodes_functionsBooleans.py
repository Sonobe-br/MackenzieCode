def multiplos(m1,m2):
    if m1%m2 == 0:
        return True
    else:
        return False
    
def entradas():
    num = int(input('Digite um número: '))
    return num

def main():
    a = entradas()
    b = entradas()
    print(multiplos(a,b))

main()
     
    
