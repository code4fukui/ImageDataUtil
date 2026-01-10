import * as t from "https://deno.land/std/testing/asserts.ts";
import { ImageDataUtil } from "../ImageDataUtil.js";

Deno.test("decodeImage / encodeImage / getFormat", async () => {
  const bin = await Deno.readFile("./test/test.png");
  t.assertEquals(ImageDataUtil.getFormat(bin), "png");
  const imgd = ImageDataUtil.decodeImage(bin);
  const jpeg = ImageDataUtil.encodeImage(imgd, "jpg");
  const bin2 = await Deno.readFile("./test/test.jpg");
  t.assertEquals(ImageDataUtil.getFormat(jpeg), "jpg");
  //await Deno.writeFile("./test/test.jpg", jpeg);
  t.assertEquals(jpeg, bin2);
  const imgd2 = ImageDataUtil.decodeImage(jpeg);
  t.assertEquals(imgd.width, imgd2.width);
  t.assertEquals(imgd.height, imgd2.height);
});

Deno.test("resize", async () => {
  const bin = await Deno.readFile("./test/test.png");
  const imgd = ImageDataUtil.decodeImage(bin);
  const imgd2 = ImageDataUtil.resize(imgd, 50);
  t.assertEquals(imgd2.width, 50);
  const bin2 = ImageDataUtil.encodeImage(imgd2, "png");
  //await Deno.writeFile("./test/test_w50.png", bin2);
  const bin2_chk = await Deno.readFile("./test/test_w50.png");
  t.assertEquals(bin2, bin2_chk);
  /*
  const imgd2 = ImageDataUtil.decodeImage(jpeg);
  t.assertEquals(imgd.width, imgd2.width);
  t.assertEquals(imgd.height, imgd2.height);
  */
});
