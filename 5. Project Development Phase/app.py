from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
import os

app = Flask(__name__)

# Load model
model = joblib.load('models/card_model.joblib')

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # IMPORTANT: must match training feature order exactly
    features = np.array([[
        data['gender'],
        data['income'],
        data['income_type'],
        data['education']
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        'approved': bool(prediction)
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)