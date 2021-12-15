/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { ImageData } from "./getDataOfImages";
import { getDateMapFromDataOfImages } from "./getDateMapFromDataOfImages";

test("for an android formatted date there's one or more corresponding src filepath in the date map", () => {
  const data: ImageData[] = [
    {
      src: "photo.jpg",
      date: new Date("1995-12-17T03:24:00"),
      androidDate: "19951217_032400",
      dst: "IMG_19951217_032400.jpg",
    },
  ];

  const dateMap = getDateMapFromDataOfImages(data);
  expect(dateMap).not.toBeEmpty();
  expect(dateMap.get("19951217_032400")).not.toBeEmpty();
  expect(dateMap.get("19951217_032400")?.has("photo.jpg")).toBeTrue();
});
