<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
</head>
<body>

<script>
    let a = Number(prompt("Enter first number"));
    let b = Number(prompt("Enter second number"));
    let op = prompt("Enter operator (+, -, *, /)");

    let result;

    if (op === "+") {
        result = a + b;
    }
    else if (op === "-") {
        result = a - b;
    }
    else if (op === "*") {
        result = a * b;
    }
    else if (op === "/") {
        if (b !== 0) {
            result = a / b;
        }
        else {
            result = "Cannot divide by zero";
        }
    }
    else {
        result = "Invalid operator";
    }

    console.log("Result =", result);
</script>

</body>
</html>