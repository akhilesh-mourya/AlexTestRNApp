import {
  BodyContainer,
  SuccessContainer,
  SuccessLogoContainer,
  CheckIcon,
} from './styles';
import React, {FC} from 'react';

interface NHSuccessContainerProps {
  children?: any;
  isScroll?: boolean;
}
const NHSuccessContainer: FC<NHSuccessContainerProps> = React.memo(props => {
  const {children} = props;
  return (
    <SuccessContainer>
      <SuccessLogoContainer>
        <CheckIcon />
      </SuccessLogoContainer>
      <BodyContainer>{children}</BodyContainer>
    </SuccessContainer>
  );
});

export default NHSuccessContainer;
