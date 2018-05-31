module.exports = {
  cache: {
    cacheId: "facilplantar",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "facilplantar",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
