import '../styles/components-style/ContainerCards.css';
import Cards from './Cards';

function ContainerCards(){
    return(
        <div className='containerSection'>
           <ul className='listCard'>
           <Cards />
           <Cards />
           <Cards />
           <Cards />
           </ul>
        </div>
    )
}

export default ContainerCards;