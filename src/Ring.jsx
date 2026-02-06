import react from "react";
import { Link } from "react-router-dom";
import "./Detail.css"
const Ring=()=>{
    return(
        <div className="ring">
            <div className="ringAreaLeft">
                <Link to="/" className="return">Retour</Link>
            </div>
            <div className="centerRing"></div>
            <div className="centerRing2"><div className="centerRingCenter"></div></div>
            <div className="ringAreaRight">

                
            </div>
        </div>
    )
}
export default Ring