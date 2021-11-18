def menu(): 
    print("(1) Cadastrar um amigo (no final da lista)")
    print("(2) Mostrar o nome de todos os amigos")
    print("(3) Cadastrar um amigo (no início da lista)")
    print("(4) Remover um nome")
    print("(5) Substituir um nome")
    print("(6) Mostrar o número total de amigos cadastrados")
    print("(7) Colocar os nomes dos amigos em ordem alfabética")
    print("(8) Sair do programa")
 
    operacao = int(input("Opção Selecionada:"))
    while operacao < 1 or operacao > 8:
        operacao = int(input("Opção Selecionada:"))
    return operacao

def inserir_amigo(amigo):
    nome = input("Nome:")
    amigo.append(nome) 

def mostrar_nomes(amigo):
    print(amigo)
    
def inserir_amigo_final(amigo): 
    nome = input("Digite um nome: ")
    amigo.insert(0,nome)
    
def remover_amigo(amigo):
    nome = input("Digite o nome a ser removido: ")
    for i in range(0, len(amigo)): 
        if amigo[i] == nome:
            posicao = i
            break 
    del amigo[posicao]

def substituir_nome(amigo):
    nome = input("Digite o nome a ser substituido: ")
    novonome = input("Digite o novo nome: ")
    for i in range(0, len(amigo)):
        if amigo[i] == nome:
            amigo[i] = novonome
            break
            
def total_cadastrado(amigo):
    print('Total de amigos = %d' %len(amigo))

def ordenar_amigos(amigo):
    amigo.sort()
    mostrar_nomes(amigo)       

def main():
    amigo = []
    while True:
        operacao = menu()
        if operacao == 8:
            break
        
        
        if operacao == 1:
            inserir_amigo(amigo)
        elif operacao == 2:
            mostrar_nomes(amigo)
        elif operacao == 3:
            inserir_amigo_final(amigo)
        elif operacao == 4:
            remover_amigo(amigo)
        elif operacao == 5:
            substituir_nome(amigo)
        elif operacao == 6:
            total_cadastrado(amigo)
        elif operacao == 7:
            ordenar_amigos(amigo)

main()

       
            
                 
    
    
