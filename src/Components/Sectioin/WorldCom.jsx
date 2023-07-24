import { Fade } from "react-awesome-reveal";
import micro from "../../assets/Company/micro.jpg"
import acc from "../../assets/Company/accenture.png"
import orc from "../../assets/Company/oracel.png"


const WorldCom = () => {
    return (
        <div>
            <p className="font-semibold text-pink-600"> <Fade direction="up"><span className="border-0 border-b-4 border-orange-500 rounded-lg">Top 3 IT Companies Worldwide</span></Fade></p>

            <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">

               <Fade direction="left">
               <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={micro} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Microsoft Corporation</h2>
                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
               </Fade>

                <Fade direction="down">
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={acc} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Accenture</h2>

                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade direction="right">
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={orc} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Oracle</h2>
                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default WorldCom;