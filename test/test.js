const Bareiss = require( '../index' );

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