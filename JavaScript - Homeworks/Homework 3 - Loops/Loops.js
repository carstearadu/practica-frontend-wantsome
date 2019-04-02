/*1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for/*/

//Varianta cu For

for(var i=0; i <= 20; i++){                                     //Declarat variabila i<=20, folosit for avand conditia ca atat timp cat i <=20, i primeste i+1
    if(i%2 !=0){                                                //Verific restul impartirii la 2 => daca e diferit de 0 atunci i e impar, 
        console.log(i + ' '+'este impar')
    }
    else{
        console.log(i + ' ' + 'este par')                       //Daca nu e par, e impar.
    }
}

//Varianta cu While

var i=0;                                                        //Declarat variabila i=0
while(i <=20){                                                  //Cat timp i<=20
    if(i%2 !=0){                                                //Acelasi bloc de cod ca mai sus.
        console.log(i + ' ' +'este impar')
    }
    else{
        console.log(i +' '+'este par')
    }
    i++;                                                        //Incrementeaza i pana la 20.
}


/*2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
 Scrieti functia in doua variante: while si for*/

//Varianta cu For

 for(var i = 0; i <= 10; i++){                                  //Declarat variabila i=0,intr-un for cu o conditie ca i<=10
     console.log(i + '*9' + '=' + i*9)                          //Cat timp i<=10, afisare i=i+1*9 - de la 1 la 10 datorita incrementarii
 }

//Varianta cu While

var i = 0;                                                          //La fel ca mai sus doar ca variabila a fost declarata inaintea statementului
while(i <= 10){
    console.log(i + '*9' + '=' + i*9)
    i++;
}


/*3. !!! Am crezut ca asta se cere la exercitiul anterior (╯°□°）╯︵ ┻━┻ !!!
 Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.*/

//Varianta cu For

for(var i = 0; i <= 10; i++){                                       //La fel ca mai sus...
    console.log('1*' + i + '=' + i)                                     
}

//Varianta cu While

var i = 0;
while(i <= 10){
    console.log('1*' + i + '=' + i)
    i++;
}


/*4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). */

//Doar cu While

var puncte = function(punctaj) {                                                                //functia de la Ex2 din tema anterioara.
    if(punctaj > 0 && punctaj<= 3){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este E.'
    }
    else if(punctaj > 3 && punctaj <= 6){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este D.'
    }
    else if(punctaj > 6 && punctaj <= 8){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este B.'
    }
    else if(punctaj === 9){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este A.'
    }
    else if(punctaj === 10){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este A+.'
    }
    else{
        return 'Punctajul introdus este invalid.'
    }
  }

var i = 0;                                                                                      //Declarat o alta variabila cu valoare 0, de unde porneste notarea
while(i <= 10){                                                                                 //Cat timp nota e cuprinsa intre 0 si 10                                         
    console.log(puncte(i))                                                                      //Afiseaza functia 'puncte' luand ca argument variabila i declarata mai sus
    i++;                                                                                        //Incrementeaza i pentru a trece prin toate cele 10 note.
}


