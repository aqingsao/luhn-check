luhn-check
==========

A luhn check algorithm implemented in JavaScript, it uses an improved [methodology](http://xiaoqing.me/2012-11-07-luhn-sum.html) for better performance.

## Usage

* Retrieve luhn sum for a given number

`var luhnSum = luhn.sum("7992739871"); // return 3`

* Return whether a given luhn number is correct

`var isValid = luhn.isValid("79927398713"); // return true`

## 