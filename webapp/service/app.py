from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
import xgboost as xgb
import pickle
import numpy as np
import pandas as pd
flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Predicting CoVid19 Mortality with Patient Data", 
		  description = "Predict results using a trained model")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'age': fields.Integer(required = True, 
				  							   description="Age", 
    					  				 	   help="Age cannot be blank"),
				  'gender': fields.String(required = True, 
				  							description="Gender Selection", 
    					  				 	help="Gender cannot be blank"),
				  'country': fields.String(required = True, 
				  							description="Select Country", 
    					  				 	help="Country cannot be blank"),
				  'visiting_wuhan': fields.String(required=True,
				  								   description="Visited Wuhan Selection",
												   help="Visited Wuhan cannot be blank"),
				  'from_wuhan': fields.String(required=True,
				  								   description="From Wuhan Selection",
												   help="From Wuhan cannot be blank"),
				  'abdominal_pain': fields.String(required=True,
				  								   description="Abdominal Pain Selection",
												   help="cannot be blank"),
				  'chest_pain': fields.String(required=True,
				  								   description="Chest Pain Selection",
												   help="cannot be blank"),
				  'chill': fields.String(required=True,
				  								   description="Chill Selection",
												   help="cannot be blank"),
				  'cough': fields.String(required=True,
				  								   description="Cough Selection",
												   help="cannot be blank"),
				  'diarrhea': fields.String(required=True,
				  								   description="Diarrhea Selection",
												   help="cannot be blank"),
				  'breathing_problems': fields.String(required=True,
				  								   description="breathing_problems Selection",
												   help="cannot be blank"),		
				  'dyspnea': fields.String(required=True,
				  								   description="dyspnea Selection",
												   help="cannot be blank"),			
				  'joint_pain': fields.String(required=True,
				  								   description="joint_pain Selection",
												   help="cannot be blank"),
				  'loss_of_appetite': fields.String(required=True,
				  								   description="loss_of_appetite Selection",
												   help="cannot be blank"),
												   'muscle_pain': fields.String(required=True,
				  								   description="muscle_pain Selection",
												   help="cannot be blank"),
												   'pneumonia': fields.String(required=True,
				  								   description="pneumonia Selection",
												   help="cannot be blank"),
												   'sputum': fields.String(required=True,
				  								   description="sputum Selection",
												   help="cannot be blank"),
												   'thirst': fields.String(required=True,
				  								   description="thirst Selection",
												   help="cannot be blank"),
												   'fever': fields.String(required=True,
				  								   description="fever Selection",
												   help="cannot be blank"),
												   'flu': fields.String(required=True,
				  								   description="flu Selection",
												   help="cannot be blank"),
												   'headache': fields.String(required=True,
				  								   description="headache Selection",
												   help="cannot be blank"),
												   'malaise': fields.String(required=True,
				  								   description="malaise Selection",
												   help="cannot be blank"),
												   'nausea': fields.String(required=True,
				  								   description="nausea Selection",
												   help="cannot be blank"),
												   'physical_discomfort': fields.String(required=True,
				  								   description="physical_discomfort Selection",
												   help="cannot be blank"),
												   'runny_nose': fields.String(required=True,
				  								   description="runny_nose Selection",
												   help="cannot be blank"),
												   'sore_body': fields.String(required=True,
				  								   description="sore_body Selection",
												   help="cannot be blank"),
												   'throat_pain': fields.String(required=True,
				  								   description="throat_pain Selection",
												   help="cannot be blank"),
												   'tired': fields.String(required=True,
				  								   description="tired Selection",
												   help="cannot be blank"),
												   'vomiting': fields.String(required=True,
				  								   description="vomiting Selection",
												   help="cannot be blank"),

					})

#classifier = joblib.load('classifier1.joblib')
classifier = pickle.load(open('pima1.pickle.dat','rb'))
@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			
			data_pred = [gender(data[1]),float(data[0]),change(data[3]),float(change(data[4])),
						 change(data[5]),change(data[6]),change(data[7]),change(data[8]),
						 change(data[9]),change(data[10]),change(data[11]),change(data[12]),
						 change(data[13]),change(data[14]),change(data[15]),change(data[16]),
						 change(data[17]),change(data[18]),change(data[19]),change(data[11]),
						 change(data[20]),
						 change(data[21]),change(data[22]),change(data[23]),change(data[24]),
						 change(data[25]),change(data[26]),change(data[27]),change(data[28]),
						 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						 ]
			print(data_pred)
			print(len(data_pred))
			print("------")
			s1 = pd.Series(data_pred,
			index=['gender', 'age', 'visiting Wuhan', 'from Wuhan', ' abdominal pain',
									   ' chest pain', ' chill', ' cough', ' diarrhea', ' difficult in breathing',
									   ' dyspnea', ' joint pain', ' loss of appetite', ' muscle pain', ' pneumonia',
									   ' sputum', ' thirst', 'fever', 'flu symptoms', 'headache', 'joint pain', 
									   'malaise', 'nausea', 'physical discomfort', 'runny nose', 'sore body',
									   'throat pain', 'tired', 'vomiting', 'Afghanistan', 'Algeria', 'Australia',
									   'Austria', 'Bahrain', 'Belgium', 'Cambodia', 'Canada', 'China', 'Croatia',
									   'Egypt', 'Finland', 'France', 'Germany', 'Hong Kong', 'India', 'Iran',
									   'Israel','Italy','Japan','Kuwait','Lebanon','Malaysia','Nepal', 'Phillipines', 'Russia', 'Singapore', 'South Korea', 'Spain',
									   'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'UAE', 'UK',
									   'USA', 'Vietnam'])
			for index in s1.iteritems():
				if index == data[2]:
					s1[index] = 1
					break

			df_blank = pd.DataFrame(columns=['gender', 'age', 'visiting Wuhan', 'from Wuhan', ' abdominal pain',
									   ' chest pain', ' chill', ' cough', ' diarrhea', ' difficult in breathing',
									   ' dyspnea', ' joint pain', ' loss of appetite', ' muscle pain', ' pneumonia',
									   ' sputum', ' thirst', 'fever', 'flu symptoms', 'headache', 'joint pain', 
									   'malaise', 'nausea', 'physical discomfort', 'runny nose', 'sore body',
									   'throat pain', 'tired', 'vomiting', 'Afghanistan', 'Algeria', 'Australia',
									   'Austria', 'Bahrain', 'Belgium', 'Cambodia', 'Canada', 'China', 'Croatia',
									   'Egypt', 'Finland', 'France', 'Germany', 'Hong Kong', 'India', 'Iran',
									   'Israel','Italy','Japan','Kuwait','Lebanon','Malaysia','Nepal', 'Phillipines', 'Russia', 'Singapore', 'South Korea', 'Spain',
									   'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'UAE', 'UK',
									   'USA', 'Vietnam'])
			df= pd.DataFrame(columns=['gender', 'age', 'visiting Wuhan', 'from Wuhan', ' abdominal pain',
									   ' chest pain', ' chill', ' cough', ' diarrhea', ' difficult in breathing',
									   ' dyspnea', ' joint pain', ' loss of appetite', ' muscle pain', ' pneumonia',
									   ' sputum', ' thirst', 'fever', 'flu symptoms', 'headache', 'joint pain', 
									   'malaise', 'nausea', 'physical discomfort', 'runny nose', 'sore body',
									   'throat pain', 'tired', 'vomiting', 'Afghanistan', 'Algeria', 'Australia',
									   'Austria', 'Bahrain', 'Belgium', 'Cambodia', 'Canada', 'China', 'Croatia',
									   'Egypt', 'Finland', 'France', 'Germany', 'Hong Kong', 'India', 'Iran',
									   'Israel','Italy','Japan','Kuwait','Lebanon','Malaysia','Nepal', 'Phillipines', 'Russia', 'Singapore', 'South Korea', 'Spain',
									   'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'UAE', 'UK',
									   'USA', 'Vietnam'])
			df = df.append(s1, ignore_index=True)


			y_pred = classifier.predict_proba(df)
			#predictions = [round(value) for value in y_pred]
			print(y_pred)
			print("-----")
			print(y_pred[0])
			print("-----")
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "Prediction: " + "Based on the Data your complication risk is: " + str(int(round(y_pred[0][1]*100))) + "%"
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			df = df_blank
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})




def gender(str):
    if str == "Male":
        return 0
    else:
        return 1

def change(str):
	if str == "No":
		return 0
	else:
		return 1
