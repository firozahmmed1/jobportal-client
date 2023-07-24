import Container from "../Container/Container";
import img from '../../assets/backgroung/jobsbg.png'
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Fresh from "../Sectioin/Fresh";
import Experienced from "../Sectioin/Experienced";
import Companies from "../Sectioin/Companies";
import Profile from "../Sectioin/Profile";
import Blog from "../Sectioin/Blog";

const Home = () => {
    const [jobs, setJos] = useState(true)
    return (
        <div className="mb-4">
            <div className="md:h-[550px] h-2/6  bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
            <Container>
                <div className="mt-4 md:my-8 mb-4">
                    {jobs ? <Fade direction="down"><button onClick={()=>setJos(!jobs)} className="btn-sm btn-active btn-secondary transition-all">Job Seeker</button></Fade>:
                     <button onClick={()=>setJos(!jobs)} className="btn-sm btn-active btn-primary transition-all">Job Poster</button>}
                </div>
            </Container>

            <Container>
               <Fresh></Fresh>
            </Container>

            <Container>
                <Experienced></Experienced>
            </Container>

            <Container>
                <Companies></Companies>
            </Container>

            <Container>
                <Profile></Profile>
            </Container>

            <Container>
              <Blog></Blog>
            </Container>
        </div>
    );
};

export default Home;