import { Carousel } from 'antd'



import { Link, Outlet } from 'react-router-dom'
import hero from '../common/hero.module.css'
import  {Banner}  from './Banner'
import  Decor  from './Decor'
import  Item  from './Item'
import  Mover  from './Mover'

const Hero = () => {

    return (
        <div className={hero.btm}>
            <section className={hero.box}>
                {/* <section className={hero.bgcontainer}> */}
                <Carousel autoplay className={hero.holder}>
                    <div>
                        <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_Web_2X_29042022_nd.jpg'} alt="" />
                    </div>
                    <div>
                        <img src={'https://ii3.pepperfry.com/media/wysiwyg/banners/HB02_2X_22042022.jpg'} alt="" />
                    </div>
                    <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_2X_22042022.jpg'} alt="" />
                    </div>
                    <div>
                        <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/HB03_2X_22042022.jpg'} alt="" />
                    </div>
                </Carousel>
                {/* </section> */}
                <section className={hero.ads}>
                    <section className={hero.adsimage}>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Scandinavian_RHS_26042022.jpg'} alt="" />
                    </section>
                </section>
            </section>
            <section className={hero.body}>

                <h1>Shop By Room</h1>
                <section className={hero.cat}>
                    <section className={hero.nav}>
                      <Link to={`/sofa`}><img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1__2x_22042022.jpg'} alt="" /></Link>
                        <p>Living Room</p>
                    </section>
                    <section className={hero.nav}>
                       <Link to={`/table`}><img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2__2x_22042022.jpg'} alt="" /></Link>
                        <p>Work From Home</p>
                    </section>
                    <section className={hero.nav}>
                       <Link to={`/sofa`}> <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3__2x_22042022.jpg'} alt="" /></Link>
                        <p>Bedroom</p>
                    </section>
                    <section className={hero.nav}>
                       <Link to={'/table'}> <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4__2x_22042022.jpg'} alt="" /></Link>
                        <p>Kids Room</p>
                    </section>
                    
                </section>
                <section className={hero.option}>
                    <h1 className={hero.op}>What's Everyone Eyeing ?</h1>
                    <section className={hero.hq}>
                        <section className={hero.x4}>
                            <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_22042022.jpg'} alt="" />
                        </section>
                        <section className={hero.x4}>
                            <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_22042022.jpg'} alt="" />

                        </section>
                        <section className={hero.x1}>

                            <div>
                            <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_22042022.jpg'} alt="" />
                            </div>
                            <div>
                            <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_22042022.jpg'} alt="" />
                            </div>
                            
                        </section>
                        <section className={hero.x1}>
                            <div>
                            <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_22042022.jpg'} alt="" />
                            </div>
                            
                            <div>
                            <img src={'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_22042022.jpg'} alt="" />
                            </div>


                        </section>
                    </section>


                </section>
                <Mover/>
                <Decor/>
                <Item/>
                
            </section>
            <Banner/>
        </div>
    )
}
export default   Hero 