function calculate(operator) {

    // Get input values
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result;

    // Arithmetic Operators
    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;

        case "%":
            result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
            break;

        case "**":
            result = num1 ** num2;
            break;
    }

    // Display Result
    document.getElementById("output").innerText = result;

    // Comparison Operators
    console.log("Equal:", num1 == num2);
    console.log("Strict Equal:", num1 === num2);
    console.log("Greater:", num1 > num2);
    console.log("Less:", num1 < num2);

    // Logical Operators
    console.log("AND:", num1 > 0 && num2 > 0);
    console.log("OR:", num1 > 0 || num2 > 0);
    console.log("NOT:", !(num1 > 0));

    // Assignment Operator
    let total = num1;
    total += num2;
    console.log("Assignment Result:", total);
}

// Clear Function
function clearResult() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerText = "0";
}