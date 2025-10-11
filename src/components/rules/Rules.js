import happy from "../../images/recommendations/happy.png";
import shoose from "../../images/recommendations/shoose.png";
import swimm from "../../images/recommendations/swimm.png";
import money from "../../images/recommendations/money.png";
import color from "../../images/recommendations/color.png";
import flower from "../../images/recommendations/flower.png";

import smoke from "../../images/rules/sigarets.png";
import sleep from "../../images/rules/sleep.png";
import shooseRules from "../../images/rules/shoose.png";
import woter from "../../images/rules/woter.png";

const Ruls = () => {
    return (
        <section className="rules-section" >
            <div className="cards-block">
                <h2 className="margin-none fw-400 fs-24">Полезные рекомендации</h2>
                <ul className="cards-block__list margin-none">
                    <div className="card card_type_small" >
                        <img alt="symbol card" src={happy} />
                        <h3 className="fs-20 margin-none fw-400">Настроение в первую очередь</h3>
                        <p className="margin-none" >Возьмите с собой хорошее настроение — это самый важный атрибут нашего праздника! Именно оно создаст особую атмосферу торжества.</p>
                    </div>
                    <div className="card card_type_small" >
                        <img alt="symbol card" src={shoose} />
                        <h3 className="fs-20 margin-none fw-400">Удобство превыше всего</h3>
                        <p className="margin-none" >Удобная обувь станет вашим лучшим спутником на празднике! Нас  ждет много танцев, прогулок и незабываемых моментов.</p>
                    </div>
                    <div className="card card_type_small" >
                        <img alt="symbol card" src={swimm} />
                        <h3 className="fs-20 margin-none fw-400">Захватите купальные принадлежности</h3>
                        <p className="margin-none" >На территории коттеджа вас ждет прекрасная сауна и бассейн! Не упустите свою возможность прекрасно провести время во второй день торжества.</p>
                    </div>
                    <div className="card" >
                        <img alt="symbol card" src={money} />
                        <h3 className="fs-20 margin-none fw-400">Лучший подарок — ваш визит</h3>
                        <p className="margin-none" >В этот важный для нас период жизни, когда мы находимся в поиске своего уютного гнездышка и живем на расстоянии, мы будем искренне рады вашим добрым пожеланиям! Если же вы хотите подарить нам что-то материальное, то финансовая поддержка будет для нас самой желанной. Но помните, главное – это ваши присутствие и любовь!</p>
                    </div>
                    <div className="card" >
                        <img alt="symbol card" src={color} />
                        <h3 className="fs-20 margin-none fw-400">Поддержите нашу цветовую палитру</h3>
                        <p className="margin-none" >Мы будем очень рады, если вы поддержите цветовую гамму нашей свадьбы! Это поможет создать единое визуальное настроение нашего особенного дня.</p>
                        <ul className="card__colors">
                            <li className="card__circle card__circle_color_dark" />
                            <li className="card__circle card__circle_color_blue" />
                            <li className="card__circle card__circle_color_grey" />
                            <li className="card__circle card__circle_color_brown" />
                            <li className="card__circle card__circle_color_light" />
                        </ul>
                    </div>
                    <div className="card" >
                        <img alt="symbol card" src={flower} />
                        <h3 className="fs-20 margin-none fw-400">Ваша улыбка – наш лучший цветок!</h3>
                        <p className="margin-none" >Мы безмерно ценим вашу заботу и желание порадовать нас! В этот особенный день мы просим вас не приносить цветы, ведь их красота так мимолетна. Для нас самым ценным подарком будет ваша искренняя улыбка, добрые пожелания и ваше присутствие – это то, что останется с нами навсегда.</p>
                    </div>
                </ul>
            </div>
            <div className="cards-block">
                <h2 className="margin-none fw-400 fs-24">Правила проживания в коттедже</h2>
                <ul className="cards-block__list margin-none">
                    <div className="card card_type_big" >
                        <img alt="symbol card" src={smoke} />
                        <p className="margin-none" >Категорически запрещено курение любых курительных средств внутри дома и банного комплекса. Курение разрешено исключительно на придомовой территории.</p>
                    </div>
                    <div className="card card_type_big" >
                        <img alt="symbol card" src={sleep} />
                        <p className="margin-none" >Запрещается самостоятельное перемещение мебели и предметов интерьера в доме, в банном комплексе и на прилегающей территории.</p>
                    </div>
                    <div className="card card_type_big" >
                        <img alt="symbol card" src={shooseRules} />
                        <p className="margin-none" >В помещениях, предназначенных для сна и отдыха, а также в банном комплексе нельзя находиться в уличной обуви.</p>
                    </div>
                    <div className="card card_type_big" >
                        <img alt="symbol card" src={woter} />
                        <p className="margin-none" >Запрещены прыжки в бассейн. Необходимо избегать перелива воды из бассейна.</p>
                    </div>
                </ul>
            </div>
            <div className="footer">
                <p className="margin-none" >С любовью, Илья и Лера</p>
                <div className="footer__point" />
                <p className="margin-none footer__link" >MrAndMrsRadu.com</p>
            </div>
        </section>
    )
};

export default Ruls;