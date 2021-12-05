/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { ImageData } from "./getDataOfImages";

/**
 * get a map of android date to one or more image src
 *
 * @param data list of data of images as returned by getDataOfImages()
 * @returns a map of android date to a set of one or more image src
 *
 */
export const getDateMapFromDataOfImages = (
  data: ImageData[]
): Map<string, Set<string>> => {
  const dateMap = new Map();
  data.forEach(({ androidDate, src }) => {
    const srcSet = dateMap.get(androidDate) ?? new Set();
    dateMap.set(androidDate, srcSet.add(src));
  });
  return dateMap;
};
