function myFunction()
{
    var figura=document.getElementById("figury").value;
    document.getElementById("wypiszFigura").innerHTML=figura;











    if(figura=="Kwadrat")                   //KWADRAT
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj bok kwadratu:"));
        var obw=a*4;

        if(isNaN(a) || a<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód kwadratu o boku ${a} wynosi ${obw}.`);}

        if(wybor=="Pole"){                        //POLE
        var a=Number(prompt("Podaj bok kwadratu:"));                  
        var p=a*a;

        if(isNaN(a) || a<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole kwadratu o boku ${a} wynosi ${p}.`);
        }
    }
    
    
    
    
    
    
    
    
    if(figura=="Prostokat")                     //PROSTOKĄT
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj pierwszy bok prostokąta:"));
        var b=Number(prompt("Podaj drugi bok prostokąta:"));
        var obw=a+a+b+b;

        if(isNaN(a) || a<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód prostokąta o bokach ${a} i ${b} wynosi ${obw}.`);}

        if(wybor=="Pole"){                        //POLE
         var a=Number(prompt("Podaj pierwszy bok prostokąta:"));
         var b=Number(prompt("Podaj drugi bok prostokąta:"));                  
        var p=a*b;
        
        if(isNaN(a) || a<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole prostokąta o bokach ${a} i ${b} wynosi ${p}.`);
        }
    }
    
    
    
    
    
    
    
    
    
    
    if(figura=="Trojkat")                       //TRÓJKĄT
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj pierwszy bok trójkąta:"));
        var b=Number(prompt("Podaj drugi bok trójkąta:"));
        var c=Number(prompt("Podaj trzeci bok trójkąta:"));
        var obw=a+b+c;
        if(isNaN(a) || a<=0 || isNaN(b) || b<=0 || isNaN(c) || c<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód trójkąta o bokach ${a}, ${b} i ${c} wynosi ${obw}.`);
        }

        if(wybor=="Pole"){                        //POLE
        var a=Number(prompt("Podaj podstawę trójkąta:"));
        var h=Number(prompt("Podaj wysokość trójkąta:")); 
        var p=(a*h)/2;
        if(isNaN(a) || a<=0 || isNaN(h) || h<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole trójkąta o podstawie ${a} i wysokości ${h} wynosi ${p}.`);
        }
    }
    
    
    
    
    
    
    
    if(figura=="Romb")                          //ROMB
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj bok rombu:"));
        var obw=a*4;
        if(isNaN(a) || a<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód rombu o boku ${a} wynosi ${obw}.`);
        }

        if(wybor=="Pole"){                        //POLE
        var e=Number(prompt("Podaj pierwszą przekątną rombu:"));
        var f=Number(prompt("Podaj drugą przekątną rombu:"));
        var p=e*f;
        if(isNaN(e) || e<=0 || isNaN(f) || f<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole rombu o przekątnych ${e} i ${f} wynosi ${p}.`);
        }
    }
    
    
    
    
    
    
    
    
    
    
    if(figura=="Trapez")                    //TRAPEZ
        {
            var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj pierszy bok trapezu:"));
        var b=Number(prompt("Podaj drugi bok trapezu:"));
        var c=Number(prompt("Podaj trzeci bok trapezu:"));
        var d=Number(prompt("Podaj czwarty bok trapezu:"));
        var obw=a+b+c+d;
        if(isNaN(a) || a<=0 || isNaN(b) || b<=0 || isNaN(c) || c<=0 || isNaN(d) || d<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód trapezu o bokach ${a}, ${b}, ${c} i ${d} wynosi ${obw}.`);
        }
        
        if(wybor=="Pole"){                        //POLE
        var a=Number(prompt("Podaj pierszą podstawę trapezu:"));
        var b=Number(prompt("Podaj drugą podstawę trapezu:"));
        var h=Number(prompt("Podaj wysokość trapezu:"));
        var p=((a+b)*h)/2;
        if(isNaN(a) || a<=0 || isNaN(b) || b<=0 || isNaN(h) || h<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole trapezu o przekątnych ${a}, ${b} i wysokości ${h} wynosi ${p}.`);
        }
    }





    if(figura=="Rownoleglobok")                       //RÓWNOLEGŁOBOK
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var a=Number(prompt("Podaj pierwszy bok równoległoboku:"));
        var b=Number(prompt("Podaj drugi bok równoległoboku:"));
        var obw=a+a+b+b;
        if(isNaN(a) || a<=0 || isNaN(b) || b<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód równoległoboku o bokach ${a} i ${b} wynosi ${obw}.`);
        }

        if(wybor=="Pole"){                        //POLE
        var a=Number(prompt("Podaj podstawę równoległoboku:"));
        var h=Number(prompt("Podaj wysokość równoległoboku:")); 
        var p=a*h;
        if(isNaN(a) || a<=0 || isNaN(h) || h<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole równoległoboku o podstawie ${a} i wysokości ${h} wynosi ${p}.`);
        }
    }







    if(figura=="Kolo")                     //KOŁO
    {
        var wybor=document.getElementById("wybory").value;

        if(wybor=="Obwod"){                     //OBWÓD
        var r=Number(prompt("Podaj promień koła:"));
        var obw=2*3.14*r;

        if(isNaN(r) || r<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Obwód koła o promieniu ${r} wynosi ${obw}.`);}

        if(wybor=="Pole"){                        //POLE
         var r=Number(prompt("Podaj promień koła:"));                 
        var p=3.14*r*r;
        
        if(isNaN(r) || r<=0)
        {
            return alert("Nieprawidłowe dane.");
        }
            else return alert(`Pole koła o promieniu ${r} wynosi ${p}.`);
        }
    }


}
