#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { getDataOfImages, ImageData } from "./getDataOfImages";
import { getSuffix } from "./getSuffix";

getDataOfImages(["photo3.jpg", "photo.jpg", "photo2.JPG"])
  .then((allData) => {
    console.dir(getSuffix(allData));
  })
  .catch((e) => console.error(e));
