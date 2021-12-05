/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { format } from "date-fns";
import { getExifDateTime } from "./getExifDateTime";

type ImageDate = {
  path: string;
  date: string;
};

/**
 * get android formatted date for all given paths to images
 *
 * @param paths to jpeg files
 * @returns a list android formatted date for each path, each in a { path, date } object
 */
export const getImageDates = async (paths: string[]): Promise<ImageDate[]> => {
  const images = paths.map(async (path) => ({
    path,
    date: format(await getExifDateTime(path), "yyyyMMdd_HHmmss"),
  }));

  const imageDates = await Promise.all(images);
  return imageDates;
};
