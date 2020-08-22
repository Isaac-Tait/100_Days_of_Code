
function userInput(minutes, seconds) {
    minutes = parseInt(document.getElementById('minutes-time').value); 
    seconds = parseInt(document.getElementById('seconds-time').value);
    
    mileTime = ((minutes * 60) + seconds);
    
    sec = mileTime > 60 ? (mileTime * 1.609344) : "You must enter a valid time";
    
    var formatMinutes = new Date(sec*1000).toUTCString().split(" ")[4];

    //alert("Your mile split time is " +formatMinutes);

    document.getElementById('result').innerHTML = formatMinutes;
};