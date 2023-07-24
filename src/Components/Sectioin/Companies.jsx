import { Fade } from "react-awesome-reveal";
import brain from "../../assets/Company/brain.png"
import datasoft from "../../assets/Company/data_soft_logo.jpg"
import tiger from "../../assets/Company/tigerit.jpg"
import WorldCom from "./WorldCom";


const Companies = () => {
    return (
        <div>
            <div className="flex justify-center items-center md:mt-20 mt-5 md:mb-20 mb-5">
                <h1 className="text-3xl font-bold text-blue-950"><Fade> Top IT Companies</Fade></h1>
            </div>
            <p className="font-semibold text-pink-600"> <Fade direction="up"><span className="border-0 border-b-4 border-orange-500 rounded-lg">Top 3 IT Companies in Bangladesh</span></Fade></p>
            
            <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
           
              <Fade direction="left">
              <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={brain} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">Brain Station 23</h2>
                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
              </Fade>
           
                <Fade direction="down">
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={datasoft} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">DataSoft</h2>
                       
                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade direction="right">
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={tiger} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">TigerIT</h2>
                        <div className="card-actions">
                            <button className="btn-sm rounded btn-accent text-white">View Details</button>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
            
          
          <div className="md:mt-20 mt-5">
                <WorldCom></WorldCom>
            </div>
        </div>
    );
};

export default Companies;