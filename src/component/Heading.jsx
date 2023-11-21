import logo from '../assets/images/Company Logo - Black.png'
import Illustration from '../assets/images/Illustration.png'

const Heading = () => {
    return (
        <div className='container pb-14 mx-auto'>
            <div className='ml-0  lg:ml-32'>
                <img src={logo} alt="" />
            </div>
            <div className='lg:flex lg:justify-around lg:items-center'>
                <div><h2 className='text-7xl font-bold mb-16'>
                Accelerate Your <br className='hidden lg:block' /> <span className='text-green-400'>Tech Career</span> in <br className='hidden lg:block'/> Canada!
                </h2>
                    <p className='text-xl font-bold mt-8'>Exclusive Free <span className='text-green-400'>RESUME</span> Writing Service TO 5x Your Job Hunt</p>
                    
                </div>
                <div><img className='lg:w-[501px] h-[501px]' src={Illustration} alt="" /></div>
            </div>
        </div>
    );
};

export default Heading;