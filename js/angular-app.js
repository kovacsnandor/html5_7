//Egyedi azonosító
var az = "user_51867050";


//Létrehozunk egy új Angular modult
var testModule = angular.module("testModule",[]);

// Űrlap controller létrehozása
testModule.controller("formController", function($scope, $http){
    // User objektum 
    //
    $scope.user = {};
    //$scope.user.username = "Pistike";
    
    //Meglévő adatok lekérése
    $http.get("http://37.139.16.100:3000/"+az)
        .success(function(data){
        //Mindent kitölt, mert a $scope rálát az összes változóra
        //Kétirányú adatkötés
        $scope.user = data;   
    })
    .error(function(error){
       console.error("Hiba a lekérés során: ", error);
    });
    
    //Adatok mentése
    $scope.processForm = function(){

            //Egy objektum, amit elküldünk a szervernek
        var serverObj = {
            "user": az,
            "data": $scope.user
        };

        // Adatok küldése a szerverre.
        $http.post("http://37.139.16.100:3000", serverObj)
            .success(function(data){
            //Mindent kitölt, mert a $scope rálát az összes változóra
            //Kétirányú adatkötés
           console.log("A szerver válasza :", data);
        })
        .error(function(error){
           console.error("Hiba a lekérés során: ", error);
        });
    };
    
});

