import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function App() {
  return (
<Container>
<Row>
  <Col md="5">
  <form>
        <label for="fname" className="mt-4">First Name</label><br />
        <input type="text" id="fname" name="firstname" className="form-control" placeholder="Your name.."/><br />
        <label for="lname">Last Name</label><br />
        <input type="text" id="lname" name="lastname"className="form-control"  placeholder="Your last name.."/><br />
        <label for="country">Country</label><br />
        <select id="country" name="country" className="form-control">
              <option value="tunis">Tunis</option>
              <option value="Sousse">Sousse</option>
              <option value="Sfax">Sfax</option>
            </select><br />
            <label for="subject">Subject</label><br />
            <textarea
            className="form-control"/> <br/>
            <div className="text-center mt-4">
            <Button as="input" type="submit" value="Submit"/>{' '}</div>
            
      </form>
  </Col>
  <Col md="1"></Col>
  <Col md="5">
  <p className="h1 text-center mt-4">Hey, let’s meet!</p><br/> 
  <p className="h5 text-center mt-3"> +216 27 387 128 <br/><br/> jdayintissar@gmail.com</p><br/>
  <p className="h3 text-center mt-4">SOCIAL</p><br/>

  <div className="text-center" >
<Image src="facebook.png" className="p-2"style={{width:50}} ></Image>
<Image src="instagram.png" className="p-2" style={{width:50}}></Image>
<Image src="twitter-logo.png" className="p-2"style={{width:50}} ></Image>
<Image src="linkedin.png" className="p-2"style={{width:50}} ></Image>
</div>
  
  </Col>
</Row> 
</Container>
  );
}

export default App;
