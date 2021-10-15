medias = 0
quantidade = int(input())
if quantidade > 0:
    for i in range(quantidade):
        media = float(input())
        medias += media
        if media >= 6.0:
            print('PARABÉNS VOCÊ ESTÁ APROVADO')
    print(medias/quantidade)
else:
    print('NÃO HOUVE PROCESSAMENTO')
        
