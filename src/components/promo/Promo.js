import Heard from "../../images/heart-promo.svg";

const Promo = ({ timer }) => {
    return (
    <section className="promo">
        <div className="invite" >
            <div className="invite__skroll-block">
                <div className="invite__marryned">
                    <p className="margin-none fw-600 fs-32" >Илья</p>
                    <img src={Heard} alt="heart" />
                    <p className="margin-none fw-600 fs-32" >Лера</p>
                </div>
                <p className="margin-none invite__text" >Мы рады пригласить вас на торжество, которое станет одним из самых важных и запоминающихся событий в нашей жизни. Ваше присутствие сделает этот день еще более особенным и значимым для нас. Именно рядом с самыми близкими людьми мы хотим отпраздновать начало нового этапа нашей совместной жизни.</p>
            </div>
            <div className="invite__skroll-block">
                <p className="invite__date margin-none fw-600 fs-20" >16 января 2026</p>
                <div className="timer">
                    <p className="timer__title margin-none fs-20" >До начала свадьбы осталось:</p>
                    <div>
                        <p className="margin-none fw-600 fs-24" >{timer.days}</p>
                        <p className="margin-none" >дней</p>
                    </div>
                    <div>
                        <p className="margin-none fw-600 fs-24" >{timer.hours}</p>
                        <p className="margin-none" >часов</p>
                    </div>
                    <div>
                        <p className="margin-none fw-600 fs-24" >{timer.minutes}</p>
                        <p className="margin-none" >минут</p>
                    </div>
                    <div>
                        <p className="margin-none fw-600 fs-24" >{timer.seconds}</p>
                        <p className="margin-none" >секунд</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Promo;