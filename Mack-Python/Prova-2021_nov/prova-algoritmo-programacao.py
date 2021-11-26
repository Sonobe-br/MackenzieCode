''' Questão número 1 '''

resultado=[]
def dados(n):
    a=0
    b=1
    while a<n:
        resultado.append(a)
        a=b
        b=a+b
def main():
    dados(100)
    print(resultado)
main()

''' Questão número 2 '''

L1=[10,20,30]
L2=[40,50]
L1.append(L2)
print(L1)

''' Questão número 3 '''

for k in range(0,11,2):
    print(k)

x=0
while x <= 10:
    if x % 2 == 0:
        print(x)
    x=x+2

num = 0
for k in range(0,6):
    print(num)
    num = num + 2

x=0
while x <= 10:
    print(x)
    x=x+1

''' Questão número 4 '''

cont=1
res=0
x=2
n=4
while cont>=n:
    res*=res
    cont+=1
    print(res)
print(res)

''' Questão número 5 '''

print('Digite a sua idade:')
mediaIdadeFuncionario = int(input())

if mediaIdadeFuncionario >= 60:
    print('Você é o funcionário mais velho da empresa')    
elif mediaIdadeFuncionario < 60 and mediaIdadeFuncionario == mediaIdadeFuncionario > 20:
    print('Você é um funcionário jovem')    
elif mediaIdadeFuncionario <= 20 and mediaIdadeFuncionario > 16:
    print('Será contratado para a categoria estagiário')   
elif mediaIdadeFuncionario == 16:
    print('Será contratado para a categoria jovem aprendiz')
else:
  print('Opção invalida')
        
    
