def maximo(n1,n2):
    if n1 > n2:
        return n1
    else:
        return n2
    
def entrada():
    num = int(input('Digite um número:'))
    return num 

def main():
    x = entrada()
    y = entrada()
    print(maximo(x,y))

main()
      