var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
var arabicNumbers  = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]

const toEnglish = (str) => {
    str = String(str)

    for(var i=0; i<10; i++){ str = str.replaceAll(persianNumbers[i], i).replaceAll(arabicNumbers[i], i); }

    return str;
}

const toPersian = (str) => {
    str = String(str)

    for(var i=0; i<10; i++){ str = str.replaceAll(i, persianNumbers[i]).replaceAll(arabicNumbers[i], persianNumbers[i]); }

    return str
};

module.exports = {
    toEnglish,
    toPersian
}