import { defineUserConfig } from "vuepress";
import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// 图标浏览https://remixicon.com/

export const Navbar = navbar([
    { text: "首页", icon: "home-3-line", link: "/" },
    { text: "日常", icon: "polaroid-line", link: "/daily/" },
    { text: "旅游", icon: "road-map-line", link: "/travel/" },
    { text: "杂项", icon: "file-copy-2-line", link: "/misc/" },
    { text: "知识", icon: "book-2-line", link: "https://docs.wozsun.com" },
    { text: "主站", icon: "gps-line", link: "https://www.wozsun.com" },
]);

export const Sidebar = sidebar({
    "/misc/": "structure",
    "/daily/": "structure",
    "/travel/": "structure",
    "/space/": "structure",
});

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "Life",
    description: "生活记录",
    head: [
        ["meta", { name: "theme-color", content: "#363636" }],
    ],
    shouldPrefetch: false,
    dest: "public",
    theme: hopeTheme({
        hotReload: true,
        hostname: "https://life.wozsun.com",
        author: {
            name: "wozsun",
            url: "https://wozsun.com",
            email: "master@wozsun.com",
        },
        favicon: "https://asset.wozsun.com/wozsun.svg",
        logo: "https://asset.wozsun.com/wozsun.svg",
        logoDark: "https://asset.wozsun.com/wozsun.svg",
        repo: "https://github.com/wozsun/Life",
        repoDisplay: true,
        repoLabel: "GitHub",
        hideSiteNameOnMobile: true,
        navbar: Navbar,
        navbarIcon: true,
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Repo", "Outlook", "Search"],
        },
        navTitle: "Life",
        navbarAutoHide: "mobile",
        sidebar: Sidebar,
        sidebarIcon: true,
        sidebarSorter: ["readme", "order", "title", "filename"],
        headerDepth: 2,
        breadcrumb: true,
        breadcrumbIcon: true,
        prevLink: true,
        nextLink: true,
        titleIcon: true,
        pageInfo: ["Original", "Date", "Category", "Tag"],
        lastUpdated: true,
        contributors: false,
        editLink: true,
        editLinkPattern: ":repo/-/edit/:branch/:path",
        docsRepo: "https://code.wozsun.com/life/life.wozsun.com",
        docsBranch: "main",
        docsDir: "src",
        displayFooter: true,
        copyright: "<b>CC BY-NC-SA 4.0 | Copyright © 2022-2023 wozsun</b>",
        rtl: false,
        toc: true,
        iconAssets: [
            "https://at.alicdn.com/t/c/font_4128793_d0rhm36922l.css",
            "https://asset.wozsun.com/remixicon/remixicon.css"
        ],
        iconPrefix: "ri-",
        darkmode: "enable",
        fullscreen: false,
        backToTop: true,
        pure: false,
        print: false,
        encrypt: {
            global: false,
            admin:[],
            config: {
                "/lrh/": ["20020618"],
            },
        },
        plugins: {
            git: true,
            nprogress: true,
            prismjs: true,
            photoSwipe: {
                scrollToClose: true,
                delay: 800,
            },
            readingTime: {
                wordPerMinute: 300,
            },
            seo: true,
            sitemap: true,
            copyright: {
                global: false,
                author: "wozsun",
                license: "CC BY-NC-SA 4.0",
                triggerLength: 300,
                disableCopy: false,
                disableSelection: false,
            },
            blog: {
                excerpt: true,
                excerptSeparator: "<!-- absrtact -->",
                excerptLength: 0,
                type: [],
                article: "/article/",
                category: "/category/",
                categoryItem: "/category/:name",
                tag: "/tag/",
                tagItem: "/tag/:name",
                star: "/star/",
                timeline: "/timeline/",
                hotReload: true,
            },
            copyCode: {
                showInMobile: true,
                duration: 2000,
                fancy: false,
                delay: 800,
            },
            components: {
                components: ["Badge", "VidStack"],
                componentOptions: {},
            },
            comment: {
                provider: "Giscus",
                comment: true,
                repo: "wozsun/Life",
                repoId: "R_kgDOJ8D0zQ",
                category: "General",
                categoryId: "DIC_kwDOJ8D0zc4CX6u3",
                mapping: "pathname",
                strict: true,
                lazyLoading: true,
                reactionsEnabled: true,
                inputPosition: "top",
                lightTheme: "light",
                darkTheme: "dark",
            },
            mdEnhance: {
                gfm: true,
                hint: true,
                checkLinks: { status: "dev" },
                tabs: true,
                codetabs: false,
                attrs: false,
                figure: false,
                mermaid: false,
                katex: false,
                mathjax: false,
                chart: false,
                echarts: false,
                revealJs: false,
                delay: 800,
                sup: true,
                sub: true,
                tasklist: true,
                demo: false,
                imgLazyload: true,
                imgMark: false,
                imgSize: false,
                obsidianImgSize: false,
                include: true,
                mark: true,
                footnote: true,
                align: true,
                vuePlayground: false,
                playground: { presets: [], config: {} },
                stylize: [
                    {
                        matcher: "Recommanded",
                        replacer: ({ tag }) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: { type: "tip" },
                                    content: "Recommanded",
                                };
                        },
                    },
                ],
            },
            pwa: {
                manifest: {
                    theme_color: "#1874ca",
                },
                favicon: "https://asset.wozsun.com/wozsun.svg",
                maxSize: 4096,
                cacheHTML: false,
                cachePic: true,
                maxPicSize: 4096,
                update: "hint",
                apple: {
                    icon: "https://asset.wozsun.com/wozsun.svg",
                    statusBarColor: "black",
                    maskIcon: "https://asset.wozsun.com/wozsun.svg",
                }
            },
            autoCatalog: {
                level: 3,
                index: false,
                exclude: [],
            },
        },
        blog: {
            sidebarDisplay: "none",
            avatar: "https://asset.wozsun.com/avatar.webp",
            roundAvatar: true,
            name: "wozsun",
            description: "欲买桂花同载酒，终不似，少年游",
            medias: {
                GitHub: "https://github.com/wozsun",
                Telegram: "https://t.me/wozsun",
                Email: "mailto:master@wozsun.com",
            },
        },
    }),
    plugins: [
        searchProPlugin({
            indexContent: true,
            autoSuggestions: true,
            hotKeys: [
                { key: "k", ctrl: true },
                { key: "/", ctrl: true }
            ],
            queryHistoryCount: 5,
            resultHistoryCount: 5,
            searchDelay: 150,
            sortStrategy: "max",
            worker: "search-pro.worker.js",
            hotReload: true,
            customFields: [
                {
                    getter: (page) => "page.frontmatter.category",
                    formatter: "分类：$content",
                },
                {
                    getter: (page) => "page.frontmatter.tag",
                    formatter: "标签：$content",
                },
            ],
        }),
    ],
});