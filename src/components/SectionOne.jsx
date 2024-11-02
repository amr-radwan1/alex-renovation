import Button from "@mui/material/Button";

function SectionOne() {
    return (
        <>
            <section className="bg-sectionone-bg bg-cover bg-center h-[60vh] text-white flex items-start justify-start text-left lg:mt-24">
                <div className="section-Content flex flex-col pl-10 lg:pl-40 pt-10 uppercase">
                    <h2 className="text-[6.7rem] xl:text-[8rem] font-bebas m-0 leading-none">ALEX</h2>
                    <h1 className="text-[3.7rem] xl:text-[5rem] font-bebas mt-0 leading-tight">HOME RENOVATIONS</h1>
                    <p className="text-[2.2rem] xl:text-[3.5rem] font-bebas mb-7 mt-2">20+ Years Serving — all across the GTA</p>
                    <Button
                        variant="contained"
                        sx={{
                            height: '90px',
                            width: '220px',
                            borderRadius: '5px',
                            backgroundColor: 'rgba(224, 88, 42, 1)',
                            color: 'white',
                            fontSize: '22px',
                            fontFamily: 'Bebas Neue, sans-serif',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.4s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                color: 'rgba(224, 88, 42, 1)'
                            }
                        }}
                    >
                        CONTACT US
                    </Button>
                </div>

                <div className="hidden dropdownOption absolute bg-white transform translate-x-1/2 w-1/2 h-1/3 px-3 py-5 border-t-4 border-tailoredOrange lg:hidden">
                    <a href="#AboutUs">
                        <button className="uppercase font-bold text-sm md:text-base">About</button> 
                    </a>
                    <a href="#Services">
                        <button className="uppercase font-bold text-sm md:text-base">Services</button> 
                    </a>
                    <a href="#Gallery">
                        <button className="uppercase font-bold text-sm md:text-base">Gallery</button> 
                    </a>
                    <a href="#Contact">
                        <button className="uppercase font-bold text-sm md:text-base">Contact</button> 
                    </a>
                </div>
            </section>
        </>
    );
}

export default SectionOne;
