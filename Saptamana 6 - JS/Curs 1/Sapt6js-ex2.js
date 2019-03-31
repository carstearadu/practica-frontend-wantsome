// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: 'Tesla',
    wheels: 4
  }
  
  car['name']= 'Mercedes'
  
  console.log(car)
  
  delete car['name']
  
  console.log(car)
  
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  
  myObject = {
    prop1: 1,
    prop2: 2,
    prop3: 'a',
    prop4: 'b'
  }
  
  var myVariable = Object.keys(myObject)
  
  console.log(myVariable)
  
  var myVariable2 = myVariable.join(', ')
  
  var myVariable3= myVariable2.toUpperCase()
  
  var myVariable4= myVariable3.toLowerCase()
  
  var myVariable5 = myVariable4 +' '+'reprezinta ceva'
  
  console.log(myVariable5)
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  
  var secondObject = {
    proUnu: '24',
    proDoi: 'de ani',
    result: function (){
      console.log(this.proUnu + ' ' + this.proDoi)
    }
  }
  
  secondObject.result()
  
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  myCar = {
    myWheels: 4,
    myDoors: 4,
  }
  
  myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.