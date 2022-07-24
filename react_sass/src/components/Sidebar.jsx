import SocialNetworks from './SocialNetworks';


import Avatar from '../img/f.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="José Neto" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <p>informações de contato</p>
      <a href="" className="btn">Dowload Currículo</a>
    </aside>
  );
  
};

export default Sidebar;