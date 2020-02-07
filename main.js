var intervalId = null;
var counter = 0;

function reconnect() {
    // after 660 clicks (11 hours), stop
    if(counter <= 660) {
        counter++;

        /* your code goes here */
        console.log("Connect pushed");
        document.querySelector("#connect").click()
    } else {
        clearInterval(intervalId);
        console.log("No longer reconnecting!")
    }
};

// click 'connect' every minute
intervalId = setInterval(reconnect, 60000);
