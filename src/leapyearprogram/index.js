import React from 'react';

function leapYear(year) {
    if (year < 1582) {
        throw new Error('There are no leap years prior to 1582.');
    };

    if (year % 4 === 0 ) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    };
}

export default leapYear;