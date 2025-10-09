import Heard from "../../images/heart-promo.svg";

const Promo = ({ timer }) => {
    return (
    <section className="promo">
        <div className="invite" >
            <div className="invite__skroll-block">
                <div className="invite__marryned">
                    <p className="margin-none fs-32 ff-philosopher" >Илья</p>
                    <img src={Heard} alt="heart" />
                    <p className="margin-none fs-32 ff-philosopher" >Лера</p>
                </div>
                <p className="margin-none invite__text" >Мы рады пригласить вас на торжество, которое станет одним из самых важных и запоминающихся событий в нашей жизни. Ваше присутствие сделает этот день еще более особенным и значимым для нас. Именно рядом с самыми близкими людьми мы хотим отпраздновать начало нового этапа нашей совместной жизни.</p>
            </div>
            <div className="invite__skroll-block">
                <div className="invite__date margin-none fw-400 fs-20" >
                    <p className="margin-none ff-caveat fs-32">16 </p>
                    <p className="margin-none">января </p>
                    <p className="margin-none ff-caveat fs-32">2026</p>
                </div>
                <div className="timer">
                    <p className="timer__title margin-none fs-20" >До начала свадьбы осталось:</p>
                    <div>
                        <p className="margin-none fw-400 fs-24 ff-caveat" >{timer.days}</p>
                        <p className="margin-none fs-20" >дней</p>
                    </div>
                    <div>
                        <p className="margin-none fw-400 fs-24 ff-caveat" >{timer.hours}</p>
                        <p className="margin-none fs-20" >часов</p>
                    </div>
                    <div>
                        <p className="margin-none fw-400 fs-24 ff-caveat" >{timer.minutes}</p>
                        <p className="margin-none fs-20" >минут</p>
                    </div>
                    <div>
                        <p className="margin-none fw-400 fs-24 ff-caveat" >{timer.seconds}</p>
                        <p className="margin-none fs-20" >секунд</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Promo;