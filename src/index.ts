#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { getDataOfImages } from "./getDataOfImages";
import { getDateMapFromDataOfImages } from "./getDateMapFromDataOfImages";

getDataOfImages(["photo3.jpg", "photo.jpg", "photo2.JPG"])
  .then((data) => {
    const dateMap = getDateMapFromDataOfImages(data);
    console.dir(data);
    console.dir(dateMap);
  })
  .catch((e) => console.error(e));
