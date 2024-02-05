import * as U from "./util"
// prettier-ignore
export const picsumUrl = (width: number, heigth: number): string =>
  `https://picsum.photos/${width}/${heigth}`
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsumUrl(size, size)
}