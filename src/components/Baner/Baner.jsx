import Button from '../Button/Button'
import BannerImage from '../../assets/images/baner.svg'
import './Baner.css'

export default function Baner(){
    return(
        <div className='banner'>
            <div className="banner__left">
                <h1 className="baner__title">Your everyday<br/> tasks, automated.</h1>
                <div className="banner__desc">
                    <p>
                        Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.
                    </p>
                </div>
                <div className="banner-button__block">
                    <Button>Book a demo</Button>
                    <a href='#' className="block__link">Learn more {'>'}</a>
                </div>
            </div>
            <div className="banner__right">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    )
}