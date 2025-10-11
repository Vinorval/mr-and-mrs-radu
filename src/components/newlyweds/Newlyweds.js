import ArrFirst from "../../images/Arr1.svg";
import ArrSecond from "../../images/Arr2.svg";

import Groom from "../../images/newlyweds/groom.jpg";
import Bride from "../../images/newlyweds/bride.jpg";

const Newlyweds = () => {
    return (
        <section className="newlyweds" >
            <div className="newlyweds_background" >
            <div className="newlyweds__card" >
                <div className="newlyweds__photo-block" >
                    <img alt="photo newlyweds" className="newlyweds__photo" src={Groom} />
                    <p className="mx-auto fs-24" >Илья</p>
                </div>
                <div className="newlyweds__indicator">
                    <img alt="arrou" className="newlyweds__arrou" src={ArrFirst} />
                    <p className="newlyweds__name fs-3m" >Жених</p>
                </div>
            </div>
            <div className="newlyweds__card newlyweds__card_second" >
                <div className="newlyweds__photo-block newlyweds__photo-block_second" >
                    <img alt="photo newlyweds" className="newlyweds__photo" src={Bride} />
                    <p className="mx-auto fs-24" >Лера</p>
                </div>
                <div className="newlyweds__indicator newlyweds__indicator_second">
                    <img alt="arrou" className="newlyweds__arrou newlyweds__arrou_second" src={ArrSecond} />
                    <p className="newlyweds__name fs-3m" >Невеста</p>
                </div>
            </div>
            </div>
        </section>
    )
};

export default Newlyweds;