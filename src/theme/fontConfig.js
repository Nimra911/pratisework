import PoppinsBold  from "../../src/assets/fonts/Poppins-Bold.ttf";
import PoppinsMedium from "../../src/assets/fonts/Poppins-Medium.ttf";
import PoppinsSemiBold  from "../../src/assets/fonts/Poppins-SemiBold.ttf";
import PoppinsRegular  from "../../src/assets/fonts/Poppins-Regular.ttf";

const poppinsMedium = {
  fontFamily: "Poppins-Medium",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
      local('Poppins-Medium'),
      url(${PoppinsMedium}) format('truetype')
    `,
};
const poppinsBold = {
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontDisplay: "swap",
    src: `
        local('Poppins-Bold'),
        url(${PoppinsBold}) format('truetype')
      `,
  };
  const poppinsSemiBold = {
    fontFamily: "Poppins-SemiBold",
    fontStyle: "normal",
    fontDisplay: "swap",
    src: `
        local('Poppins-SemiBold'),
        url(${PoppinsSemiBold}) format('truetype')
      `,
  };
  const  poppinsRegular = {
    fontFamily: "Poppins-Regular",
    fontStyle: "normal",
    fontDisplay: "swap",
    src: `
        local('Poppins-Regular'),
        url(${PoppinsRegular}) format('truetype')
      `,
  };


const arr = [
  poppinsMedium,
  poppinsBold,
  poppinsSemiBold,
  poppinsRegular,
];

export default arr;
