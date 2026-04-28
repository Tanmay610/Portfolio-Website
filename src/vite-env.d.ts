/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
	export class SplitText {
		constructor(targets: any, vars?: any);
		chars: any[];
		words: any[];
		lines: any[];
		revert(): void;
	}
}
