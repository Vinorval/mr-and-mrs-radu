import ArrFirst from "../../images/Arr1.svg";
import ArrSecond from "../../images/Arr2.svg";

import Groom from "../../images/newlyweds/groom.jpg";
import Bride from "../../images/newlyweds/bride.jpg";

const Newlyweds = () => {
    return (
        <section className="newlyweds" >
            <div className="newlyweds__card mx-auto" >
                <div className="newlyweds__photo-block" >
                    <img alt="photo newlyweds" className="newlyweds__photo" src={Groom} />
                    <p className="mx-auto fs-24" >Илья</p>
                </div>
                <div className="newlyweds__indicator">
                    <img alt="arrou" className="newlyweds__arrou" src={ArrFirst} />
                    <p className="newlyweds__name fs-32" >Жених</p>
                </div>
            </div>
            <div className="newlyweds__card mx-auto" >
                <div className="newlyweds__photo-block newlyweds__card_second" >
                    <img alt="photo newlyweds" className="newlyweds__photo" src={Bride} />
                    <p className="mx-auto fs-24" >Лера</p>
                </div>
                <div className="newlyweds__indicator newlyweds__indicator_second">
                    <img alt="arrou" className="newlyweds__arrou" src={ArrSecond} />
                    <p className="newlyweds__name fs-32" >Невеста</p>
                </div>
            </div>
        </section>
    )
};

export default Newlyweds;