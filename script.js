function numberToWords(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
/* this simplifies the words and converts the numbers one by one to words */
    if (num === 0) return "Zero";

    let words = "";

    if (num >= 1000) {
        words += ones[Math.floor(num / 1000)] + " Thousand ";
        num %= 1000;
    }
    if (num >= 100) {
        words += ones[Math.floor(num / 100)] + " Hundred ";
        num %= 100;
    }
    if (num >= 20) {
        words += tens[Math.floor(num / 10)] + " ";
        num %= 10;
    } else if (num >= 10) {
        words += teens[num - 10] + " ";
        num = 0;
    }
    words += ones[num];

    return words.trim();
}

function convertToWords() {
    const ans = document.querySelector('input[name="ans"]');
    const num = parseInt(ans.value);
    if (!isNaN(num)) {
        ans.value = numberToWords(num);
    } else {
        alert("Please enter a valid number");
    }
}