import { math } from "polished"

export const theme = {
  baseLineHeight: "2.33rem",
  baseVerticalRhythm: "2.22rem",
  breakpoints: {
    medium: 768,
    large: 1024
  },
  typeSets: {
    heading: {
      "-1": `
        font-size: 0.7rem;
        line-height: 1.778rem;
      `,
      "0": `
        font-size: 1rem;
        line-height: 2.33rem;
      `,
      "1": `
        font-size: 1.414rem;
        line-height: 2.444rem;
      `,
      "2": `
        font-size: 2rem;
        line-height: 3.222rem;
      `,
      "3": `
        font-size: 2.827rem;
        line-height: 1;
      `,
      "4": `
        font-size: 3.998rem;
        line-height: 5.25rem;
      `,
      "5": `
        font-size: 5.653rem;
        line-height: 6.6rem;
      `
    },
    content: {
      "-1": `
        font-size: 0.7rem;
        line-height: 1.778rem;
      `,
      "1": `
        font-size: 1.414rem;
        line-height: 3rem;
      `
    }
  },
  color: {
    greyCloud: "#eeeeee",
    greySlate: "#141313",
    blueVolt: "#0074D9",
    redPunk: "#FF4136"
  }
}

const rhythm = (steps = 1) => math(theme.baseVerticalRhythm + " * " + steps)
theme.rhythm = rhythm
