import Button from "@mui/material/Button";



function SectionOne(){
    return(
        <>
        <section className="bg-sectionone-bg default-section-one-container lg:bg-center lg:mt-24">
        <div className="text-white section-Content grid text-left uppercase pl-40">
                <h2 className="text-[90px] font-bebas pb-2">ALEX</h2>
                <h1 className="text-[64px] font-bebas ">HOME RENOVATIONS</h1>
                <p className="text-[33px] font-bebas">20+ Years Serving — all across the gta</p>
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


            <div className="hidden dropdownOption absolute  bg-white translate-x-1/2 w-1/2 h-1/3 px-3 py-5 border-t-[5px] border-tailoredOrange lg:hidden">
                <a href="#AboutUs">
                     <button  className="uppercase font-bold text-sm md:text-base">About</button> 
                </a>
                <a >
                <button className="uppercase font-bold text-sm md:text-base">Services</button> 
                </a>
                <a>
                <button className="uppercase font-bold text-sm md:text-base">GALLERY</button> 
                </a>
                <a>
                <button  className="uppercase font-bold text-sm md:text-base">Contact</button> 
                </a>
              
             </div>
        </section>

        </>
    );
}
export default SectionOne;