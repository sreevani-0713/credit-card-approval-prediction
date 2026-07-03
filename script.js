document.getElementById("predictionForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // Get values from inputs
    const gender = document.getElementById("gender").value;
    const income = document.getElementById("income").value;
    const income_type = document.getElementById("income_type").value;
    const education = document.getElementById("education").value;

    // Simple demo prediction logic (frontend only)
    let resultText = "";

    if (income > 500000 && education >= 2) {
        resultText = "✅ Eligible for Credit Card";
    } else {
        resultText = "❌ Not Eligible for Credit Card";
    }

    // Show result on page
    document.getElementById("result").innerText = resultText;
});