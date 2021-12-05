/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { format } from "date-fns/fp";
import { getExifDateTime } from "./getExifDateTime";

type ImageData = {
  src: string;
  date: Date;
  androidDate: string;
  dst: string;
};

const androidDateFormat = format("yyyyMMdd_HHmmss");

/**
 * get data such as android formatted date, potential output filename for all given paths to images
 *
 * @param paths to jpeg files
 * @returns a list value object containing the result for each given path to the image file
 */
export const getDataOfImages = async (
  paths: string[]
): Promise<ImageData[]> => {
  const images = paths.map(async (src) => {
    const date = await getExifDateTime(src);
    const androidDate = androidDateFormat(date);

    return {
      src,
      date,
      androidDate,
      dst: `IMG_${androidDate}.jpg`,
    };
  });

  const imageDataList = await Promise.all(images);
  return imageDataList;
};
