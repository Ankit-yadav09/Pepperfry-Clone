import ban from '../common/ban.module.css'

const Banner = () => {
    return (
        <div>
            <div className={ban.cont}>
                <div className={ban.sub}>
                    <div className={ban.t}>
                        <h1>We've Got Your Style</h1>
                        <p>Your home is a reflection of you.
                            Nail your aesthetic with products our stylists love
                            and recommend</p>
                        <a href="#">View all Styles</a>
                    </div>
                    <div className={ban.dis}>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_1_2x_22042022.jpg'} alt="" />
                        <h3>Modern</h3>
                        <p>Form Meets Function</p>
                    </div>
                    <div className={ban.dis}>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_2_2x_22042022.jpg'} alt="" />
                        <h3>Traditional</h3>
                        <p>Old World Charm</p>
                    </div>
                    <div className={ban.dis}>
                        <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_3_2x_22042022.jpg'} alt="" />
                        <h3>Industrial</h3>
                        <p>Perfect Imperfections</p>
                    </div>
                </div>
            </div>
            <div className={ban.head}>
                <h1>Top Brands To Choose From</h1>
                <div className={ban.brands}>
                <div className={ban.brands}>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_1_2x_22042022-1.jpg'} alt="" />
                </div>
                <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_2_2x_22042022-1.jpg'} alt="" />

                </div>
                <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_3_2x_22042022-1.jpg'} alt="" />

                </div>
                <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_4_2x_22042022-1.jpg'} alt="" />

                </div>
                <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_5_2x_22042022-1.jpg'} alt="" />

                </div>
                <div>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_6_2x_22042022-1.jpg'} alt="" />

                </div>
                </div>

                
            
            </div>
            <div className={ban.ads}>
                <div className={ban.aim}>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Mattress_Block_Web_2X_04032022.jpg'} alt="" />
                </div>
                <div className={ban.aim}>
                    <img src={'https://ii2.pepperfry.com/media/wysiwyg/banners/Modular_Block_Web_2X_04032022.jpg'} alt="" />
                </div>
            </div>

            <div className={ban.common}>
            
            </div>
            <div className={ban.rev}>
                <h1>Happy Customers, Happy Us</h1>
                <div className={ban.rim}>

                </div>
            </div>
        </div>
    )
}
export { Banner }