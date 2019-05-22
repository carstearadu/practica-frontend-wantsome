//First function

const capitlizeWords = (arrayOfWords) => {
    const capitalizePromise = new Promise((resolve, reject) => {
        const capitalizedWords= arrayOfWords.map((word) => {
            if(typeof word !== 'string') {
                reject(new Error('element is not a string'))
            }
            return word[0].toUpperCase() + word.slice(1, word.length);
        })
        resolve(capitalizedWords);
    })
    return capitalizePromise;
}

//second function

const sortCapitalizedWords = (capitalizedWords) => {
    const orderedWordsPromise = new Promise((resolve, reject) => {
        const orderedWords = capitalizedWords.sort();
        resolve(orderedWords);
    })
    return orderedWordsPromise;
}

const myDummyArray = ['it', 'works', 'very', 'well']
capitlizeWords(myDummyArray)
    .then(sortCapitalizedWords)
    .then(response => console.log(response))

