# Bareiss algorithm

In mathematics, the Bareiss algorithm, named after Erwin Bareiss, is an algorithm to calculate the determinant or the echelon form of a matrix with integer entries using only integer arithmetic; any divisions that are performed are guaranteed to be exact (there is no remainder). The method can also be used to compute the determinant of matrices with (approximated) real entries, avoiding the introduction any round-off errors beyond those already present in the input.


## Installation

This is a Node.js module.

Installation is done using the npm install command:

```
    npm i bareiss
```

## Example of use

```javascript

// Import the module
const Bareiss = require( 'bareiss' );


let K =
    [ [ 42, 97, 23 ],
    [ 51, 30, 77 ],
    [ 33, 7, 66 ] ];


Bareiss.getDeterminant( K );

/*
{ determinant: -34062,
  transformedMatrix:
    [[ 1441, -6241, 6779 ],
     [ -825, 2013, -2061 ],
     [ -633, 2907, -3687 ]],
}
*/


```

The main function is:

<img src="https://bitbucket.org/adolfo_s94/bareiss/raw/9adda507b113bf9e8a46a1134f75b547f61714ef/carbon.png">



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

- Code:
    * [Adolfo Solis-Rosas](adolfo2794@gmail.com)
- Original Paper:
    * [Erwin H. Bareiss](http://www.ams.org/journals/mcom/1968-22-103/S0025-5718-1968-0226829-0/S0025-5718-1968-0226829-0.pdf)

