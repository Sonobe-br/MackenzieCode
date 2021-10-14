while True:
    print('\nSoma............+'+
          '\nSubtração.......-'+
          '\nMultiplicação...*'+
          '\nDivisão........./'+
          '\nSair............0')
    opcao = input()
    if opcao == '0':
        break
    print('Digite 5 números:')
    numero1 = float(input())
    numero2 = float(input())
    if opcao == '+':
        print('Soma = ', numero1 + numero2)
    elif opcao == '-':
        print('Subtração = ', numero1 - numero2)
    elif opcao == '*':
        print('Multiplicação = ', numero1 * numero2)
    elif opcao == '/':
        if numero2 != 0:
            print('Divisão = ', numero1 / numero2)
        else:
            print('não há divisão por zero')   
    
    else:
        print('opção inválida')
print('Espero que tenha gostado, obrigado!')





