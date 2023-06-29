class UI{

    constructor(sOne,sTwo){
        this.sOne=sOne;
        this.sTwo=sTwo;

        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
        this.outputResult=document.getElementById("outputResult");
    }

    changeOne(){ this.outputFirst.textContent=this.sOne.options[this.sOne.selectedIndex].textContent}
    changeTwo(){ this.outputSecond.textContent=this.sTwo.options[this.sTwo.selectedIndex].textContent}
    displayResult(result){this.outputResult.value=result;}
}