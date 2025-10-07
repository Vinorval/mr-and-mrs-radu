import HouseLocation from "../../images/location-house.svg";
import ZagsLocation from "../../images/location-zags.svg";

const Maps = () => {
    return (
        <section className="maps-section" >
            <h2 className="margin-none fs-32 fw-400" >Место проведения</h2>
            <div className="adress" >
                <div className="adress__title">
                    <img alt="location-house" src={HouseLocation} />
                    <h3 className="margin-none fw-400">Коттедж "House in Dibun"</h3>
                </div>
                <p className="adress__adress mx-auto">Адрес: Санкт-Петербург, пос. Песочный, ул. Пограничная, дом 97</p>
                <div className="maps-block">
                    <iframe className="maps-block__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A29694658c23443a82b7e3e57fd367697500da346375611f476df051b3f301000&amp;source=constructor" width="320" height="240" frameborder="0"></iframe>
                    <div className="maps-block__text" >
                        <p className="margin-none">Для вашего удобства, добраться до нашего свадебного коттеджа проще всего на электричке.</p>
                        <p className="margin-none">Возьмите поезд с Финляндского вокзала в направлении Рощино. Ваша станция – Дибуны.</p>
                        <p className="margin-none">Отсюда всего 15 минут пешком, и вы у цели! Мы будем ждать вас там.</p>
                    </div>
                </div>
            </div>
            <div className="adress" >
                <div className="adress__title">
                    <img alt="location-zags" src={ZagsLocation} />
                    <h3 className="margin-none fs-32 fw-400">ЗАГС</h3>
                </div>
                <p className="adress__adress mx-auto">Адрес: 1-я Красноармейская улица, 6</p>
                <div className="maps-block">
                    <iframe className="maps-block__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb7f5fc9da2858343055fb2c764738318c0dd82ed6e92c6f6114118736f97eee&amp;source=constructor" width="320" height="240" frameborder="0"></iframe>
                    <div className="maps-block__text">
                        <p className="margin-none">Чтобы не опоздать к главному моменту торжества, воспользуйтесь следующим маршрутом:</p>
                        <p className="margin-none">Сядьте на электричку на станции Дибуны в направлении Финляндский вокзал.</p>
                        <p className="margin-none">Сойдите в городе на станциях Удельная или Финляндский вокзал. Сделайте переход в метро (на станции Удельная и Площадь Ленина соответственно) и направляйтесь на станцию Технологический институт (будьте внимательны: синяя ветка – Технологический институт-2, красная – Технологический институт-1).</p>
                        <p className="margin-none">От метро до дверей ЗАГСа всего 5 минут легкой прогулки. Мы с нетерпением будем ждать вас в назначенное время!</p>
                    </div>
                </div>
            </div>
            <div className="background-gradient"></div>
        </section>
    );
};

export default Maps;