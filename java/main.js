var myObj = {"name" : "Joshua", "age" : "22", "city" : "Cape Town"};
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;