# XgBoost Predicting Covid19 Mortality: React/Flask WebApp
Predicting the mortality rate of Covid19 patients on an individual basis with a xgBoost Model. Predictors such as Age, Country, Symptoms used. This is only a showcase webapplication! No expertise and no medical advice! Deployed as a Flask/React Website

## XgBoost and Model Training

Open the **XGBoost_Model_training.ipynb** Jupyter Notebook to see our modelling process. We used data from Kaggle (Novel Corona Virus 2019 Dataset). There we used the dataset with patient information (COVID19_line_list_data.csv). This Dataset includes predictors such as:

* Country
* Gender
* Age
* Symptoms
* From Wuhan
* Visiting Wuhan

and the response variable which we wanted to predict:

* death

Most of the work was data cleaning. Splitting the Symptom Column an making sense of the dataset. After that we tryed to visualize a few key informations.

We trained the model with an xgBoost Algorithm. Without tuning the Parameters and with an train/test split of 0.7/0.3 we achieved a 94% accuracy in predicting the classification outcome if a patient died.

We saved the xgboost model which predicted the probabilities and exported it with pickle.


## Flask API and React Webapp

We tried to deploy the model with a Flask API (never did it before!) and React for the frontend (never used it so far). We created a form template (with the Help of Karan Bhanot's great tutorial). After filling out every form and submitting the inputs, the Flask Backend runs the prediction and serves the response (Probability of Mortality, or rather the percentage of complications) as a **JSON response**.

## Running the Website

1. Clone the repository 
2. Open a terminal in the `ui` folder and run `yarn install`  
 ``` 
 npm install -g serve
 npm run build
 serve -s build -l 3000
 ```
3. Visit `localhost:3000` for the UI
4. In another terminal go to the `service` folder and use the following command:

```python
virtualenv -p Python3 .
source bin/activate
pip install -r requirements.txt
FLASK_APP=app.py flask run
```

## Sources

* [Karan Bhanot: Create a complete Machine Learning web application using React and Flask](https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33)
* [Novel Corona Virus 2019 Dataset](https://www.kaggle.com/sudalairajkumar/novel-corona-virus-2019-dataset)