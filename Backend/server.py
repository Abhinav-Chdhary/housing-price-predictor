from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def preprocessor(mytest, data):
    mytest[0, 0] = int(data["latitude"])
    mytest[0, 1] = int(data["longitude"])
    mytest[0, 2] = int(data["housing_median_age"])
    mytest[0, 3] = int(data["total_rooms"])
    mytest[0, 4] = int(data["total_bedrooms"])
    mytest[0, 5] = int(data["population"])
    mytest[0, 6] = int(data["households"])
    mytest[0, 7] = float(data["median_income"])
    if data["ocean_proximity"] == "less than 1hr OCEAN":
        mytest[0, 8] = 1
    elif data["ocean_proximity"] == "INLAND":
        mytest[0, 9] = 1
    elif data["ocean_proximity"] == "ISLAND":
        mytest[0, 10] = 1
    elif data["ocean_proximity"] == "NEAR BAY":
        mytest[0, 11] = 1
    elif data["ocean_proximity"] == "NEAR OCEAN":
        mytest[0, 12] = 1
    mytest[0, 13] = int(data["total_bedrooms"]) / int(data["total_rooms"])
    mytest[0, 14] = int(data["total_rooms"]) / int(data["households"])


# sample route for testing
@app.route("/")
def helloWorld():
    return "Fuck you"


# Members API Route (sample)
@app.route("/members")
def members():
    return {"members": ["mem1", "mem2", "mem3"]}


# model import
model = joblib.load("house_rfrm.joblib")

# sample data
my_bedroom_ratio = 1033 / 4401
my_household_rooms = 4401 / 962
mytest = np.array(
    [
        [
            -118,
            34,
            27,
            4401,
            1033,
            1725,
            962,
            4.3252,
            1,
            0,
            0,
            0,
            0,
            my_bedroom_ratio,
            my_household_rooms,
        ]
    ]
)


@app.route("/api/predict", methods=["POST"])
def predictor():
    data = request.get_json()
    preprocessor(mytest, data)
    try:
        predictions = model.predict(mytest)
        return jsonify({"predictions": predictions.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
