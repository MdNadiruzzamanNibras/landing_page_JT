import impression from '../assets/images/impression.png'
import skill from '../assets/images/impression.png'
import friendly from '../assets/images/friendly_icon.png'

const StandoutResume = () => {
    const remuse = [
        {
            image: impression,
            title: "Makes a Strong First Impression ",
            para: "Captures attention and showcases your potential"
        },
        {
            image: friendly,
            title: "ATS-Friendly",
            para: "Designed to get past automated filters and into human hands."
        },
        {
            image: skill,
            title: "Highlights Your Skills ",
            para: "Clearly presents your experiences and abilities"
        },
    ]
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className="text-4xl font-bold text-center">Unlock Interviews with a Standout Resume</h1>
                <div className="flex justify-center mt-7">
                    <hr className="bg-green-600 h-1 w-24"/>
                </div>
                <h1 className="text-4xl font-bold text-center">Why a Great Resume Matters:</h1>
            </div>

            <div className='grid grid-cols-3 mt-24 gap-5'>
                {
                    remuse.map((r, index) => (
                        <div key={index} className='w-72 px-10 pb-9 shadow-lg shadow-gray-300 flex flex-col items-center'>
                            <img src={r.image} className='w-20' alt="" />
                            <h1 className='text-3xl'>{r.title}</h1>
                            <p className='text-xl'>{r.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default StandoutResume;