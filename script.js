document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        gender: parseFloat(document.getElementById('gender').value),
        income: parseFloat(document.getElementById('income').value),
        income_type: parseFloat(document.getElementById('incomeType').value),
        education: parseFloat(document.getElementById('education').value)
    };

    const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('result').innerText = result.approved ? "Approved" : "Denied";
});