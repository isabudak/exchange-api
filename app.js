// 1- Elementleri Seçme

const amount=document.getElementById("amount");
const sOne=document.getElementById("first-selector");
const sTwo=document.getElementById("second-selector");

const currency= new Currency("USD","TRY");

const ui= new UI(sOne,sTwo);


// 2- Eventleri Yaz

//amount-sOne-sTwo eventleri

eventListeners();

function eventListeners(){

    amount.addEventListener("input",exchangeCurrency); //input değiştiği zaman input diye bir event oluşur
    sOne.onchange=function(){//sOne'ın değeri değiştiği zaman demek onchange
        currency.changeValueOne(sOne.options[sOne.selectedIndex].textContent);
        ui.changeOne()

    };

    sTwo.onchange=function(){
        currency.changeValueTwo(sTwo.options[sTwo.selectedIndex].textContent);
        ui.changeTwo()
    };
};

// 3- amount'a atadığın fonksiyonu yaz

function exchangeCurrency(){
    currency.changeAmount(amount.value)
    currency.exchange()
    .then(result=>{
        ui.displayResult(result)
    })
    .catch(err=>{console.log(err)})
}