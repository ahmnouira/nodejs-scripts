
var date = new Date();

var days = ['Monday', 'Thuesday' , 'Wednesday', 'Thursday' , 'Friday' ,'Saturday' ,'Sunday'];

// makes 'dayOfTheWeek' function accessible to other js files 
exports.dayOfTheWeek = function() {
    return days[date.getDay() -1 ] ;
};

exports.currentDateTime = function() {
    return Date(); 

};
