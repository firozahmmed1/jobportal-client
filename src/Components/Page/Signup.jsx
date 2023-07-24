import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import { useForm} from "react-hook-form"
import { useContext } from "react";
import { authContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";


const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {signUp} = useContext(authContext)
    const { register,handleSubmit,formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        signUp(data.email, data.password)
        // eslint-disable-next-line no-unused-vars
        .then(result =>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Sing Up Done',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
        .catch(error=>{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
      }
    return (
        <div>
            <Container>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-700">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" required />
                                    {errors.email && <span className="text-red-700">This field is required</span>}
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required/>
                                    {errors.email && <span className="text-red-700">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-sm rounded btn-primary btn-outline normal-case">SignUp</button>
                                </div>
                                <p className='text-center'><small>No account yet? <span className='underline text-blue-600'><Link to="/login">Login</Link></span></small></p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Signup;