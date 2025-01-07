// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

var maxProfit = function (prices) {
  let maximumProfit = 0;
  let buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let sellingPrice = prices[i];
    if (sellingPrice > buyingPrice) {
      maximumProfit = Math.max(maximumProfit, sellingPrice - buyingPrice);
    } else {
      buyingPrice = sellingPrice;
    }
  }
  return maximumProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
