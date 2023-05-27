import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="single" />
                <h2 className="text-2xl font-bold text-center py-8">Basic Hooks</h2>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-1">useState</p>
                    <p className="py-2 border-b mx-8">useEffect</p>
                    <p className="py-2 border-b mx-8">useRef</p>
                </div>
                <button className="bg-[#00bf9a] hover:bg-sky-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Today</button>
            </div>
            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="single" />
                <h2 className="text-2xl font-bold text-center py-8">Intermediate Hooks</h2>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-1">ueReducer</p>
                    <p className="py-2 border-b mx-8">useCallback</p>
                    <p className="py-2 border-b mx-8">useContext</p>
                </div>
                <button className="bg-[#00bf9a] hover:bg-sky-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Today</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="single" />
                <h2 className="text-2xl font-bold text-center py-8">Advanced</h2>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-1">useForm</p>
                    <p className="py-2 border-b mx-8">useImperativeHandle</p>
                    <p className="py-2 border-b mx-8">useDebugValue</p>
                </div>
                <button className="bg-[#00bf9a] hover:bg-sky-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Today</button>
            </div>
        </div>
    </div>
  )
}

export default Cards