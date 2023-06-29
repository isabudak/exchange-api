// Burada Promise Yapıları kullanılarak veri alış-verişi yapılır

// 4- Obje Oluştur

class Currency{

    constructor(valueOne,valueTwo/*Buraya app.js'den 2 değer gelecek  USD,TRY  gibi*/){

        this.valueOne=valueOne;
        this.valueTwo=valueTwo;
        this.url="https://api.exchangerate.host/latest?base="

        this.amountElement=null
    }


    
    exchange(){

        return new Promise((resolve,reject)=>{
            
            fetch(this.url + this.valueOne)
        .then(response=>response.json())
        .then(data=>{
            const parity= data.rates[this.valueTwo];
            const amount2= Number(this.amountElement);

            let total= parity * amount2;
            resolve(total)

        })
        .catch(err=>reject((err)))

        })
        
    }

    changeAmount(amount){
        this.amountElement=amount;
    }
    changeValueOne(newValueOne){
        this.valueOne=newValueOne;
    }
    changeValueTwo(newValueTwo){
        this.valueTwo=newValueTwo;
    }
}