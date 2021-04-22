function dayOfYear(year, month, day) {
    let m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let d = 0;

    for (let i = 0; i < month - 1; i++) {
        d += m[i];
    }
    if (month > 2 && isLeapYear(year)) d += 1;

    return d + day;
}

function isLeapYear(year) {
    if (year % 4 === 0) return true;
}

module.exports = dayOfYear;