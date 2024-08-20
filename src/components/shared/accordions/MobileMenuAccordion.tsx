'use client'
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { MenuCategory } from 'Types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    categories: MenuCategory[];
    url: string;
    title: string;
}

export const MobileMenuAccordion = ({ categories, url, title }: Props) => {
    const pathname = usePathname();
    return (

        <AccordionGroup className='p-0'>
            <Accordion>
                <AccordionSummary className='p-0 w-full text-left font-semibold'>
                    <Link href={url} className="hover:text-primary">
                        {title}
                    </Link>
                </AccordionSummary>
                <AccordionDetails className='p-0'>
                    <div className=" left-0 w-full rounded-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 origin-top">
                        {categories.map((category: MenuCategory, idx: number) => (
                            <div key={idx}>
                                <ul>
                                    {category.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.url}
                                                className={`${pathname.endsWith(link.url) ? 'text-primary' : ''} hover:text-primary`}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>

    )
}