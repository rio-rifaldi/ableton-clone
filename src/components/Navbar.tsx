import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import NavbarContent from "@/data/navbar.json";

import "@/styles/example.css";
import {useEffect} from "react";
import {twMerge} from "tailwind-merge";
import ListItem from "./ListItem";
import {Button} from "./ui/button";
import {ScrollArea} from "./ui/scroll-area";
import {Separator} from "./ui/separator";

import {help, link, live, menu, note, pack, profile, push, shop} from "./ImageEntry";

type Props = {};

export default function Navbar({}: Props) {
	const sidebarImageLink = [live.src, push.src, note.src, link.src, shop.src, pack.src, help.src];
	useEffect(() => {
		let lastScrollY = 0;
		const stikcyNav = document.querySelector("#sticky-nav");
		document.addEventListener("scroll", () => {
			let currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				stikcyNav?.classList.remove("stikcy", "z-10", "top-0");
			} else {
				stikcyNav?.classList.add("stikcy", "z-10", "top-0");
			}
			lastScrollY = currentScrollY;
		});
	}, []);

	return (
		<>
			<nav className="bg-white  md:max-w-screen-2xl md:mx-auto ">
				<div className="flex items-center justify-between px-2 sm:px-6 py-3  xl:text-lg">
					<Logo className="-translate-y-3 size-9" />

					<ul className="items-center hidden capitalize md:flex gap-7 lg:gap-12 ">
						{NavbarContent.nav.map((item) => (
							<li>
								<a href={item.href} className="transition hover:underline-offset-4 hover:underline hover:text-cus_blue">
									{item.title}
								</a>
							</li>
						))}

						<NavigationMenu className="[&_div.absolute]:-left-[26rem] [&_div.absolute]:top-12 2xl:[&_div.absolute]:left-0 2xl:[&_div.absolute]:top-full z-20">
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="text-cus_blue text-lg ">More</NavigationMenuTrigger>
									<NavigationMenuContent className="">
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
											{NavbarContent.more.map((item, index) => (
												<ListItem href={item.href} description={item.description} title={item.title} descriptionStyle="line-clamp-2" key={index + Math.random()} />
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</ul>

					<img src={profile.src} alt="profile image" className="hidden size-14 md:inline" />

					<Sheet>
						<Button size={"icon"} variant={"ghost"} className="md:hidden">
							<SheetTrigger asChild className="md:bg-yellow-900">
								<img src={menu.src} alt="hamburger menu" className="opacity-70 size-8" />
							</SheetTrigger>
						</Button>
						<SheetContent side={"left"} className="py-10 font-josefin">
							<ScrollArea className="h-[84vh] ">
								<div className="text-center">
									<img src={profile.src} alt="profile image" className="mx-auto size-24" />
									<p className="mt-2 text-lg font-bold capitalize">rio rifaldi</p>
									<p className="font-light">riorifaldi44@gmail.com </p>
								</div>

								<ul className="mt-9  ">
									{NavbarContent.nav.map((item, index) => (
										<li key={index + Math.random()}>
											<a href={item.href} className="flex items-center gap-2 py-3 text-lg font-medium group ">
												<img src={sidebarImageLink[index]} alt={`${item.title} icon`} className="inline-block mr-2 size-8 brightness-95 group-hover:brightness-105" />
												<p className="transition group-hover:underline-offset-4 group-hover:underline group-hover:text-cus_blue">{item.title}</p>
											</a>
										</li>
									))}
								</ul>
								<Accordion type="multiple" className="mt-9">
									<AccordionItem value="item-1">
										<AccordionTrigger className="font-semibold ">More From Ableton.com</AccordionTrigger>
										<AccordionContent>
											<ul className="capitalize">
												{NavbarContent.moreLink.map((item) => (
													<li>
														<a href={item.href} className="inline-block py-1 hover:text-cus_blue hover:underline hover:underline-offset-4">
															{item.title}
														</a>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger className="font-semibold "> More From Ableton </AccordionTrigger>
										<AccordionContent>
											<ul className="space-y-2">
												{NavbarContent.more.map((item) => (
													<li>
														<a href={item.href} className="hover:text-cus_blue hover:underline hover:underline-offset-4 group">
															<p className="font-medium">{item.title}</p>
															<p className="mt-1 text-black/70 group-hover:text-cus_blue">{item.description}</p>
														</a>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</div>
				<Separator className="h-[.10rem] bg-slate-200" />
			</nav>

			<div
				className="hidden md:block sticky top-0 z-10 bg-white md:max-w-screen-2xl md:mx-auto backdrop-opacity-25 bg-opacity-90 transition
			  "
				id="sticky-nav"
			>
				<ul className="flex gap-8 items-center justify-start py-5 px-9 ">
					{NavbarContent.moreLink[4].additionalLink?.map((item) => (
						<li>
							<a href={item.href} className="hover:text-cus_blue hover:underline hover:underline-offset-4 capitalize text-sm">
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

function Logo({className}: {className?: string}) {
	return (
		<div className={twMerge("flex", className)}>
			<img src={menu.src} alt="logo" className="rotate-90 size-14 " />
			<img src={menu.src} alt="logo" className="-translate-x-3 size-14 " />
		</div>
	);
}
