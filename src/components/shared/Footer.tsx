'use client'
import Link from 'next/link';
import { withHttps } from "Utils";
import { Icon } from 'Components';
import { Social } from 'Constants';

export const Footer = () => {
	const footerMenu = [
		{
			id: "0",
			title: "Home",
			url: "/"
		},
		{
			id: "1",
			title: "About Us",
			url: "/about-us"
		},
		{
			id: "2",
			title: "Contact Us",
			url: "contact-us"
		},
		{
			id: "3",
			title: "FAQ",
			url: "/FAQ"
		},
		{
			id: "4",
			title: "Terms & Conditions",
			url: "/terms-conditions"
		},
		{
			id: "5",
			title: "Privacy Policy",
			url: "/privacy-policy"
		}
	]
	return (
		<footer className='bg-slate-50'>
			<hr />
			<div className='container mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center gap-10 py-5 px-5 md:px-0'>
				<div className='w-full flex flex-col gap-4'>
					<div className='flex flex-shrink-0 items-center justify-center w-28 h-28 md:w-40 md:h-40'>
						<img src="/images/logo.png" alt="logo" />
					</div>
					<span className='text-sm md:text-base'>Address: address info</span>
					<span className='text-sm md:text-base'>Hours: 10:30 - 21:00, Mon - Fri</span>
					<ul className='flex items-center gap-4'>
						{
							Social.map((item) => (
								<li key={item.id}>
									<Link href={withHttps(item.url)}>
										<Icon iconName={item.nameIcon} size='xl' className='hover:text-primary hover:scale-110 hover:duration-300' />
									</Link>
								</li>
							))
						}
					</ul>
				</div>

				<div className='w-full flex flex-col md:flex-row justify-between gap-10'>
					<div className='flex flex-col gap-3'>
						<h5 className='font-semibold capitalize'>Company Info</h5>
						<ul className='flex flex-col gap-2'>
							{
								footerMenu.map((item) => (
									<li key={item.id}>
										<Link href={item.url} className='hover:text-primary font-normal text-sm'>{item.title}</Link>
									</li>
								))
							}
						</ul>
					</div>

					<div className='flex flex-col gap-3'>
						<h5 className='font-semibold capitalize'>Safe payments</h5>
						<ul className='flex flex-col gap-2'>
							{
								footerMenu.map((item) => (
									<li key={item.id}>
										<Link href={item.url} className='hover:text-primary font-normal text-sm'>{item.title}</Link>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>

			<div className='bg-white text-center py-5 text-xs md:text-sm'>
				<p>All rights reserved by <span className='text-primary'>Gulf Youth Bicycle</span>.©{(new Date().getFullYear())}</p>
			</div>
		</footer>
	);
};
