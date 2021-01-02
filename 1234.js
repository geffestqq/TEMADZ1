function test(num1,num2,zn)
{
  
  switch(zn)
  { 
    case '+': return num1 + num2       
    case '-':return num1 - num2
    case '/':
      
      if(num2 === 0)
      {
        return ('ошибка')
      } 
      else
      {
        return num1 / num2
      }
    case '*':return num1 * num2   
  }
}

try{
  console.log(test(1,1, '/'));
}
catch (e){
  return ('ошибка')
}
  


