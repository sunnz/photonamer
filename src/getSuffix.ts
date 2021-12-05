/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { ImageData } from "./getDataOfImages";
import { getDateMapFromDataOfImages } from "./getDateMapFromDataOfImages";

/**
 * adds a suffix to destination path when two images are taken on the same date and time
 *
 * @param allData a list value object containing the result for each given path to the image file
 * @returns allData where a suffix is added to dst ordered by the original paths
 */
export const getSuffix = (allData: ImageData[]) => {
  const dateMap = getDateMapFromDataOfImages(allData);
  dateMap.forEach((sources, androidDate) => {
    if (sources.size <= 1) return;
    [...sources].forEach((src, index) => {
      const suffix = `${index}`.padStart(2, "0");
      allData = allData.map((data) =>
        data.src == src
          ? {
              ...data,
              androidDate: `${androidDate}_${suffix}`,
              dst: `IMG_${androidDate}_${suffix}.jpg`,
            }
          : data
      );
    });
  });

  return allData;
};
