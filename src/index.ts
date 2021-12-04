#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { format } from "date-fns";
import { getExifDateTime } from "./getExifDateTime";

// exif smoke
["photo.jpg", "photo2.JPG", "photo3.jpg"].forEach((imgPath) => {
  getExifDateTime(imgPath)
    .then((date) => {
      const dateString = format(date, "yyyyMMdd_HHmmss");
      const fileName = `IMG_${dateString}.jpg`;
      console.log(`${imgPath}:\t${date} => ${fileName}`);
    })
    .catch((error) => console.error(error));
});
