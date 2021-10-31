const myCity = prompt("Você mora na cidade de São Paulo?","Sim");
if(myCity != null && myCity.toLowerCase() == "sim")
    document.write("<img src='./sao_paulo.jpg' alt='São Paulo'>");  
else
    document.write("<img src='./florida.jpg' alt='Florida'>");
   