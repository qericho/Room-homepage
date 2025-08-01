import BackGround from '../assets/images/desktop-image-hero-1.jpg';
import About_Img_1 from '../assets/images/desktop-image-hero-3.jpg';
import About_Img_2 from '../assets/images/image-about-light.jpg';
import Arrow from '../assets/images/icon-arrow.svg';
import Btn from './Button/Btn';

const Home = () => {
    return (
        <section>
            <div>
                <div className="lg:flex-row md:flex-col flex-col flex items-center justify-center">
                    <div className="w-full h-100 lg:h-130 relative">
                        <img
                            className="w-full h-full object-cover"
                            src={BackGround}
                            alt="BG"
                        />
                        <div className="absolute bottom-0 right-0 lg:hidden flex">
                            <Btn />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-10 lg:p-15 gap-y-5 lg:gap-y-8 bg-[var(--color-white)] text-[var(--color-black)] w-full lg:w-[70%] h-full lg:h-130 relative">
                        <h1 className="text-4xl font-bold">
                            Discover innovative ways to decorate
                        </h1>
                        <p className="text-[var(--color-gray-600)]">
                            We provide unmatched quality, comfort, and style for property owners across the country.
                            Our experts combine form and function in bringing your vision to life. Create a room in your
                            own style with our collection and make your property a reflection of you and what you love.
                        </p>
                        <div className="group font-medium text-2xl tracking-[10px] flex items-center gap-x-6 cursor-pointer">
                            SHOP NOW
                            <span>
                                <img src={Arrow} alt="arrow-right" />
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 lg:flex hidden">
                            <Btn />
                        </div>
                    </div>
                </div>

                {/* About */}
                <div className="grid lg:grid-cols-[1fr_1.8fr_1fr] place-items-center">
                    <div className="w-full h-full lg:h-100">
                        <img
                            className="w-full h-full object-cover"
                            src={About_Img_1}
                            alt=""
                        />
                    </div>
                    <div className="w-full h-full lg:h-100 flex flex-col justify-center bg-white text-[var(--color-gray-600)] lg:p-15 p-10 space-y-2">
                        <h2 className="text-2xl tracking-[5px] uppercase text-[var(--color-black)] font-medium">
                            About Our Furniture
                        </h2>
                        <p>
                            our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. Shop now About our furniture Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                    <div className="w-full h-full lg:h-100">
                        <img
                            className="w-full h-full object-cover"
                            src={About_Img_2}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
