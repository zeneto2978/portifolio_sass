import {AiFillPhone, AiOutLineMail, AiFillEnviroment} from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';


const InformationContainer = () => {
  return 
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(38) 99999-090909</p>
            </div>
        </div>
    </section>
  
};

export default InformationContainer;