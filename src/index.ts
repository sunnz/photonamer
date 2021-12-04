#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { getExifDateTime } from "./getExifDateTime";

// exif smoke
getExifDateTime("photo.jpg")
  .then((dateTime) => console.log(`photo.jpg:\t${dateTime}`))
  .catch((error) => console.error(error));
getExifDateTime("photo2.JPG")
  .then((dateTime) => console.log(`photo2.JPG:\t${dateTime}`))
  .catch((error) => console.error(error));
