import Arrow_L from '../../assets/images/icon-angle-left.svg'
import Arrow_R from '../../assets/images/icon-angle-right.svg'
const Btn = () => {
    return (
        <div className="w-50 h-14 lg:h-18  flex items-center justify-center">
            <div className='w-30 h-full bg-black flex items-center justify-center cursor-pointer hover:bg-black/70'>
                <img src={Arrow_L} />
            </div>
            <div className='w-30 h-full bg-black flex items-center justify-center cursor-pointer hover:bg-black/70'>
                <img src={Arrow_R} />
            </div>
        </div>
    )
}

export default Btn