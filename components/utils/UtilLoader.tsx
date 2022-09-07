import { Box, Center, Heading, HStack, Image, Spinner, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';

type UtilLoaderProps = {
  message?: string;
  overlay?: boolean;
  spinnerColor?: string;
  textColor?: string;
  isSaving?: boolean;
} & React.ComponentProps<typeof Box>;

function UtilLoader({
  message = 'กำลังโหลดข้อมูล...',
  overlay = false,
  spinnerColor = 'primary.400',
  textColor = 'gray.600',
  isSaving,
  ...rest
}: UtilLoaderProps) {
  const { t } = useTranslation();
  const [messageFormatted, setMessageFormatted] = useState('');

  useEffect(() => {
    if (isSaving) {
      setMessageFormatted(t('กำลังบันทึกข้อมูล...'));
    } else {
      setMessageFormatted(message);
    }
  }, [isSaving]);

  return overlay ? (
    <Center
      position="absolute"
      width="100%"
      height={Dimensions.get('screen').height}
      top="0"
      right="0"
      left="0"
      bottom="0"
      backgroundColor="rgba(0,0,0, 0.3)"
      zIndex={9999}>
      <Box
        position="relative"
        backgroundColor="white"
        paddingY={6}
        paddingX={8}
        rounded="xl"
        shadow={1}
        alignItems="center"
        justifyContent="center"
        zIndex="1000"
        {...rest}>
        <Image
          width="80px"
          height="80px"
          // source={require('../../../../assets/images/loading.gif')}
          resizeMode="contain"
          alt="loading"
        />
        <Heading mt={6} fontSize="lg">
          {messageFormatted}
        </Heading>
      </Box>
    </Center>
  ) : (
    <Center position="relative" zIndex="1000" {...rest}>
      <Spinner color={spinnerColor} />
      {messageFormatted && (
        <Heading mt={4} fontSize="lg" color={textColor}>
          {messageFormatted}
        </Heading>
      )}
    </Center>
  );
}

export default UtilLoader;
