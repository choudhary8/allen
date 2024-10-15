import Promo from "./Promo";

const Home=()=>{
    return (
        <>
           <div className="px-44">
            <Promo promoSrc='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944051/e8gk63cgiwlqg4dgtxmi.webp?_upload_ref=ic_img_tool'/>
            <div>
                <div>
                    <h2 className="pt-8 pb-10 text-4xl font-bold">
                        <div>Your Dream.</div>
                        <div>Our Expertise.</div>
                    </h2>
                    <div className="pt-6 text-xl font-medium">What brings you to us here?</div>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <a href="">NEET</a>
                        <a href="">JEE</a>
                        <a href="">Grade 6-10</a>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <h2>Discover the perfect online program</h2>
                </div>
                <ul>
                    <li className="bg-[url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707131200/2_2_jee_vwis6e.webp')] h-60 w-80 bg-contain">
                        <a href="" className="w-full h-full p-6 space-between">
                            <div>JEE</div>
                            <div className="text-base text-white flex justify-self">
                                View
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardOutlinedIcon"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                            </div>

                        </a>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <div className="bg-secondary">
                <div>
                    <h2>Looking for a classroom based program?</h2>
                </div>

                <div>
                    <div>
                        <div>Present in 53 cities with</div>
                        <div>250+ calssrooms</div>
                        <button>Find a center</button>
                    </div>
                    <div></div>
                </div>
            </div>


            <div className="py-12">
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707734560/download_app_vgvsbx.webp" alt="" />
            </div>
           </div>
        </>
    )
}

export default Home;