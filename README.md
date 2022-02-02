RevLocal_Feb2022_PriceCalculator

Problem
To try and encourage more sales of the 5 different products they sell, RevLocal has decided to offer discounts of multiple-product purchases.

One quantity of any of the five products A,B,C,D,E costs $299.

If, however, you buy two different products, you get a 5%
discount on those two products.

If you buy 3 different products, you get a 10% discount.

If you buy 4 different products, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25%
discount.

Note that if you buy, say, four products, of which 3 are
different, you get a 10% discount on the 3 that
form part of a set, but the fourth product still costs $299.

Your mission is to write a piece of code to calculate the
price of any conceivable shopping cart (containing only
products), giving as big a discount as possible.

Notes
It needs to be written using JavaScript

Your code should accept an array as input, and should return a number, as follow:

function computeTotalPrice(productsArray) {
  // code to be executed
}

For example, given the following array input for parameter products:
['A','A','B','B','C','C','D','E']

This would represent a shopping cart containing:
2 quantity of product A
2 quantity of product B
2 quantity of product C
1 quantity of product D
1 quantity of product E

Answer: $1,928.55

Prices with discounts for sets of items:
0%  = 299.00 x 1 =  299.00
5%  = 284.05 x 2 =  568.10
10% = 269.10 x 3 =  807.30
20% = 239.20 x 4 =  956.80
25% = 224.25 x 5 = 1121.25

Each unique set of 2 or more items gets its own discount rate.