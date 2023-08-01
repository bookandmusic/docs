import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import { defaultSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://bookandmusic.cn",

  author: {
    name: "Mr.Liu",
    url: "https://bookandmusic.cn",
    email: "lsf_2012@163.com"
  },
  blog: {
    // avatar:"",
    roundAvatar: true,
  },
  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  pure: true,

  favicon: "/logo.png",

  repo: "bookandmusic/docs",

  docsRepo: "bookandmusic/docs",
  docsDir: "src",
  docsBranch: "master",

  // navbar
  navbar,
  // sidebar
  sidebar: defaultSidebar,

  footer: '<a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">备案号: 京ICP备2021028097号</a> | <a href="/about/">关于网站</a>',

  displayFooter: true,

  breadcrumb: false,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: {
      excerptLength: 0,
    },
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "bookandmusic/comments",
      repoId: "R_kgDOJf0cDA",
      category: "Announcements",
      categoryId: "DIC_kwDOJf0cDM4CWUUJ",
      lazyLoading: true,
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
