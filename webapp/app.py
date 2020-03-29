import flask
import pickle
import pandas as pd


# Use pickle to load in the pre-trained model.
with open(f'model/pima.pickle.dat', 'rb') as f:
    model = pickle.load(f)
app = flask.Flask(__name__, template_folder='templates')


@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        return(flask.render_template('main.html'))
    if flask.request.method == 'POST':
        reporting_date = flask.request.form['reporting_date']
        country = flask.request.form['country']
        gender = flask.request.form['gender']
        age = flask.request.form['age']
        visiting_wuhan = flask.request.form['visiting_wuhan']
        from_wuhan = flask.request.form['from_wuhan']
        abdominal_pain = flask.request.form['abdominal_pain']
        chest_pain = flask.request.form['chest_pain']
        chill = flask.request.form['chill']
        cough = flask.request.form['cough']
        diarrhea = flask.request.form['diarrhea']
        difficult_in_breathing = flask.request.form['difficult_in_breathing']
        dyspnea = flask.request.form['dyspnea']
        joint_pain = flask.request.form['joint pain']
        loss_of_appetite = flask.request.form['loss_of_appetite']
        muscle_pain = flask.request.form['muscle_pain']
        pneumonia = flask.request.form['pneumonia']
        sputum = flask.request.form['sputum']
        thirst = flask.request.form['thirst']
        fever = flask.request.form['fever']
        flu_symptoms = flask.request.form['flu_symptoms']
        headache = flask.request.form['headache']
        malaise = flask.request.form['malaise']
        nausea = flask.request.form['nausea']
        physical_discomfort = flask.request.form['physical_discomfort']
        runny_nose = flask.request.form['runny_nose']
        sore_body = flask.request.form['sore_body']
        throat_pain = flask.request.form['throat_pain']
        tired = flask.request.form['tired']
        vomiting = flask.request.form['vomiting']




        input_variables = pd.DataFrame([[reporting_date, country,gender,age,visiting_wuhan,from_wuhan,abdominal_pain,chest_pain,chill,cough,diarrhea,difficult_in_breathing,dyspnea,joint_pain,loss_of_appetite,muscle_pain,pneumonia,sputum,thirst,fever,flu_symptoms,headache,joint_pain,malaise,nausea,physical_discomfort,runny_nose,sore_body,throat_pain,tired,vomiting]],
                                       columns=['temperature', 'humidity', 'windspeed'],
                                       dtype=float)
        prediction = model.predict(input_variables)[0]
        return flask.render_template('main.html',
                                     original_input={'Temperature':temperature,
                                                     'Humidity':humidity,
                                                     'Windspeed':windspeed},
                                     result=prediction,
                                     )
                                     
if __name__ == '__main__':
    app.run()