export default function AboutUs() {
    return (
        <main className="flex min-h-screen flex-col py-24">
            <div className="container mx-auto px-5 md:px-0">
                <div className="flex flex-col gap-20 lg:gap-40">
                    <div className="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center">
                        <div className="basis-2/4 h-[300px] md:h-[400px] flex items-center justify-center flex-shrink-0">
                            <img src="images/about-1.jpeg" alt="bicycle_rider" className='rounded-2xl w-full h-full' />
                        </div>
                        <div className="basis-2/4 flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl text-primary font-semibold">Our Passion for Cycling</h2>
                            <p className="text-sm lg:text-base w-full xl:w-4/5">At Gulf Youth Bicycle, cycling isn't just a business—it's a way of life. Our journey began with a shared love for bikes and the freedom they bring. Over the years, we've grown from a small local shop into a trusted name in the cycling community, driven by our commitment to quality and our deep understanding of what cyclists need. Whether you're a seasoned pro or just starting out, we believe every rider deserves the best, and we're here to provide that.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse gap-6 lg:justify-between lg:items-center">
                        <div className="basis-2/4 h-[300px] md:h-[400px] flex items-center justify-center flex-shrink-0">
                            <img src="images/about-2.jpeg" alt="bicycle_rider" className='rounded-2xl w-full h-full' />
                        </div>
                        <div className="basis-2/4 flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl text-primary font-semibold">Quality Products & Expert Service</h2>
                            <p className="text-sm lg:text-base w-full xl:w-4/5">We take pride in offering a carefully curated selection of bicycles, accessories, and gear that meet the highest standards of performance and durability. Our team is composed of passionate cyclists who not only sell bikes but also ride them. This hands-on experience allows us to provide expert advice and personalized recommendations to every customer who walks through our doors. From the latest models to essential maintenance, we’ve got you covered with top-tier products and services.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center">
                        <div className="basis-2/4 h-[400px] md:h-[400px] flex items-center justify-center flex-shrink-0">
                            <img src="images/about-3.jpeg" alt="bicycle_rider" className='rounded-2xl w-full h-full' />
                        </div>
                        <div className="basis-2/4 flex flex-col gap-6">
                            <h2 className="text-2xl lg:text-4xl text-primary font-semibold">Building a Community of Cyclists</h2>
                            <p className="text-sm lg:text-base w-full xl:w-3/5">Beyond selling bikes, our mission is to foster a vibrant community of cyclists. We organize regular events, group rides, and workshops to bring enthusiasts together and promote a healthy, active lifestyle. Whether you're looking to improve your skills, discover new trails, or simply connect with fellow riders, Gulf Youth Bicycle is your hub for all things cycling. Join us as we pedal towards a future where everyone can experience the joy and freedom of cycling.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
