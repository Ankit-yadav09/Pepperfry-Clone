import { Carousel} from "antd"
//import 'antd/dist/antd.css'
import mov from '../common/mov.module.css'

const Item = () => {
    const settings = {
        dots:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
    
    return(
        <div style={{width:'100%'}}>
           <div>
               <div>
                <h1 className={mov.head}>Home Décor You Can't Ignore</h1>
               </div>
               {/* <div>
                   <button>Prev</button>
                   <button>Next</button>
               </div> */}
               <div className={mov.image}>
                   <Carousel autoplay autoplaySpeed={8000} {...settings}>
                       

                    <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_22042022.jpg'} alt="" />
                        <h3>Wall Plates and Tiles</h3>
                        <p>Treat Your Eyes</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_2_2x_22042022.jpg'} alt="" />
                        <h3>Pots & Planters</h3>
                        <p>Bring Nature In</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_22042022.jpg'} alt="" />
                        <h3>Floor Lamps</h3>
                        <p>Utility Meets Aesthetics</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_4_2x_22042022.jpg'} alt="" />
                        <h3>Vases</h3>
                        <p>Starts at Rs. 200</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_5_2x_22042022.jpg'} alt="" />
                        <h3>Wall Mirrors</h3>
                        <p>A Spacious Look</p>
                    </div>
                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_6_2x_22042022.jpg'} alt="" />
                        <h3>Table Lamps</h3>
                        <p>No Eye Strain</p>
                    </div>
                   </Carousel>
               </div>
           </div>
        </div>
    )
}
export default Item