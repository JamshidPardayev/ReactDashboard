import { Link } from 'react-router-dom';


function Login() {
 

    return (
        <section className="bg-gray-50 h-[100vh] content-center">
        <h1 className="font-semibold text-[#4F4F4F] text-[36px] text-center ">Welcome, Log into you account</h1>
        <form action="" className="max-w-[512px] min-h-[454px] mx-auto mt-[53px]  bg-white text-center pt-[70px]">
          <p className="max-w-[238px] min-h-[58px] text-[16px] text-[#667085] text-center mx-auto font-medium" >It is our great pleasure to have you on board!</p>
          <input className="border-[1px] border-[#A7A7A7] w-[248px] h-[42px] rounded-[4px] mt-[14px] outline-none p-[13px] text-[#667085]" type="text"  placeholder="Create your Login" required/> <br />
          <input className="border-[1px] border-[#A7A7A7] w-[248px] h-[42px] rounded-[4px] mt-[14px] outline-none p-[13px] text-[#667085]" type="password"  placeholder="Create your Password" required/> <br />
          <Link to="/Dashboard"><button className="bg-[#2D88D4] text-[#FFFFFF] rounded-[4px] w-[248px] h-[42px] font-bold mt-[45px] hover:bg-[blue] duration-[0.5s]">Log In</button> <br /></Link>
          <Link to="/"><button className="text-[#2D88D4] font-bold mt-[14px] hover:text-[blue] duration-[0.5s]">Sign Up</button></Link>
        </form>
      </section>
    )
  }
  
  export default Login