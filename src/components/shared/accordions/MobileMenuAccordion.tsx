'use client'
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { MenuCategory, MegaMenuItem, MenuLink } from 'Types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    categories: MegaMenuItem[];
    title: string
}

export const MobileMenuAccordion = ({ categories, title }: Props) => {
    const pathname = usePathname();
    return (

        <AccordionGroup className='p-0'>
            <Accordion>
                <AccordionSummary className='p-0 w-full text-left font-semibold'>
                    {title}
                </AccordionSummary>
                <AccordionDetails className='p-0'>
                    <div className=" left-0 w-full rounded-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 origin-top">
                        {categories.map((category, idx: number) => (
                            <AccordionGroup key={idx} className='p-0'>
                                <Accordion>
                                    <AccordionSummary className="font-semibold">
                                        {category.title}
                                    </AccordionSummary>
                                    <AccordionDetails className='p-0'>
                                        <ul>
                                            {category.categories?.map((link: MenuCategory, linkIndex) => (
                                                <li key={linkIndex}>
                                                    {/* <Link
                                                        href={link.url}
                                                        className={`${pathname.endsWith(link.url) ? 'text-primary' : ''}`}
                                                    >
                                                        {link.title}
                                                    </Link> */}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>

    )
}