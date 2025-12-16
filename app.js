


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let lcm = Math.abs(a * b) / gcd(a, b);
    document.getElementById("result").textContent = "НОК = " + lcm;
}