import { Carousel } from "antd"

import dec from '../common/dec.module.css'
const Decor = () => {

    const settings = {
        dots:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
    return(
        <div>
            <div>
                <div>
                    <h1 className={dec.head}>Ready For The New?</h1>
                </div>
                <div className={dec.image}>
                    <Carousel {...settings} autoplay autoplaySpeed={8000}>
                        <div>
                            <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_1_2x_22042022.jpg'} alt="" />
                            <h3>The Mahestica Collection</h3>
                            <p>Elegant Geometric Patterns</p>
                        </div>
                        <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_22042022.jpg'} alt="" />
                            <h3>The Scandinavian Collection</h3>
                            <p>Bring Home Hygge</p>
                        </div>
                        <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_3_2x_22042022.jpg'} alt="" />
                            <h3>The Vinca Collection</h3>
                            <p>Time-Honoured Patterns</p>
                        </div>

                        <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_4_2x_22042022.jpg'} alt="" />
                        <h3>The Matrix Collection</h3>
                            <p>Geometric Grids</p>
                        </div>
                        <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_5_2x_22042022.jpg'} alt="" />
                        <h3>The Kamchini Collection</h3>
                            <p>Blue Pottery Tiles</p>
                        </div>
                        <div>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_6_2x_22042022.jpg'} alt="" />
                        <h3>The Perdue Collection</h3>
                            <p>Go Bold With Gold</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export  default Decor
