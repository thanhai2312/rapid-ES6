// import {abc} from "./base";
//
// console.log(abc)

// var getPrice = () => 10;
// console.log(getPrice());
//Arrow_function
    //vidu2
    import {getPrice2} from "./arrow_function";
    console.log(getPrice2());
    //videu3
    import {getPrice3} from "./arrow_function";
    console.log(getPrice3(2));
    //vidu4
    import {getPrice4} from "./arrow_function";
    console.log(getPrice4(2,.07));
    //vidu 5
    import {getPrice5} from "./arrow_function";
    console.log(getPrice5(2, .07));
    //vidu6
   // document.addEventListener('click',()=>console.log(this));
    //vidu8
    import {invoice} from "./arrow_function";
    invoice.process();
    //vdu10
    import {invoice1} from "./arrow_function";
    invoice1.process1()();
    //vidu11
    import {newInvoice} from "./arrow_function";
    invoice1.process1().bind(newInvoice)();
    //vidu12
    invoice1.process1().call(newInvoice);
    //vidu14
    console.log(getPrice2.hasOwnProperty("prototype"));

//Object Literal Extensions
    //vidu1
    import {productView} from "./literal_extensions";
    console.log(productView);
    //vidu2
    import {productView1} from "./literal_extensions";
    console.log(productView1.calculateValue());
    //vidu4
    import {productView2} from "./literal_extensions";
    console.log(productView2["calculate value"]());
    //vidu5
    import {productView3} from "./literal_extensions";
    console.log(productView3);
    //vidu 8
    import {ident, productView4} from "./literal_extensions";
    console.log(productView4.productId);
//for...of loops
    //vidu1
    import {catenories} from "./for_of_loops";
    for (var item of catenories){
        console.log(item);
    }
    //vidu 3
    import {count} from "./for_of_loops";
    console.log(count);
//Octal and Binary
    //vidu1
    import {value} from "./octal_binary";
    console.log(value);
//Template Literals
    //vidu1
    import {invoiceNum} from "./template_literals";
    console.log(`Invoice Number: ${invoiceNum}`);
    //vidu5
    // import {showMessage} from "./template_literals";
    // showMessage(`Invoice Number: ${invoiceNum}`);
