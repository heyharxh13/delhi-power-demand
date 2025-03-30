from import Flask, request, jsonify
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler

# Load the trained LSTM model
model = load_model("lstm_power_demand_forecast.h5")

# Initialize Flask app
app = Flask(__name__)

# Load and preprocess dataset to get feature scaling info
data_path = 'updated_powerdemand.csv'
df = pd.read_csv(data_path)
df['datetime'] = pd.to_datetime(df['datetime'])
df.set_index('datetime', inplace=True)

# Select relevant features
target_column = 'power_demand'
features = [col for col in df.columns if col != target_column]

# Normalize the dataset
scaler = MinMaxScaler()
df_scaled = scaler.fit_transform(df[features + [target_column]])

# Prediction function
def predict_future(input_data, future_steps=24):
    input_sequence = np.array(input_data).reshape(1, len(features), -1)
    predictions = []
    for _ in range(future_steps):
        pred = model.predict(input_sequence)[0, 0]
        predictions.append(pred)
        input_sequence = np.roll(input_sequence, -1, axis=1)
        input_sequence[0, -1, 0] = pred  # Update latest input with predicted value
    return scaler.inverse_transform(np.hstack((np.zeros((future_steps, len(features))), np.array(predictions).reshape(-1, 1))))[:, -1]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if 'input_data' not in data:
        return jsonify({'error': 'Missing input data'}), 400
    
    input_data = data['input_data']
    prediction = predict_future(input_data)
    return jsonify({'future_predictions': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
