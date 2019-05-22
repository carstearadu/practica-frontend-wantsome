// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
    ];
    
  // let allCats =  code
  // let allHumans =  code
  // let allFemales =  code
  // let totalOfAllAges =  code
  // let averageAgeOfCats =  code
  // let averageAgeOfHumans = code
  // let avgLengthOfNames = code
  
  const allCats = arr.filter(item => item.species === 'cat')
  console.log(allCats)

  const allHumans = arr.filter(item => item.species === 'human')
  console.log(allHumans)

  const allFemales = arr.filter(item => item.sex ='f')
  console.log(allFemales)

  const totalOfAllAges = arr.reduce((accumulator, item) => accumulator + item.age, 0)
  console.log(totalOfAllAges)

  const averageAgeOfCats = allCats.reduce((accumulator, item) => accumulator + item.age, 0) / allCats.length;
  console.log(averageAgeOfCats)

  const averageAgeOfHumans = allHumans.reduce((accumulator, item) => accumulator + item.age, 0) / allHumans.length;
  console.log(averageAgeOfHumans)

  const avgLengthOfNames = arr.reduce((accumulator, item) => accumulator + item.name.length, 0) / arr.length
  console.log(avgLengthOfNames)