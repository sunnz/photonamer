#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { format } from "date-fns/fp";
import { getImageDates } from "./getImageDates";

const androidDateFormat = format("yyyyMMdd_HHmmss");

getImageDates(["photo.jpg", "photo2.JPG", "photo3.jpg"], androidDateFormat)
  .then((data) => console.dir(data))
  .catch((e) => console.error(e));

getImageDates(["photo.jpg", "photo2.JPG", "photo3.jpg"])
  .then((data) => console.dir(data))
  .catch((e) => console.error(e));
