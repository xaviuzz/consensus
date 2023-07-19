module.exports = {
  
  esbuild: {
    minify: false,
    target: "es2015",
  },
  
  postbuild: async () => {
    console.log("postbuild");
    const cpy = (await import("cpy")).default;
    await cpy(
      [
        "src/locales/**"
      ],
      "dist/locales"
    );
  },
};
