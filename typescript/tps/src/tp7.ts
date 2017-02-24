/**
 * les expressions lambda partie 2
 */
var submitElm  = document.getElementById("submit");
var counterElm  = document.getElementById("count");
function Counter(counter,submitter){
    this.count = 0;
    counter.innerHTML = this.count;
    submitter.addEventListener( 'click', function(){

        this.count += 1;
        counter.innerHTML= this.count;
    });

}

new Counter(counterElm,submitElm);
/*
// solution sans lambda
function Counter(counter,submitter){
    this.count = 0;
    var _this= this;
    counter.innerHTML = this.count;
    submitter.addEventListener( 'click', function(){

        _this.count += 1;
        counter.innerHTML= _this.count;
    });

}*/

/*
// solution avec lambda
function Counter(counter,submitter){
    this.count = 0;
    
    counter.innerHTML = this.count;
    submitter.addEventListener( 'click', ()=>{

        this.count += 1;
        counter.innerHTML= this.count;
    });

}*/

