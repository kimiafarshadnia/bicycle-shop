import Link from 'next/link';
import { Icon } from 'Components';
import { withHttps } from "Utils";
import { Social } from 'Constants';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    return (
        <main className="flex min-h-screen flex-col py-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-40">
                    <div className="flex flex-col md:flex-row gap-6 md:justify-between">
                        <div className="basis-2/4">
                            <img src="images/map.jpeg" alt="google_map" className='rounded-2xl' />
                        </div>
                        <div className="basis-2/4 flex flex-col gap-6">
                            <h2 className="text-2xl md:text-4xl text-primary font-semibold capitalize">Contact Us</h2>
                            <p className="text-sm md:text-base w-full lg:w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum deleniti tempore voluptates mollitia placeat a necessitatibus impedit odit nihil omnis error nulla corporis eius ipsa atque architecto doloremque, nobis velit!</p>

                            <div className='flex items-center gap-2'>
                                <Icon iconName={faPhone} size='lg' />
                                <span>522156341564165</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Icon iconName={faEnvelope} size='lg' />
                                <span>example@gmail.com</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Icon iconName={faLocationDot} size='lg' />
                                <span>hgvgfhgjvb kjhujkhbuj khjiohjiuk</span>
                            </div>

                            <ul className='flex items-center gap-4'>
                                {
                                    Social.map((item) => (
                                        <li key={item.id}>
                                            <Link href={withHttps(item.url)}>
                                                <Icon iconName={item.nameIcon} size='xl' className='text-primary hover:scale-110 hover:duration-300' />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
