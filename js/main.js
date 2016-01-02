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
    
    //Post indítása a szerver felé
    $.post("http://37.139.16.100:3000", JSON.stringify(serverObj), function(respons){
       console.log(respons);
    });
    
    
    console.log(serverObj);
    
    return false;
}


//Adatok visszakérdezése a szerverről
function getData(btn){
     $.getJSON("http://37.139.16.100:3000/"+az, function(respons){
       console.log(respons);
       
        //Keressük a formot az osztálya alaján
        var form = $(".reg-form"); 
        form.find("input").each(function(index, input){
            var name = input.name;
            if (respons[name]){
                input.value=respons[name];
            }
        });        
    });
}