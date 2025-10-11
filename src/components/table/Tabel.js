import React from "react";

const Table = () => {
    const [isModal, setModal] = React.useState(false);

    const clickOnButton = () => setModal(!isModal);

    return (
        <section className="table-section">
            <h2 className="fw-400 margin-none fs-24" >Программа торжества</h2>
            <div className="day" >
                <h3 className="margin-none fw-400 fs-20">15 января, четверг</h3>
                <ul className="teble-container">
                    <div className="line"></div>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">После 14:00</p>
                            <p className="margin-none">Заезд для всех желающих. Это свободный день — можете гулять по городу, отдыхать.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="day" >
                <h3 className="margin-none fw-400 fs-20">16 января, пятница</h3>
                <ul className="teble-container">
                    <div className="line"></div>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">09:00</p>
                            <p className="margin-none">Завтрак</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">11:45</p>
                            <p className="margin-none">Роспись в ЗАГСе</p>
                        </div>
                    </li>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">12:30 - 15:30</p>
                            <p className="margin-none">Party-bus с фуршетом</p>
                            <p className="margin-none">Остановки на пути: 1) Исаакиевский собор, 2) Шуваловский парк</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">15:30 - 17:00</p>
                            <p className="margin-none">Свободное время: возможность переодеться, сделать фото на полароид в зоне пожеланий, снять забавные видео</p>
                        </div>
                    </li>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">17:00 - 22:00</p>
                            <p className="margin-none">Праздничный банкет</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">22:30</p>
                            <p className="margin-none">After-party: уютные посиделки с душевными разговорами</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="day" >
                <h3 className="margin-none fw-400 fs-20">17 января, суббота</h3>
                <ul className="teble-container">
                    <div className="line"></div>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">10:00</p>
                            <p className="margin-none">Завтрак</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">11:00</p>
                            <p className="margin-none">Сауна и бассейн</p>
                        </div>
                    </li>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">14:00</p>
                            <p className="margin-none">Шашлык и плов</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">15:00</p>
                            <p className="margin-none">"Обязательная" активность: “Своя игра" с ведущими-молодоженами, настольные игры, ролевая игра "Убийство в особняке", "Among Us"</p>
                            <button onClick={() => clickOnButton()} className="call-popup">{ !isModal ? 'Подробности про Among Us' : 'Скрыть подробности' }</button>
                            { isModal && <div><p className="margin-none" >Игра, благодаря которой мы познакомились с большинством из вас. Это будет короткая игра, в которой участвует 8 человек: Илья, Лера, Даша, Слава, Катя, Леша, Юра. Не забудьте скачать игру на свое устройство (телефон/плашнет/ноутбук). Если у вас будет возможность записать экран во время игры — отдельная благодарность. Смонтируем видео на память, каждый получит памятный подарок.</p></div>}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="day" >
                <h3 className="margin-none fw-400 fs-20">18 января, воскресенье</h3>
                <ul className="teble-container">
                    <div className="line"></div>
                    <li className="table-item">
                        <div className="table-item__indicstor"></div>
                        <div className="table-item__card">
                            <p className="margin-none">10:00</p>
                            <p className="margin-none">Завтрак</p>
                        </div>
                    </li>
                    <li className="table-item table-item_reverse">
                        <div className="table-item__indicstor table-item__indicstor_reverse"></div>
                        <div className="table-item__card">
                            <p className="margin-none">12:00</p>
                            <p className="margin-none">Завершение праздника и выезд из коттеджа</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Table