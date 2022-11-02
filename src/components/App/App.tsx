import './app.scss';
import { motion, Variant } from 'framer-motion';

// import the assets we will be using
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import { useRef } from 'react';
const images = {img1, img2, img3, img4, img5, img6, img7, img8}

// motion variant
const cardVariant: {initial?: Variant, animate?: Variant} = {
    // initial: (custom) => ({
    //     y: -60, opacity:0,
    //     x: (custom % 2 === 0) ? 50 : -50,
    // }),
    // animate: (custom) => ({
    //     y:0, opacity:1, x:0,
    //     transition: {
    //         duration: .5,
    //         delay: custom * 0.2,
    //         ease: "easeOut"
    //     }
    // })
};


const App = () => {
    const imgParentRef = useRef<HTMLDivElement>({} as HTMLDivElement)

    return (
        <div className="AppMain">
            <div className="AppTitle">STANLEY TO!</div>
            <motion.div className="imgParent" ref={imgParentRef}>
                <motion.div className="imgGeneral" drag="x" dragConstraints={imgParentRef} dragPropagation>
                    {Object.values(images).map((item, index) => {
                        return (
                            <motion.div className="ImgCvr" key={item} variants={cardVariant} initial="initial" animate="animate" custom={index}>
                                <img src={item} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}
export default App;