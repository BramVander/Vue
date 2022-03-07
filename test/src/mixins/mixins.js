export default {
  methods: {
    getImgUrl(img) {
      // console.log("img", img);
      return require("../assets/countries/" + img);
    },
  },
};
