import { Fade } from "react-awesome-reveal";
import Container from "../Container/Container";


const SinglePage = () => {
    return (
        <Container>
            <div className="mt-10 mb-10">
                <Fade direction="left"><h1 className="text-green-800 text-3xl text-center">Successfully Done </h1></Fade>
            </div>
        </Container>
    );
};

export default SinglePage;