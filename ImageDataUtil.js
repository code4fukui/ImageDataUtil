import { JPEG } from "https://code4fukui.github.io/JPEG/JPEG.js";
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";
import { ImageResizer } from "https://code4fukui.github.io/ImageResizer/ImageResizer.js";

export class ImageDataUtil {
  static decodeImage(bin) {
    if (PNG.canDecode(bin)) {
      return PNG.decode(bin);
    } else if (PNG.canDecode(bin)) {
      return JPEG.decode(bin);
    }
    throw new Error("not supported format");
  }
  static encodeImage(imgd, ext) {
    if (ext == "jpg") {
      return JPEG.encode(imgd);
    } else if (ext == "png") {
      return PNG.encode(imgd);
    }
  }  

  static crop(img, x, y, w, h) {
    const data = new Uint8Array(w * h * 4);
    const res = {
      width: w,
      height: h,
      data,
    };
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        const src = (x + j + (y + i) * img.width) * 4;
        const dst = (j + i * res.width) * 4;
        for (let k = 0; k < 4; k++) res.data[dst + k] = img.data[src + k];
      }
    }
    return res;
  }
  // https://github.com/code4fukui/ImageResizer/
  static resize(imgdata, wdst, hdst = 0, typ_idx = 0, premultiply = false, colorspc = false) {
    return ImageResizer.resize(imgdata, wdst, hdst, typ_idx, premultiply, colorspc);
  }
};
