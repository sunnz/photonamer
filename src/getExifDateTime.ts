/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { ExifImage } from "exif";

/**
 * get the date time of when a photo was taken
 *
 * @param path to a jpeg file
 * @returns the date and time the picture was taken, ie when the original image data was generated
 */
export const getExifDateTime = (path: string): Promise<string> => {
  return new Promise((resolve) => {
    new ExifImage({ image: path }, (error, data) => {
      if (error) {
        throw error;
      }

      const {
        exif: { DateTimeOriginal },
      } = data;

      if (null == DateTimeOriginal) {
        throw new Error("No DateTimeOriginal field found in image exif data");
      }

      resolve(DateTimeOriginal);
    });
  });
};
