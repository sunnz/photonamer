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
      dst: "IMG_19951217_032400_01.jpg",
    },
    {
      src: "DS1100.jpg",
      date: new Date("1995-12-17T03:24:00"),
      androidDate: "19951217_032400",
      dst: "IMG_19951217_032400_02.jpg",
    },
    {
      src: "333444999.jpg",
      date: new Date("2020-08-08T10:42:18"),
      androidDate: "20200808_104218",
      dst: "IMG_20200808_104218.jpg",
    },
  ];

  const dateMap = getDateMapFromDataOfImages(data);
  expect(dateMap).not.toBeEmpty();
  expect(dateMap.size).toBe(2);
  expect(dateMap.has("19951217_032400")).toBe(true);
  expect(dateMap.get("19951217_032400")?.has("photo.jpg")).toBe(true);
  expect(dateMap.get("19951217_032400")?.has("DS1100.jpg")).toBe(true);
  expect(dateMap.get("19951217_032400")?.has("333444999.jpg")).toBe(false);
  expect(dateMap.has("20200808_104218")).toBe(true);
  expect(dateMap.get("20200808_104218")?.has("333444999.jpg")).toBe(true);
  expect(dateMap.get("20200808_104218")?.has("photo.jpg")).toBe(false);
  expect(dateMap.get("20200808_104218")?.has("DS1100.jpg")).toBe(false);
});
