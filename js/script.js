// size
var small={name:"small", cost:750};
var medium={name:"medium",cost:990};
var large={name:"large",cost:460};


// crust 
var crisfy={name:"crisy",cost:880};
var stuffed={name:"stuffed",cost:450};
var gluttenFree={name:"glutten-free",cost:670};

//topping
var mushroom={name:"mushroom",cost:330};
var sausage={name:"sausage",cost:770};
var tomato={name:"tomato",cost:440};
var onion={name:"onion",cost:850};

var getSize=function(){
    var y=$("select#wd option:selected").val();
    if(y=="small"){size=small}else
    if(y=="medium"){size=medium}else
    if(y=="large"){size=large}else
    console.log(size);
    return size;
}