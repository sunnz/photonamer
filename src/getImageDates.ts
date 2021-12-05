/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { getExifDateTime } from "./getExifDateTime";

type ImageDate = {
  path: string;
  date: string;
};

const defaultFormat = (date: Date) => date.toLocaleString();

/**
 * get android formatted date for all given paths to images
 *
 * @param paths to jpeg files
 * @param formatFn optional format function to turn js Date object into a formatted date string,
 * Date.prototype.toLocaleString() is used by default if none given
 * @returns a list formatted date for each path, each in a { path, date } object
 * @async
 */
export const getImageDates = async (
  paths: string[],
  formatFn: (date: Date) => string = defaultFormat
): Promise<ImageDate[]> => {
  const images = paths.map(async (path) => ({
    path,
    date: formatFn(await getExifDateTime(path)),
  }));

  const imageDates = await Promise.all(images);
  return imageDates;
};
