import React, { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';
import { Image } from 'native-base';
import useCatchError from '../../../../hooks/useCatchError';

type UtilCacheImageProps = {
  source: { uri: string };
} & React.ComponentProps<typeof Image>;

function UtilCacheImage({ source, ...rest }: UtilCacheImageProps) {
  const catchError = useCatchError();

  const [imgURI, setImgURI] = useState('');

  useEffect(() => {
    const cacheImage = async () => {
      try {
        const hashed = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          source.uri,
        );
        const path = `${FileSystem.cacheDirectory}${hashed}`;

        const image = await FileSystem.getInfoAsync(path);
        if (image.exists) {
          setImgURI(image.uri);
          return;
        }

        const newImage = await FileSystem.downloadAsync(source.uri, path);
        setImgURI(newImage.uri);
      } catch (error) {
        catchError(error);
      }
    };
    cacheImage();
  }, [source]);

  return imgURI && <Image source={{ uri: imgURI }} alt={imgURI} {...rest} />;
}

export default UtilCacheImage;
