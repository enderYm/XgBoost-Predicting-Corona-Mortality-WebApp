import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        age: '50',
        gender: 'Male',
        country:'Afghanistan',
        visiting_wuhan: 'No',
        from_wuhan:'No',
        abdominal_pain:'No',
        chest_pain:'No',
        chill:'No',
        cough:'No',
        diarrhea:'No',
        breathing_problems:'No',
        dyspnea:'No',
        joint_pain:'No',
        loss_of_appetite:'No',
        muscle_pain:'No',
        pneumonia:'No',
        sputum:'No',
        thirst:'No',
        fever:'No',
        flu:'No',
        headache:'No',
        malaise:'No',
        nausea:'No',
        physical_discomfort:'No',
        runny_nose:'No',
        sore_body:'No',
        throat_pain:'No',
        tired:'No',
        vomiting:'No'
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div>
          <h1 className="title">Predicting Covid19 mortality</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Age</Form.Label>
                <Form.Control 
                  type="text"
                  pattern="[0-9]*" 
                  placeholder="47" 
                  name="age"
                  value={formData.age}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.gender}
                  name="gender"
                  onChange={this.handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Country</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.country}
                  name="country"
                  onChange={this.handleChange}>
                  <option>Afghanistan</option>
                  <option>Algeria</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Cambodia</option>
                  <option>Bahrain</option>
                  <option>Belgium</option>
                  <option>Canada</option>
                  <option>China</option>
                  <option>Croatia</option>
                  <option>Egypt</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Hong Kong</option>
                  <option>India</option>
                  <option>Israel</option>
                  <option>Iran</option>
                  <option>Italy</option>
                  <option>Kuwait</option>
                  <option>Japan</option>
                  <option>Lebanon</option>
                  <option>Malaysia</option>
                  <option>Nepal</option>
                  <option>Phillipines</option>
                  <option>Russia</option>
                  <option>Singapore</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>South Korea</option>
                  <option>Switzerland</option>
                  <option>Taiwan</option>
                  <option>Thailand</option>
                  <option>UAE</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Finland</option>
                  <option>Vietnam</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Visited Wuhan?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.visiting_wuhan}
                  name="visiting_wuhan"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>From Wuhan?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.from_wzgab}
                  name="from_wuhan"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Abdominal?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.abdominal_pain}
                  name="abdominal_pain"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Chest Pain?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.chest_pain}
                  name="chest_pain"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Chill?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.chill}
                  name="chill"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Cough?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.cough}
                  name="cough"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Diarrhea?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.diarrhea}
                  name="diarrhea"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Breathing Problems?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.breathing_problems}
                  name="breathing_problems"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Dyspnea?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.dyspnea}
                  name="dyspnea"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Joint Pain?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.joint_pain}
                  name="joint_pain"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Loss Appetite?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.loss_of_appetite}
                  name="loss_of_appetite"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Muscle Pain?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.muscle_pain}
                  name="muscle_pain"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Pneumonia?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.pneumonia}
                  name="pneumonia"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Sputum?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.sputum}
                  name="sputum"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Thirst?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.thirst}
                  name="thirst"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Fever?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.fever}
                  name="fever"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Flu?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.flu}
                  name="flu"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Headache?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.headache}
                  name="headache"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Malaise?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.malaise}
                  name="malaise"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Nausea?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.nausea}
                  name="nausea"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Discomfort?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.physical_discomfort}
                  name="physical_discomfort"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Runny Nose?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.runny_nose}
                  name="runny_nose"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Sore Body?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.sore_body}
                  name="sore_body"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Throat?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.throat_pain}
                  name="throat_pain"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Tired?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.tired}
                  name="tired"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Vomiting?</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.vomiting}
                  name="vomiting"
                  onChange={this.handleChange}>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
        <br>
          </br>
          <br>
          </br>
        <div class="alert alert-warning" role="alert">
        <b>Important:</b> This is neither scientifically proven, nor has any
        medical implication. You should not take these calculated percentages 
        for granted. The results are <b>heavily</b> scewed because there are 
        not enough openly accesible Covid19 data on individual patient level.
        Most of the datapoints were recorded in China. The data quality is <b>not</b>
        great. Please seek professional advice. This is only a showcase for Predicting
        the mortality rate on individual cases with xgBoost. 
        </div>
        <br>
          </br>
        <div class="alert alert-primary" role="alert">
          
            Please refer to <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" class="alert-link">this Website</a> for professional advice.
        </div>
      </Container>
    );
  }
}

export default App;