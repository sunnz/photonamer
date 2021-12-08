#!/usr/bin/env node

/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { prompt } from "inquirer";
import { rename } from "fs";

import { getDataOfImages } from "./getDataOfImages";
import { getSuffix } from "./getSuffix";

// todo get paths to all jpg files from the current directory (recursively) - glob()
// todo remove getImageDates
// ?? write exif date to fs - fs.stat() ??

getDataOfImages(["photo3.jpg", "photo.jpg", "photo2.JPG"])
  .then((imageData) => {
    const data = getSuffix(imageData).sort(({ dst: dst1 }, { dst: dst2 }) =>
      dst1.localeCompare(dst2)
    );
    // display all renames/move
    // todo cli-color ie console.log(sprintf('%-40s => %-40s', clc.yellow(j), clc.green(map.change[j])))
    console.log(data.map(({ src, dst }) => `${src}\t=> ${dst}`).join("\n"));
    prompt([
      {
        name: "confirmRenames",
        type: "confirm",
        message: "are you sure?",
      },
    ])
      .then(({ confirmRenames }) => {
        // on yes renames/move
        if (!confirmRenames) return;
        console.log("move");
        console.dir(data);
        // rename images
        // ?? path.dirname() / path.basename() / path.join() ??
        data.forEach(({ src, dst }) =>
          rename(src, dst, (e) => {
            if (null == e) console.log(`${src}\t=> ${dst}\t[done]`);
            else console.error(e);
          })
        );
      })
      .catch((e) => console.error(e));
  })
  .catch((e) => console.error(e));
