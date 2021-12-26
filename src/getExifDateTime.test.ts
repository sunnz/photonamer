import { getExifDateTime } from "./getExifDateTime";

// we mock exif.ExifImage to always return a static exif DateTimeOriginal
// instead of getting it from a real jpg file
jest.mock("exif", () => {
  return {
    ExifImage: jest.fn((_, callback) => {
      const data = {
        exif: {
          DateTimeOriginal: "2014:08:11 10:12:00",
        },
      };
      callback(undefined, data);
    }),
  };
});

it("returns date obj", async () => {
  const testDate = await getExifDateTime("test.jpg");
  expect(testDate).toEqual(new Date("2014-08-11T10:12:00"));
});
