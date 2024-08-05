import {twMerge} from "tailwind-merge";

type Props = {
	title: string;
	href: string;
	description: string;
	listStyle?: string;
	titleStyle?: string;
	descriptionStyle?: string;
	listWrapStyle?: string;
};

function ListItem({description, href, title, descriptionStyle, listStyle, listWrapStyle, titleStyle}: Props) {
	return (
		<a href={href} className={twMerge("px-3 py-4 inline-block hover:bg-slate-100/70 rounded-lg w-full", listStyle)}>
			<div className={twMerge("space-y-1", listWrapStyle)}>
				<p className={twMerge("font-bold", titleStyle)}>{title}</p>

				<p className={twMerge("text-black/70", descriptionStyle)}>{description}</p>
			</div>
		</a>
	);
}

export default ListItem;
/*
		 indonesia
		 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28893225.609924518!2d107.24002882365517!3d-2.3815427741138335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e1!3m2!1sen!2sid!4v1722444184774!5m2!1sen!2sid"

		 laos
		 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6868006.974864928!2d101.21928190092187!3d18.19655456242518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e1!3m2!1sen!2sid!4v1722444384801!5m2!1sen!2sid"

		 purbalingga
		 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224078.60223176924!2d109.24820927163839!3d-7.327142947555747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff840271bce71%3A0x3027a76e352ba70!2sPurbalingga%20Regency%2C%20Central%20Java!5e1!3m2!1sen!2sid!4v1722444543135!5m2!1sen!2sid"

		 link url browser
		 "https://www.google.com/maps/place/Purbalingga+Regency,+Central+Java/@-7.3271623,109.3216946,51457m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e6ff840271bce71:0x3027a76e352ba70!8m2!3d-7.3058578!4d109.4259114!16s%2Fm%2F0264sm9?entry=ttu"

        */
