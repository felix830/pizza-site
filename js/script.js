// size
var small={name:"small", cost:750};
var medium={name:"medium",cost:990};
var large={name:"large",cost:460};


// crust 
var cripsy={name:"cripsy",cost:880};
var stuffed={name:"stuffed",cost:450};
var gluttenFree={name:"glutten-free",cost:670};

//topping
var mushroom={name:"mushroom",cost:330};
var sausage={name:"sausage",cost:770};
var tomato={name:"tomato",cost:440};
var onion={name:"onion",cost:850};

var getSize=function(){
    var y=$("select#size option:selected").val();
    if(y=="small"){size=small}else
    if(y=="medium"){size=medium}else
    if(y=="large"){size=large}else
    console.log(size);
    return size;

}
var getCrust = function(){
    var x = $("#crust option:selected").val();
    if(x =="cripsy"){crust= cripsy}else
    if(x == "stuffed"){crust = stuffed}else
    if(x == "gluttenFree"){crust = gluttenFree}
    console.log(crust);
    return crust;
}
var getDelivery = function(){
    var y = $("input[type=radio][name=delivery]:checked").val();
    if(y =="yes"){cost = 500}else{
        cost =0;
    }
    console.log(y);
}

$(document).ready(function(){

    $("button[type=submit][name=submit]").click(function(e){
        e.preventDefault();
        getDelivery();

    });

    $("#pizzaDetails").click(function() {
        $("#pizzaDetail").toggle();
        $("#deliver").toggle();
        $("#pickup").toggle();
        $("#checkout").hide();
       
        $("button#deliver").click(function(event){
            event.preventDefault();
            alert("Delivery cost is" + " " + del);
            var location = prompt("Enter your address:");
            alert("We will deliver your order at" + " " + location);
            $("#checkout").show();
        })

        $("button#pickup").click(function(event){
            event.preventDefault();
            alert("Thank you for shopping with us!!!!!");
            $("#checkout").show();   

            $("button#checkout").click(function(event){
                event.preventDefault();
                alert( TotalPrice + 400);
                $("#check").text(check);
                // console.log(check);       
    









});