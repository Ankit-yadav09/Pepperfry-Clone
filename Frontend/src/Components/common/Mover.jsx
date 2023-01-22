import { Carousel} from "antd"
//import 'antd/dist/antd.css'
import mov from '../common/mov.module.css'

const Mover = () => {
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
                <h1 className={mov.head}>Your Pocket-Friendly Shoppe</h1>
               </div>
               {/* <div>
                   <button>Prev</button>
                   <button>Next</button>
               </div> */}
               <div className={mov.image}>
                   <Carousel autoplay autoplaySpeed={8000} {...settings}>
                       

                    <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_22042022.jpg'} alt="" />
                        <h3>Sectional Sofas</h3>
                        <p>Under Rs. 40,000</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_22042022.jpg'} alt="" />
                        <h3>Office Chairs</h3>
                        <p>Under Rs. 7000</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_22042022.jpg'} alt="" />
                        <h3>End Tables</h3>
                        <p>Under Rs. 5000</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_4_2x_22042022.jpg'} alt="" />
                        <h3>Coffee Tables</h3>
                        <p>Under Rs. 10,000</p>
                    </div>

                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_5_2x_22042022.jpg'} alt="" />
                        <h3>Wardrobes</h3>
                        <p>Under Rs. 30,000</p>
                    </div>
                    <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_6_2x_22042022.jpg'} alt="" />
                        <h3>Bean Bags</h3>
                        <p>Under Rs. 1,000</p>
                    </div>
                   </Carousel>
               </div>
           </div>
        </div>
    )
}
export default Mover