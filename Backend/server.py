from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)


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


@app.route("/predict")
def predictor():
    try:
        predictions = model.predict(mytest)
        return jsonify({"predictions": predictions.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
