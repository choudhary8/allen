const Res=({pImg,program,achievment})=>{
    return (
        <div className="flex p-6">
            <img className="w-1/2 rounded-2xl z-1" src={pImg} alt="" />
            <div className="mx-10 mt-6 mb-8 flex flex-col justify-center">
                <div className="mt-4 font-bold text-2xl">ALLEN Online Program {program} 2024 Results</div>
                <div className="mt-2 mb-4">{achievment}</div>
                <div className="mt-6 font-bold text-blue-500">
                    <a href="" >View Detailed Results</a>
                </div>
            </div>
        </div>
    )
}

export default Res