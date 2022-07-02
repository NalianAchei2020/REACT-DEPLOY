import {Link} from 'react-router-dom';
import './card.css';

export const Card = (props) => {
    return(
        <>
        <div className="coli">
          <div className="con">
              <img src={props.img} className="image" alt=""/><hr></hr>
              <div className="body">
                  <h5 className="title"><b>{props.title}</b></h5><br/>
                      <Link to={props.link} className="btn btn-primary">Details</Link>
              </div>
          </div>
          </div>
        </>
    );
}