import '../styles/Banner.css'
import logo from '../assets/logo.jpg'

function Banner(){
    return (
        
        <div className= 'lmj-banner'> 
                <img src={logo} alt= 'la maison jungle' className='lmj-logo'></img>
             <h1>La maison jungle</h1>
        </div>
    )
}
        

export default Banner