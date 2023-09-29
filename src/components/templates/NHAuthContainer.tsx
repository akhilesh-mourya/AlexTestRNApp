import {
  AuthContainer,
  BodyContainer,
  InnerContainer,
  ScrollView,
} from './styles';
import React, {FC} from 'react';
import {Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import NHAuthLogoContainer from '../organisms/authLogoContainer';
import {CAP_ICON} from '../../assets/svgs';
import NHChatDetailsLogoContainer from '../organisms/chatDetailsLogoContainer';

interface NHAuthContainerProps {
  children?: any;
  isStepIndicator?: boolean;
  currentPage?: number;
  isScroll?: boolean;
  contentContainerStyle?: any;
  isFromAuth?: boolean;
  extraData?: any;
  titleEdit?: boolean;
  onGrouptitleChange?: any;
  isEditDisabled?: boolean;
  onGrouptitleEditButtonPress?: any;
}
const NHAuthContainer: FC<NHAuthContainerProps> = React.memo(props => {
  const {
    children,
    isStepIndicator = false,
    currentPage = 0,
    isScroll = true,
    isFromAuth = true,
    contentContainerStyle = {},
    extraData = {icon: CAP_ICON(), title: 'test', subTitle: 'Sub Title'},
    titleEdit = true,
    onGrouptitleChange = () => {},
    onGrouptitleEditButtonPress = () => {},
    isEditDisabled = true,
  } = props;
  const body = () => {
    return (
      <AuthContainer>
        {isFromAuth ? (
          <NHAuthLogoContainer
            isStepIndicator={isStepIndicator}
            currentPage={currentPage}
          />
        ) : (
          <NHChatDetailsLogoContainer
            extraData={extraData}
            titleEdit={titleEdit}
            onGrouptitleChange={onGrouptitleChange}
            onGrouptitleEditButtonPress={onGrouptitleEditButtonPress}
            isEditDisabled={isEditDisabled}
          />
        )}
        <BodyContainer>{children}</BodyContainer>
      </AuthContainer>
    );
  };

  if (isScroll) {
    return (
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <KeyboardAwareScrollView
          contentContainerStyle={InnerContainer}
          keyboardShouldPersistTaps={'handled'}
          enableAutomaticScroll={true}
          enableOnAndroid={true}
          bounces={true}
          extraScrollHeight={Platform.select({ios: 0, android: -200})}>
          {body()}
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  } else {
    return <AuthContainer>{body()}</AuthContainer>;
  }
});

export default NHAuthContainer;
