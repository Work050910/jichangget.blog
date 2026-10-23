import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	url: "https://jichangget.blog",
	title: "机场导航",
	author: "机场导航编辑部",
	description: "机场导航：面向希望通过机场导航快速找到机场推荐、机场梯子和稳定机场资料的中文读者的静态内容站。以 /airport-recommend/ 为全站核心，按推荐资料、机场梯子、服务规则和稳定性资料组织文章与入口。",
	lang: "zh-CN",
	ogLocale: "zh_CN",
	showLogo: true,
	date: {
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "首页",
	},
	{
		path: "/airport-recommend/",
		title: "机场推荐",
	},
	{
		path: "/airport-navigation/",
		title: "机场导航",
	},
	{
		path: "/airport-ladder/",
		title: "机场梯子",
	},
	{
		path: "/stable-airport/",
		title: "稳定机场",
	},
	{
		path: "/service-rules/",
		title: "服务规则",
	},
	{
		path: "/faq/",
		title: "常见问题",
	},
	{
		path: "/about/",
		title: "关于本站",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
