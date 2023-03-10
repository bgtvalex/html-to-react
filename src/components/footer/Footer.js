import vk from './img/vk.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import gitHub from './img/gitHub.svg'
import linkedIn from './img/linkedIn.svg'

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
          </ul>
          <div className="copyright">
            <p>© 2023 bgtvalex@ya.ru</p>
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;