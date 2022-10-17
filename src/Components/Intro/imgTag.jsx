import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';


function iconContact() {
    return(
        <div className='i-icons'>
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            <img src={Instagram} alt=""/>
        </div>
    )
}
function iconPeople() {
    return(
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={Boy} alt=""/>
        </div>
    )
}
// export {iconContact, iconPeople};
export  {iconContact, iconPeople};

 