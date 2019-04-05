'use strict'

const math = require( 'mathjs' );

/**
 *
 *
 * @date 2019-03-26
 * @param {*} matrix Original Matrix
 * @returns { determinant, transformedMatrix} Returns the determinant of the given matrix and its transformed matrix
 */
function getDeterminant( matrix ) {
    let K = math.matrix( matrix );
    K = math.concat( K, math.identity( K.size() ) )

    let sizeOfArray = K.size();
    let rows = sizeOfArray[ 0 ];
    let cols = sizeOfArray[ 1 ];

    for ( let i = 0; i < rows; i++ ) {
        let pivot = K.get( [ i, i ] );
        for ( let j = 0; j < rows; j++ ) {
            if ( i != j ) {
                for ( let k = i + 1; k < cols; k++ ) {
                    // K(j,k) = (pivot * K(j,k) -  K(j,i) * K(i,k)) / divider;
                    let divider = i == 0 ? 1 : K.get( [ i - 1, i - 1 ] );
                    let a = math.multiply( pivot, K.get( [ j, k ] ) );
                    let b = math.multiply( K.get( [ j, i ] ), K.get( [ i, k ] ) );
                    let ab = math.subtract( a, b );
                    ab = math.divide( ab, divider )
                    K.set( [ j, k ], ab );
                }
            }
        }
    }

    return {
        determinant: K.get( [ rows - 1, rows - 1 ] ),
        transformedMatrix: K.subset(
            math.index(
                math.range( 0, rows ), math.range( cols / 2, cols )
            )
        )
    }
}


exports.getDeterminant = getDeterminant;