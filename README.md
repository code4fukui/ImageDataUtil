# ImageDataUtil.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Utility functions for manipulating ImageData objects.

## Functions

- `decode(bin)`: Returns an ImageData object from the binary data.
- `encode(imgdata, ext)`: Returns the binary data of the ImageData object in the specified format (jpg or png).
- `resize(imgdata, wdst, hdst = 0)`: Returns a new ImageData object with the specified width and height.
- `crop(imgdata, x, y, w, h)`: Returns a new ImageData object cropped to the specified rectangle.

## Requirements

This library depends on the following external libraries:
- [JPEG.js](https://github.com/code4fukui/JPEG)
- [PNG.js](https://github.com/code4fukui/PNG)
- [ImageResizer](https://github.com/code4fukui/ImageResizer)

## Usage

```javascript
import { ImageDataUtil } from "ImageDataUtil.js";

// Decode binary data to ImageData
const bin = await Deno.readFile("test.png");
const imgData = ImageDataUtil.decodeImage(bin);

// Resize ImageData
const resizedImgData = ImageDataUtil.resize(imgData, 50);

// Encode ImageData to binary
const jpegBin = ImageDataUtil.encodeImage(imgData, "jpg");
```

## License

MIT License