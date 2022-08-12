import React from 'react';
import bucketGirl from "../../assets/images/bucketgirl.png"

const Landing = () => {
    return (
        <>
            <div className="hero h-screen relative z-0 lg:h-[65vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div >
                        <p data-aos="fade-right" data-aos-delay="500"
    data-aos-duration="1000" className="text-xl">Best Quality</p>
                        <h1 data-aos="fade-right" data-aos-delay="700"
    data-aos-duration="1200" className="text-5xl max-w-lg font-bold">Professional Cleaning Service.</h1>
                        <p data-aos="fade-right" data-aos-delay="900"
    data-aos-duration="2000" className="py-6 max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed sint id, est consectetur officia dignissimos?</p>
                        <button data-aos="fade-right" data-aos-delay="1200"
    data-aos-duration="2200" class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} className="max-w-sm h-full" alt='a girl with bucket' />
                    </div>
                </div>
            </div>
            <div className='shadow-lg w-5/6 p-10 relative mb-10 z-1 rounded-2xl bg-base-200 mt-[-50px] mx-auto'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                
                </div>
                <button className='btn btn-primary mt-5'>get a quoate</button>
            </div>
        </>
    );
};

export default Landing;