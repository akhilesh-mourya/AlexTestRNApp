import {InnerContainer} from './styles';
import React, {FC} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters/extend';

interface NHKeyboardHandlingContainerProps {
  children?: any;
  contentContainerStyle?: any;
}
const NHKeyboardHandlingContainer: FC<NHKeyboardHandlingContainerProps> =
  React.memo(({children}) => {
    return (
      <KeyboardAwareScrollView
        style={{paddingHorizontal: scale(24)}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={InnerContainer}
        keyboardShouldPersistTaps={'handled'}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        bounces={true}>
        {children}
      </KeyboardAwareScrollView>
    );
  });

export default NHKeyboardHandlingContainer;
