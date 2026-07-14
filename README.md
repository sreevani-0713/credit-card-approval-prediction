# 💳 Credit Card Approval Prediction

A Machine Learning-based web application that predicts whether a credit card application is likely to be **Approved** or **Rejected**, based on an applicant's financial and demographic information. Built using Python, Flask, Scikit-learn, and XGBoost to automate and standardize the credit card approval process.

---

## 📌 Project Overview

Banks and financial institutions receive thousands of credit card applications every day. A significant portion are rejected due to factors such as high existing loan balances, insufficient income levels, or excessive credit inquiries. Manually reviewing each application is time-consuming, inconsistent, and prone to human error.

This project automates the approval decision using Machine Learning models trained on historical applicant data. The system analyzes inputs such as income, employment status, education, family status, housing type, work experience, and credit history to generate an instant, consistent prediction — just as a real bank underwriting process would.

The best-performing model is deployed through a **Flask web application**, with an **IBM Watson Machine Learning** pipeline enabling scalable, real-time predictions on the cloud.

---

## 🎯 Problem Statement

Automate the credit card approval decision-making process using supervised machine learning, reducing manual effort, human error, and turnaround time — while improving consistency in identifying high-risk applicants.

---

## 🚀 Features

- Real-time credit card approval/rejection prediction
- User-friendly, responsive Flask web application
- Data preprocessing and feature engineering pipeline
- Comparison across four ML classification algorithms
- Conversion of multi-class payment status codes into binary risk labels
- Cloud deployment support via IBM Watson Machine Learning
- Supports individual application review and batch-style compliance screening

---

## 🛠️ Technologies Used

**Programming Language**
- Python

**Machine Learning**
- Scikit-learn
- XGBoost
- Logistic Regression
- Decision Tree
- Random Forest

**Libraries**
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Joblib

**Web Framework**
- Flask

**Frontend**
- HTML5
- CSS3
- Bootstrap

**Cloud Deployment**
- IBM Watson Machine Learning

**Version Control**
- Git
- GitHub

---

## 📂 Project Structure

```text
credit-card-approval-prediction/
│
├── app.py
├── model.pkl
├── scaler.pkl
├── requirements.txt
├── README.md
│
├── dataset/
│   ├── application_record.csv
│   └── credit_record.csv
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   ├── images/
│   └── js/
│
├── notebooks/
│   └── Credit_Card_Approval.ipynb
│
└── saved_models/
    └── xgboost_model.pkl
```

---

## ⚙️ Installation & Setup

**1. Clone the Repository**
```bash
git clone https://github.com/sreevani-0713/credit-card-approval-prediction.git
```

**2. Navigate to the Project Folder**
```bash
cd credit-card-approval-prediction
```

**3. Create a Virtual Environment (optional but recommended)**
```bash
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
```

**4. Install Dependencies**
```bash
pip install -r requirements.txt
```

**5. Run the Application**
```bash
python app.py
```

**6. Open your browser and visit**
```
http://127.0.0.1:5000/
```

---

## 📊 Machine Learning Workflow

1. Data Collection
2. Data Cleaning
3. Exploratory Data Analysis (EDA)
4. Data Preprocessing
5. Feature Engineering (e.g., binary encoding of payment status codes)
6. Train-Test Split
7. Model Training
8. Model Evaluation
9. Model Selection
10. Flask Integration
11. Real-Time Prediction

---

## 🤖 Models Used

| Algorithm | Type |
|---|---|
| Logistic Regression | Linear classification baseline |
| Decision Tree Classifier | Rule-based classification |
| Random Forest Classifier | Ensemble bagging method |
| XGBoost Classifier | Gradient boosting ensemble |

The best-performing model is selected and saved as `model.pkl` for deployment.

---

## 📈 Model Evaluation

Models are compared using:
- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix

*(Add your actual evaluation results/table here once available.)*

---

## 💻 Application Workflow

```
User Input
      │
      ▼
Flask Application
      │
      ▼
Data Preprocessing
      │
      ▼
Load Trained Model
      │
      ▼
Prediction
      │
      ▼
Approved / Rejected
```

---

## 💡 Usage Scenarios

### Scenario 1: Automated Credit Card Application Screening
A bank credit analyst enters an applicant's financial profile (income type, employment duration, credit history) into the web app. The model instantly returns an approval or rejection prediction, helping the analyst prioritize applications needing further review.

### Scenario 2: High-Risk Applicant Identification and Compliance Review
A compliance officer batch-screens applicants with past-due loan records. The feature engineering pipeline converts multi-class payment status codes into binary labels, allowing the model to clearly flag high-risk applicants as ineligible.

### Scenario 3: Customer Self-Service Credit Card Eligibility Check
A prospective customer enters their personal and financial details before formally applying. The system instantly predicts their likelihood of approval, helping them understand eligibility and reducing unnecessary rejections.

---

## ☁️ Deployment

The trained model is deployed using **IBM Watson Machine Learning**, enabling:
- Cloud-hosted, real-time inference
- Scalable handling of concurrent prediction requests
- Seamless integration with the Flask front-end

---

## 📷 Screenshots

insert screenshots of your project here, for example:
- Home Page
- Input Form
- Prediction Result
- Model Performance Charts

---

## 🔮 Future Enhancements

- Integration with live banking databases
- Explainable AI (XAI) for prediction transparency
- Mobile application
- Multi-language support
- Cloud deployment using AWS/Azure
- Real-time API integration

---

## 🛠️ Skills & Technologies

`XGBoost` · `Machine Learning Algorithms` · `Artificial Intelligence` · `Decision Tree Learning` · `NumPy` · `Python` · `Scikit-Learn` · `Matplotlib`

---

## 👥 Team

| Name | Role |
|---|---|
| Sreevani Sreevani Reddy | Team Lead |
| Nitya Tarun Avula | Member |
| K Guna Shekar | Member |
| Harshitha Jampana | Member |
| Raavipaati Vishnu Vardhan Reddy | Member |

---

## 📄 License

This project was developed as part of the **SmartBridge / SkillWallet Internship Program** for educational purposes.

---

## ⭐ Acknowledgements

- SmartBridge
- SkillWallet
- IBM SkillsBuild
- Scikit-learn
- XGBoost
- Flask

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repository and submit a pull request.
