// size
var small={name:"Small", cost:750};
var medium={name:"medium",cost:990};
var large={name:"large",cost:460};


// crust 
var cripsy={name:"Cripsy",cost:880};
var stuffed={name:"stuffed",cost:450};
var gluttenFree={name:"Glutten-free",cost:670};

//topping
var mushroom={name:"mushroom",cost:330};
var sausage={name:"sausage",cost:770};
var tomato={name:"tomato",cost:440};
var onion={name:"onion",cost:850};



$(document).ready(function(){

        
            $("#test").click(function(e)
            {
                e.preventDefault();
                var mySize=$("#size option:selected").html();
                var myCrust=$("#crust option:selected").html();
                var myTopping=$("#topping option:selected").html();
                var TotalPizzas=$("input#number").val();
                if (mySize===small.name && myCrust===cripsy.name && myTopping===mushroom.name)
                {
                    var totalSmall=small.cost+cripsy.cost+mushroom.cost*TotalPizzas;
                    alert(totalSmall);
                }else if(mySize===medium.name && myCrust===stuffed.name && myTopping===sausage.name)
                {
                    var totalMedium=medium.cost+stuffed.cost+sausage.cost*TotalPizzas;
                    alert(totalMedium);
                }else if(mySize===large.name && myCrust===gluttenFree.name && myTopping===tomato.name)
                {
                    var totallarge=large.cost+gluttenFree.cost+tomato.cost*TotalPizzas;
                    alert(totallarge);
                };
            });
            $("button#delivery").click(function(event){
                event.preventDefault();
                var location = prompt("Enter your address:");
                alert("We will deliver your order at" + " " + location);
            });
    
        });