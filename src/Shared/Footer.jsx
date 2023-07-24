import Container from "../Components/Container/Container";

const Footer = () => {
    return (
        <div className="bg-[#202A44] md:pb-10 pb-4">
            <Container>
                <footer className="footer md:p-10 text-base-content px-4">
                    <div>
                        <span className="footer-title text-white">About Us</span>
                        <p className="text-white">Serachjobs.com Ltd. is the first and leading career management site in the country. Eight young business and IT professional backed by strong command over e-business and in-depth understanding of the needs of job seekers and employers in the country's context started this venture on July 2000.</p>

                    </div>
                    <div className="text-white">
                        <span className="footer-title">Contact info</span>
                        <p>Address:House#64, Road-10, Sector-10,
                            <br /> 
                            Dhaka, Bangladesh
                        </p>
                        <p>Phone : +8880 44338899</p>
                            
                    </div>
                    <div className="text-white">
                        <span className="footer-title">Important Link</span>
                        <a className="link link-hover">Fresher jobs</a>
                        <a className="link link-hover">Mid level jobs</a>
                        <a className="link link-hover">Experienced jobs</a>
                    </div>
                    <div className="text-white">
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;