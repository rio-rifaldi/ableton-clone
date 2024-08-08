import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import NavbarContent from "@/data/navbar.json";

import {type ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {Button} from "./ui/button";
import {ScrollArea} from "./ui/scroll-area";
import {Separator} from "./ui/separator";

import {menu} from "../asset/navigation/Entry";

type Props = {
	profileAccount: ReactNode;
	sidebarList: ReactNode;
	children: ReactNode;
	accordionContentOne: ReactNode;
	accordionContentTwo: ReactNode;
	largeScreenNavbar: ReactNode;
	navbarMenuDropdown: ReactNode;
	profileLargeScreen: ReactNode;
};

export default function Navbar(props: Props) {
	let navbarLargeScreen: {title: string; href: string}[] = [];
	for (let i = 0; i <= 6; i++) navbarLargeScreen.push(NavbarContent.nav[i]);

	return (
		<>
			<nav className="bg-white  md:max-w-screen-2xl md:mx-auto ">
				<div className="flex items-center justify-between px-2 sm:px-6 py-3  xl:text-lg">
					<Logo className="-translate-y-3 size-9 cursor-pointer" />

					<ul className="items-center hidden capitalize md:flex gap-7 lg:gap-12 ">
						{props.largeScreenNavbar}

						<NavigationMenu className="[&_div.absolute]:-left-[26rem] [&_div.absolute]:top-12 2xl:[&_div.absolute]:left-0 2xl:[&_div.absolute]:top-full z-20">
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className=" text-lg ">More</NavigationMenuTrigger>
									<NavigationMenuContent className="">{props.navbarMenuDropdown}</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</ul>

					{props.profileLargeScreen}
					<Sheet>
						<Button size={"icon"} variant={"ghost"} className="md:hidden">
							<SheetTrigger asChild className="md:bg-yellow-900">
								<img src={menu.src} alt="hamburger menu" className="opacity-70 size-8" slot="hamburgerMenu" />
							</SheetTrigger>
						</Button>
						<SheetContent side={"left"} className="py-10 font-josefin">
							<ScrollArea className="h-[84vh] ">
								{props.profileAccount}
								{props.sidebarList}
								<Accordion type="multiple" className="mt-9">
									<AccordionItem value="item-1">
										<AccordionTrigger className="font-semibold ">More From Ableton.com</AccordionTrigger>
										<AccordionContent>{props.accordionContentOne}</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger className="font-semibold "> More From Ableton </AccordionTrigger>
										<AccordionContent>{props.accordionContentTwo}</AccordionContent>
									</AccordionItem>
								</Accordion>
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</div>
				<Separator className="h-[.10rem] bg-slate-200" />
			</nav>

			{props.children}
		</>
	);
}

export function Logo({className}: {className?: string}) {
	return (
		<a className={twMerge("flex", className)} href="/">
			<img src={menu.src} alt="logo" className="rotate-90 size-14 " />
			<img src={menu.src} alt="logo" className="-translate-x-3 size-14 " />
		</a>
	);
}
