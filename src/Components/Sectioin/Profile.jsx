import { Fade } from "react-awesome-reveal";
import vid from "../../assets/backgroung/videoplayback.mp4"
import { FaGithub } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import artcraft from "../../assets/Project/art&craftschool.png"
import toygaden from "../../assets/Project/toymarket.png"


const Profile = () => {
    return (
        <div className="md:mt-40">
             <h1 className="text-3xl font-bold text-blue-950"><Fade direction="up"> My Profile</Fade></h1>
             
             <div className="md:mt-10 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Fade direction="left"><h1 className="text-xl font-semibold mb-5">Video Resume</h1></Fade>
                   <div><video src={vid} type="video/mp4" width={500} controls></video></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center md:justify-end md:items-center gap-5 ">
                <div className="card w-96 md:h-[300px]">
                    <div className="card-body">
                        <Fade direction='left'><p className='uppercase text-center text-[17px] font-bold'>Art & craft school</p></Fade>
                        <Fade direction='up'><p className='text-center'>This website consists with three different dashboard such as students dashboard, instructors dashboard and admin dashboard.Each dashboard has different functionalities and access restrictions. </p></Fade>
                        <Fade direction='up'>
                            <div className="card-actions justify-center">
                                <a href="https://github.com/firozahmmed1/summer-camp-1" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><FaGithub></FaGithub></span>Client</button></a>
                                <a href="https://github.com/firozahmmed1/summer-camp-server" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><FaGithub></FaGithub></span>Server</button></a>
                                <a href="https://artscart-5d5f5.web.app" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><AiOutlineGlobal></AiOutlineGlobal></span>Livesite</button></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-start md:items-center gap-5">
                <div className="card rounded-none w-64 md:h-[300px] bg-base-100 shadow-xl overflow-hidden">
                    <figure><img className="cursor-pointer h-full w-full  object-cover object-top transition-all duration-700 hover:object-bottom" src={artcraft} alt="art & craft School" /></figure>

                </div>
            </div>

            <div className="flex justify-center md:justify-end md:items-center gap-5 ">
                <div className="card w-96 md:h-[300px]">
                    <div className="card-body">
                        <Fade direction='left'><p className='uppercase text-center text-[17px] font-bold'>Toys Garden</p></Fade>
                        <Fade direction='up'><p className='text-center'>Toys Garden is a dynamic and interactive toy selling website. The website offers a user-friendly interface for customers to browse, search, and purchase a wide range of toys.</p></Fade>
                        <Fade direction='up'>
                            <div className="card-actions justify-center">
                                <a href="https://github.com/firozahmmed1/toymarket-client" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><FaGithub></FaGithub></span>Client</button></a>
                                <a href="https://github.com/firozahmmed1/toymarket-server" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><FaGithub></FaGithub></span>Server</button></a>
                                <a href="https://toys-market-a1605.web.app" target='_blank' rel="noreferrer"><button className="btn btn-sm normal-case border-0 border-b-4 border-orange-400 hover:bg-gradient-to-r from-red-500 to-green-500"><span className='text-xl'><AiOutlineGlobal></AiOutlineGlobal></span>Livesite</button></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-start md:items-center gap-10">
                <div className="card rounded-none w-64 md:h-[300px] bg-base-100 shadow-xl overflow-hidden">
                    <figure><img className="cursor-pointer h-full w-full  object-cover object-top transition-all duration-700 hover:object-bottom" src={toygaden} alt="Toy Market" /></figure>

                </div>
            </div>
                </div>
             </div>
        </div>
    );
};

export default Profile;