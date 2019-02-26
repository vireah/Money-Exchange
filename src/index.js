// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let o = {};
    if (currency === 0 || currency < 0) return {};   
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
       if(currency>=50){
        o.H = currency/50 | 0;
        currency = currency % 50;
        } if(currency>=25){
            o.Q = currency/25 | 0;
            currency = currency % 25;
        } if(currency>=10){
            o.D = currency/10 | 0;
            currency = currency % 10;
        }  if(currency>=5){
            o.N = currency/5 | 0;
            currency = currency % 5;
        }   
        if(currency){ 
            o.P = currency;
        }
    return o;
}
