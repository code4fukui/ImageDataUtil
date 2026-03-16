# ImageDataUtil.js

ImageDataオブジェクトを操作するためのユーティリティ関数ライブラリです。

## 機能

- `decode(bin)`: バイナリデータからImageDataオブジェクトを生成します。
- `encode(imgdata, ext)`: ImageDataオブジェクトをJPEGやPNGなどのバイナリデータにエンコードします。
- `resize(imgdata, wdst, hdst = 0)`: ImageDataオブジェクトのサイズを変更した新しいImageDataオブジェクトを返します。
- `crop(imgdata, x, y, w, h)`: ImageDataオブジェクトから指定された矩形領域をトリミングした新しいImageDataオブジェクトを返します。

## 必要環境

このライブラリは以下の外部ライブラリに依存しています:
- [JPEG.js](https://github.com/code4fukui/JPEG)
- [PNG.js](https://github.com/code4fukui/PNG)
- [ImageResizer](https://github.com/code4fukui/ImageResizer)

## 使い方

```javascript
import { ImageDataUtil } from "ImageDataUtil.js";

// バイナリデータからImageDataオブジェクトを生成
const bin = await Deno.readFile("test.png");
const imgData = ImageDataUtil.decodeImage(bin);

// ImageDataオブジェクトをリサイズ
const resizedImgData = ImageDataUtil.resize(imgData, 50);

// ImageDataオブジェクトをバイナリデータにエンコード
const jpegBin = ImageDataUtil.encodeImage(imgData, "jpg");
```

## ライセンス

MIT License