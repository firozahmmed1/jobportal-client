import Container from "../Container/Container";

const Contact = () => {
    return (
        <div className="mb-5 md:mb-10 mt-5 md:mt-10">
            <Container>
                    <h1 className="text-xl mt-10 text-center">Contact Info</h1>
                    <p className="text-center">Address:House#64, Road-10, <br /> Sector-10,
                        Dhaka, Bangladesh </p>
                   <p className="text-center"> Email: firozahmmed05@gnail.com </p>
                    <p className="text-center">phone: +8801746719090 </p>    
            </Container>
        </div>
    );
};

export default Contact;