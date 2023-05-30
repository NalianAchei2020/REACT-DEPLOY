import {Card} from './card';
import data from './data';
import './card.css';

export const Blog = () => {
    return(
    <>
    <div className="container-fliud" style={{backgroundColor:"lightblue" }}>
        <div className='heading'>
            <h3><b>EasyPlan Blog</b><br/>
            The Latest on Starting and Growing a Business</h3>
        </div><hr/><br/><br/>
    <section className="div1">
      <div className="row">

          {data.cardData.map((item) =>
          {
              return(
                  <Card key={item.id} img={item.img} title={item.title} link={`/Details/${item.id}`} />
              );
          }
          )}

      </div>
    </section>
    </div>
    </>
    );
}