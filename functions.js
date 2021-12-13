function printWelcomeMessage() {
    var date = new Date();
    var hour = date.getHours();
    msg = "";
    if(hour >= 7 && hour < 12) {
        msg = "Good Morning!";
    }
    else if(hour >= 12 && hour <= 5) {
        msg = "Good Afternoon!";
    }
    else{
        msg = "Good Evening!";
    }
    document.getElementById("time").innerHTML = msg;
}

printWelcomeMessage();