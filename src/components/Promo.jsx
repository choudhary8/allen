const Promo=({promoSrc,cls})=>{
    return (
        <>
        <div>
            <img src={promoSrc} alt="" className={`py-12 ${cls}`} />
        </div>
        </>
    )
}

export default Promo;