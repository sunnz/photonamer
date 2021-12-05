#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { getDataOfImages } from "./getDataOfImages";

getDataOfImages(["photo.jpg", "photo2.JPG", "photo3.jpg"])
  .then((data) => console.dir(data))
  .catch((e) => console.error(e));
