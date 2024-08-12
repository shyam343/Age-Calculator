
function Agecalculator()
{
    var birthdate=document.getElementById('birthdate').value;
    var today=new Date();
    var birthdateObj=new Date(birthdate);
    var age=today.getFullYear()-birthdateObj.getFullYear();
    
    if(today.getMonth()<birthdateObj.getMonth()||
       today.getMonth()===birthdateObj.getMonth() &&
       today.getDate()<birthdateObj.getDate() )
    {
        age--;
    }
    return document.getElementById('result').innerHTML="Your Age is : "+ age +"Years Old";
   
    
}

