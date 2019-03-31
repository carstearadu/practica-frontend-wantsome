//November 15 2014 -> is it weekend?

var isDateInWeekend = function(date){
    var parsedDate = new Date(date);
    var indexOfDay = parsedDate.getDay();
    return ([5,6].includes(indexOfDay));
}

console.log(isDateInWeekend('Mar 30 2019'))