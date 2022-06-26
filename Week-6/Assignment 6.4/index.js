function max_profit(price, n) {
    var buy = price[0], max_profit = 0;
    for (var i = 1; i < n; i++) {
        if (buy > price[i]) {
            buy = price[i]
        } else if (price[i] - buy > max_profit) {
            max_profit = price[i] - buy
        }
    }
    console.log(max_profit)
}

var price = [7, 1, 5, 3, 6, 4];
var n = price.length;
max_profit(price, n); 

