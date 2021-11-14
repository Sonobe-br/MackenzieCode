def area_quadrado(lado):
    return lado ** 2

def entrada():
    lado = float(input('Lado:'))
    return lado

def main():
    v1= entrada()
    v2= area_quadrado(v1)
    print("Área é = ", v2)

main()    
