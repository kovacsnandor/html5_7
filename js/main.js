//Egyedi azonosító
var az = "user_51867050";


// Űrlap küldése
function processForm(btn) {
    
    //Keressük a gombot
    var btn = $(btn);
    
    //Keressük a gombhoz tartozó formot
    var form = btn.parents("form");
    
    //Mentjük a beviteli mezők értékeit
    var data = {};
    form.find("input").each(function(index, input){
        data[input.name] = input.value;
        
    });
    
    //Egy objektum, amit elküldünk a szervernek
    var serverObj = {
        "user": az,
        "data": data
    };
    
    
    console.log(serverObj);
    
    return false;
}