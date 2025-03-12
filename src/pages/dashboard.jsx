import { Link } from 'react-router-dom';


function Dashboard() {
 

    return (
        <section className="">
            <div className="dashboard flex">
                <div className="dashboardLeft min-w-[241px] bg-[#152259] text-[#FFFFFF] min-h-[100vh]">
                    <div className="logo min-h-[170px] border-b-[1px] border-b-[#BDBDBD] w-full text-center content-center">
                        <img src="/image/dashLogo.png" alt="logoImg" className='w-[65px] h-[65px] mx-auto'/>
                        <p className='mt-[22px] text-[14px] font-semibold'>Udemy Inter. school</p>
                    </div>
                    <div className="btn flex flex-col gap-y-[8px] px-[22px]">
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s] mt-[27px]'><i class="bi bi-house"></i>Dashboard</button>
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-house"></i>Teachers</button>
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-mortarboard"></i>Students</button>
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-bank"></i>Billing</button>
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-gear"></i>Settings and profile</button>
                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-bar-chart-line"></i>Exams</button>

                    <button className='max-w-[192px] min-h-[40px] rounded-[4px] bg-transparent flex items-center pl-[16px] gap-x-[15px] mt-[70px] text-[14px] font-semibold hover:bg-[#509CDB] duration-[.5s]'><i class="bi bi-bank"></i>Features <span className='w-[41px] h-[14px] bg-[#B9D7F1] text-black text-[10px] font-semibold rounded-[8px]'>NEW</span></button>
                    </div>
                </div>
                <div className="dashboardRight w-full">
                    <div className="dashboardNav bg-[#FCFAFA] w-[100%] h-[95px] flex justify-end items-center pr-[120px]">
                        <i className="bi bi-bell mr-[47px] text-[25px] relative"><span className='absolute right-[0] top-[3px] w-[12px] h-[12px] bg-[#2D88D4] rounded-[50%]'></span></i>
                        <Link to="/"><button className='w-[120px] h-[40px] bg-[#509CDB] text-[white] font-semibold rounded-[8px] hover:bg-[blue] duration-[.5s]'>Log Out</button></Link>
                    </div>
                    <div className="dashboardTitle bg-gray-50 min-h-[100vh] flex px-[110px] py-[50px]">
                        <div className="dashboardInfo">
                            <h1 className='text-[#4F4F4F] text-[34px] font-semibold '>Welcome to your dashboard, Udemy school</h1>
                            <div className="dashboardPart px-[90px]">
                                    <h3 className='mt-[23px] text-[24px] text-[#4F4F4F] font-semibold '>Uyo/school@teachable.com</h3>
                                <div className="dashboardParts flex items-start gap-x-[20px] mt-[68px]">
                                    <div className="icons">
                                        <i className="bi bi-person-fill-add w-[36px] h-[36px] items-center justify-center rounded-[8px] flex bg-[#EFF3FA] text-[#13296A] text-[20px] p-[3px]"></i>
                                    </div>
                                    <div className="title">
                                            <h2 className='text-[24px] font-normal text-[#4F4F4F]'>Add other admins</h2>
                                            <p className='text-[14px] text-[#4F4F4F] mt-[15px]'>Create rich course content and coaching products for your students.
                                            When you give them a pricing plan, they'll appear on your site!</p>
                                        </div>
                                </div>  

                                <div className="dashboardParts flex gap-x-[20px] mt-[50px]">
                                    <div className="icons">
                                        <i className="bi bi-bank w-[36px] h-[36px] items-center justify-center rounded-[8px] flex bg-[#EFF3FA] text-[#13296A] text-[20px] p-[3px]"></i>
                                    </div>
                                    <div className="title">
                                            <h2 className='text-[24px] font-normal text-[#4F4F4F]'>Add classes</h2>
                                            <p className='text-[14px] text-[#4F4F4F] mt-[15px]'>Create rich course content and coaching products for your students.
                                            When you give them a pricing plan, they'll appear on your site!</p>
                                        </div>
                                </div>

                                <div className="dashboardParts flex gap-x-[20px] mt-[50px]">
                                    <div className="icons">
                                        <i className="bi bi-mortarboard w-[36px] h-[36px] items-center justify-center rounded-[8px] flex bg-[#EFF3FA] text-[#13296A] text-[20px] p-[3px]"></i>   
                                    </div>
                                    <div className="title">
                                            <h2 className='text-[24px] font-normal text-[#4F4F4F]'>Add students</h2>
                                            <p className='text-[14px] text-[#4F4F4F] mt-[15px]'>Create rich course content and coaching products for your students.
                                            When you give them a pricing plan, they'll appear on your site!</p>
                                        </div>
                                </div>
                            </div>    
                        </div>
                        <div className="btn content-end">
                            <button className='h-[60px] w-[181px] rounded-[30px] bg-[#152259] text-white text-[14px] font-semibold hover:bg-[#080d24] duration-[.5s]'><i className="bi bi-headset mr-[8px]"></i>Support<i className="bi bi-chevron-up ml-[43px]"></i></button>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
  }
  
  export default Dashboard