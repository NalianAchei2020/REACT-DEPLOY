
import data from './data';
import { useParams} from 'react-router-dom';
import './card.css';


export const Details = () => {

    const { id } = useParams();

    const getData = data.cardData[id - 1];
    console.warn(getData);

    return(
    <>
    <section className='container-lg'>
        <div className='r0w'>
       <img src={getData.img} className='img-fluid' alt=''/><br/><br/><br/>
        <h5>{getData.title}</h5>
        <p>{getData.desc}</p>
        </div>
        </section>
    </>
    );
}