def area_triangulo(base,altura):
    area = (base * altura) /2
    return area

def entrada(valores):
    num = int(input(valores))
    return num

def main():
    base = entrada("Digite o valor da base:")
    altura = entrada("Digite o valor da altura:")
    area = area_triangulo(base,altura)
    print(area)

main() 
        
     
