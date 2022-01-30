import { useState } from "react";
import API from "./api";
import './scss/style.scss';
import { ListGroup } from "react-bootstrap";
import {useCopy} from './hooks'
const App = () => {
  const [Copy]=useCopy();
  const [bool, setBool] = useState("");
  const [link, setLink] = useState([]);
const [helper,setHelp]=useState("");
  
  const submitFunction = async (e) => {
    e.preventDefault();
    const { data } = await API.get(`/shorten?url=${bool}`);
    setLink([...link, data.result.full_short_link]);
   const copyhelper=data.result.full_short_link;
   setHelp(copyhelper)
  };
  const copyFunction=()=>{
    Copy(helper)
  }
  console.log(link);

  return (
    <div className="container mt-5 custcont">
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <form onSubmit={submitFunction} className="d-flex">
            <input
              type="text"
              className="form-control formcustom"
              placeholder="Shorten a link here"
              value={bool}
              onChange={(e) => setBool(e.target.value)}
            ></input>
            <button onClick={submitFunction} className=" btn ms-4 shortenbtn">
              <span className="color">Shorten It!</span>  
            </button>
          </form>
          
        </div>
      </div>
      <div className="col-md-8 mt-3 m-auto">
        <ListGroup>
          {link?.map((item) => {
            return (
              <ListGroup.Item key={item}>
                <a href={item}>{item}</a>
                <button onClick={copyFunction} className=" btn btn-warning float">
              <span className="color float-right">Copy!</span>  
            </button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default App;

