from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np

app = Flask(__name__)
# Ensure your model is saved in a 'models/' folder
model = joblib.load('models/card_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Arrange features exactly as the model expectss
    features = np.array([[
        data['gender'],
        data['income'],
        data['income_type'],
        data['education']
    ]])
    prediction = model.predict(features)
    return jsonify({'approved': int(prediction[0])})
@app.route('/')
def home():
    return render_template('index.html')