import konstaConfig from "konsta/config"

const config = konstaConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      ios: "my-ios-font",
      material: "my-material-font",
    },
  },
})

export default config
