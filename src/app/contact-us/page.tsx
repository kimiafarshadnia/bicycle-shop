import Link from "next/link";
import { Icon } from "Components";
import { withHttps } from "Utils";
import { Social } from "Constants";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    return (
        <main className="flex min-h-screen flex-col py-24">
            <div className="container mx-auto px-5 md:px-0">
                <div className="flex flex-col gap-40">
                    <div className="flex flex-col md:flex-row gap-6 md:justify-between">
                        <div className="basis-2/4">
                            <img src="images/map.jpeg" alt="google_map" className="rounded-2xl" />
                        </div>
                        <div className="basis-2/4 flex flex-col gap-6">
                            <h2 className="text-2xl md:text-4xl text-primary font-semibold capitalize">Contact Us</h2>
                            <p className="text-sm md:text-base w-full lg:w-3/5">We&apos;sd love to hear from you! Whether you have questions about our products, need assistance with a recent purchase, or just want to talk bikes, we&apos;sre here to help. Feel free to reach out to us at the contact information below:</p>

                            <div className="flex gap-2">
                                <Icon iconName={faPhone} size="lg" />
                                <div className="flex flex-col gap-2">
                                    <span>+974 4455 1092</span>
                                    <span>+974 3389 7909</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Icon iconName={faEnvelope} size="lg" />
                                <span>gulfyouthbicycle@yahoo.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Icon iconName={faLocationDot} size="lg" />
                                <span>P.O Box 9580, Al wakra Road,Building No:9,Shop No:1</span>
                            </div>

                            <ul className="flex items-center gap-4">
                                {
                                    Social.map((item) => (
                                        <li key={item.id}>
                                            <Link href={withHttps(item.url)}>
                                                <Icon iconName={item.nameIcon} size="xl" className="text-primary hover:scale-110 hover:duration-300" />
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
