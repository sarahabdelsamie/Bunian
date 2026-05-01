import heroImg from '../../assets/Card.png'
import Style from '../Hero/Hero.module.css'


export default function Hero() {
    return (
        <section className={Style.hero}  >
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className=" col-md-6 ">
                        <h1 className={Style.h1}>
                            The <span>#1</span> Job Board for Hiring or Find your next job in <span>Egypt</span>
                        </h1>

                        <p className={Style.p}>
                            Each month, more than 3 million job seekers turn to website in their search for work,
                            making over 140,000 applications every single day
                        </p>
                    </div>

                    <div className="hero-image text-center col-md-6">
                        <img src={heroImg} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}