import { Fade } from "react-awesome-reveal";


const Blog = () => {
    return (
        <div className="md:mt-36 mt-5 md:mb-10">
            <p className="text-3xl font-bold text-blue-950 mb-5"><Fade direction="up">Blogs</Fade></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mb-32">
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB, and what are the key advantages of using it in the MERN stack?</h2>
                        <p>MongoDB is a NoSQL database that stores data in JSON-like documents with dynamic schemas. It is widely used in the MERN stack due to its flexibility, scalability, and ability to handle large volumes of unstructured or semi-structured data.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does MongoDB ensure high availability and fault tolerance?</h2>
                        <p>MongoDB ensures high availability and fault tolerance through replica sets. A replica set is a group of MongoDB instances that maintain the same data. If the primary node fails, a secondary node automatically becomes the primary, ensuring continuous operation.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is Express.js, and why is it a popular choice as a backend framework for MERN stack applications?</h2>
                        <p>Express.js is a lightweight and flexible Node.js web application framework. It simplifies the process of building web applications and APIs in Node.js by providing a set of middleware and routing functionalities.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How can you implement authentication and authorization in an Express.js application?</h2>
                        <p>Authentication and authorization can be implemented in Express.js using middleware like Passport.js. Passport.js provides various authentication strategies, such as local strategy (username/password), JWT (JSON Web Tokens), OAuth, etc.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What are React hooks, and how do they address the limitations of class components?</h2>
                        <p>React hooks are functions that allow you to use state and other React features in functional components. They eliminate the need for class components and promote cleaner, more concise code.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How can you implement authentication and authorization in an Express.js application?</h2>
                        <p>Authentication and authorization can be implemented in Express.js using middleware like Passport.js. Passport.js provides various authentication strategies, such as local strategy (username/password), JWT (JSON Web Tokens), OAuth, etc.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is Node.js, and why is it a suitable choice for building the backend of MERN stack applications?</h2>
                        <p>Node.js is a JavaScript runtime environment that allows developers to execute server-side JavaScript code. It is an excellent choice for the backend of MERN stack applications due to its event-driven, non-blocking I/O model, making it efficient and scalable.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How can you handle file uploads in a Node.js application using libraries like Multer?</h2>
                        <p>File uploads in a Node.js application can be handled using the Multer library, which simplifies the process of handling multipart/form-data.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;