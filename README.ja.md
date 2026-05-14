# ImageDataUtil.js

ImageDataオブジェクトを操作するためのユーティリティ関数群です。

## 関数

- `decode(bin)`: バイナリデータからImageDataオブジェクトを返します。
- `encode(imgdata, ext)`: 指定された形式（jpgまたはpng）でImageDataオブジェクトのバイナリデータを返します。
- `resize(imgdata, wdst, hdst = 0)`: 指定された幅と高さで新しいImageDataオブジェクトを返します。
- `crop(imgdata, x, y, w, h)`: 指定された矩形に切り取った新しいImageDataオブジェクトを返します。

## 要件

このライブラリは以下の外部ライブラリに依存しています:
- [JPEG.js](https://github.com/code4fukui/JPEG)
- [PNG.js](https://github.com/code4fukui/PNG)
- [ImageResizer](https://github.com/code4fukui/ImageResizer)

## 使用方法

```javascript
import { ImageDataUtil } from "ImageDataUtil.js";

// バイナリデータをImageDataにデコード
const bin = await Deno.readFile("test.png");
const imgData = ImageDataUtil.decodeImage(bin);

// ImageDataをリサイズ
const resizedImgData = ImageDataUtil.resize(imgData, 50);

// ImageDataをバイナリにエンコード
const jpegBin = ImageDataUtil.encodeImage(imgData, "jpg");
```

## ライセンス

MIT License
