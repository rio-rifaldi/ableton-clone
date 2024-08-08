import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["planetary.s3.amazonaws.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.amazonaws.com",
			},
		],
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react({}),
	],
});
