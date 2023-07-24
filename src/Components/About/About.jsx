import { Fade } from "react-awesome-reveal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Container from "../Container/Container";

const About = () => {
    return (
        <div>
            <div className="mt-10 mb-10 md:mb-20">
               <Container>
               <Tabs>
                    <TabList>
                        <Tab><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500 font-semibold text-xl">About me</span></Tab>
                    </TabList>

                    <TabPanel>
                        <Fade direction="right"><h2 className="text-justify text-slate-800 font-semibold">I am a passionate MERN Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior MERN Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadcn UI, Prisma, Next.js, and TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</h2></Fade>
                    </TabPanel>
                </Tabs>
               </Container>
            </div>
        </div>
    );
};

export default About;