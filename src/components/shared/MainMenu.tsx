'use client';
import Link from 'next/link';
import { MegaMenuData, MegaMenuItem } from 'Types';
import { menuData } from 'Constants';
import { MenuCategory } from 'Types';
import { usePathname } from 'next/navigation';

export const MainMenu = () => {
	const pathname = usePathname();
	return (
		<nav>
			<div className="hidden md:flex md:items-center md:gap-6 lg:gap-10 md:justify-center">
				{menuData.menuItems.map((item: MegaMenuItem, index: number) => (
					<div className="relative group" key={index}>
						{item.categories ? (
							<>
								<Link href={item.url} className="hover:text-primary">
									{item.title}
								</Link>
								<div className="absolute w-[320px] bg-white left-0 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-all duration-300 origin-top">
									<div className="grid grid-cols-1 gap-10 p-4">
										{item.categories.map((category: MenuCategory, idx: number) => (
											<div key={idx}>
												<ul>
													{category.links.map((link, linkIdx) => (
														<li key={linkIdx}>
															<Link
																href={`${link.url}^${link.id}`}
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
								</div>
							</>
						) : (
							<Link href={item.url || '#'} className={`${pathname.endsWith(item.url as string) ? 'text-primary' : ''} hover:text-primary`}>
								{item.title}
							</Link>
						)
						}
					</div>
				))}
			</div>
		</nav>
	);
};
