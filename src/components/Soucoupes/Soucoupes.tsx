import style from "./Soucoupes.module.css"
import Soucoupes1 from "../../assets/img/soucoupes/soucoupe_1.module.svg"
import Soucoupes2 from "../../assets/img/soucoupes/soucoupe_2.module.svg"
import Soucoupes3 from "../../assets/img/soucoupes/soucoupe_3.module.svg"

function Soucoupes() {
    return (
        <>
            <img
                style={{ transform: `scale(.6)` }}
                className={style.generic + " " + style.s1}
                src={Soucoupes1}
                alt=""
            />
            <img
                style={{ transform: `scale(.4)` }}
                className={style.generic + " " + style.s2}
                src={Soucoupes2}
                alt=""
            />
            <img
                style={{ transform: `scale(1.3)` }}
                className={style.generic + " " + style.s3}
                src={Soucoupes3}
                alt=""
            />
        </>
    )
}

export default Soucoupes
