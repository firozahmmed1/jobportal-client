import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Fresh = () => { 
    const [freshers, setFresher] = useState([]);
    const [show, setShow] = useState(true)
     useEffect(()=>{
        axios.get('http://localhost:5000/allfresher')
        .then(res => setFresher(res.data))
     },[])
    
     const handdleAlldata =()=>{
           setShow(false)
           axios.get('http://localhost:5000/freshers')
           .then(res => {
            setFresher(res.data)
           })
     }

    return (
        <div className="mb-4">
            <Tabs>
                <TabList>
                    <Tab><span className="font-semibold text-2xl">Fresher Jobs</span></Tab>

                </TabList>

                <TabPanel>
                    <div className="grid md:grid-rows-1 gap-5">
                        {
                            freshers.map(fr => (
                                <div key={fr._id} className="card h-52 w-full  shadow-xl">
                            <div className="card-body grid grid-cols-2 md:grid-cols-3 gap-5">
                                <div>
                                    <div className="avatar">
                                        <div className="w-24 rounded md:flex items-center justify-center">
                                            <img src={fr?.image} />
                                        </div>
                                    </div>
                                </div>

                                <div className="md:flex justify-between items-center ">
                                    <div className="items-start">
                                        <p className="md:text-2xl font-semibold">{fr?.position}</p>
                                        <p className="md:text-xl font-semibold text-green-700">{fr?.company_name}</p>
                                    </div>

                                    <div className="md:flex justify-between">
                                        <p className="md:text-xl font-semibold flex items-center justify-center"><span><TfiLocationPin></TfiLocationPin></span> <span>{fr?.location}</span></p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end">
                                    <Link to='/singlepage'><button className="btn btn-sm btn-secondary normal-case hover:bg-pink-100 hover:text-black">Apply Now</button></Link>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                        
                    </div>
                </TabPanel>
            </Tabs>
            <div className="md:mt-10 flex items-center justify-center mt-4">
               {show ?<button onClick={()=> handdleAlldata()} className="normal-case btn btn-sm btn-outline btn-accent">See All Jobs</button>: ''}
            </div>
        </div>
    );
};

export default Fresh;