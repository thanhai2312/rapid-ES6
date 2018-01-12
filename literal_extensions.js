//vidu 1
 var price=5.99, quantity=30;
export var productView={
    price,
    quantity
};
//vidu2
export var productView1={
    price,
    quantity,
    calculateValue(){
        return this.price*this.quantity
    }
};
//vidu4
export var productView2={
    price,
    quantity,
    "calculate value"(){
        return this.price*this.quantity
    }

};
//vidu5
var field='toi la hai';
export var productView3={
    [field]:price
};
//vidu 8
export var ident='productId';
export  var productView4={
    get [ident](){
        return true;
    },
    set [ident](value){ }
};