precoKwh = float(input('digite o preço do KW/h:'))
quantidadesKw = float(input('digite a quantidade de KW/h consumida no mês:'))
tipoConsumidor = int(input('Você é consumidor do tipo: 1 Residencial, 2 Comercial, 3 Industrial:'))
calculoConta = precoKwh * quantidadesKw
if tipoConsumidor == 1:
    print(f'Consumo do tipo Residencial R${calculoConta}')
elif tipoConsumidor == 2:
    print(f'Consumo do tipo Comercial R${calculoConta*1.05}')
elif tipoConsumidor == 3:
    print(f'Consumo do tipo Industrial R${calculoConta*1.15}')
else:
    print('Categoria do tipo invalido')
