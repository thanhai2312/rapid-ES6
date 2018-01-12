//vidu2
export let getPrice2 = () => 20;
 // console.log(getPrice());
//vidu3
export var getPrice3 = count => count*4.00;
//vidu4
export var getPrice4 = (count, tax) => count * 4.00 * (1+tax);
//vidu5
export  var getPrice5=(count, tax)=>{
    var price=count * 4.00;
    price *=(1+tax);
    return price;
}
//vidu6
// document.addEventListener('click', function () {
//     console.log(this);
// });
//vidu8
export var invoice={
    number: 123,
    process: function () {
        console.log(this);

    }
};
//vidu10
export var invoice1={
    number1: 123,
    process1: function () {
        return()=>console.log(this.number1);

    }
};
//vidu11
export var newInvoice={
    number1:456
};
//vidu14
