import {verticalScale, scale} from 'react-native-size-matters/extend';

export const HOME_ICON = (
  color = 'grey',
) => `<svg fill="${color}" width="${scale(24.383)}px" height="${verticalScale(
  24,
)}px" viewBox="0 0 24.383 24" xmlns="http://www.w3.org/2000/svg">
<path id="Path_163" data-name="Path 163" d="M32.383,30.979V18.025a1.534,1.534,0,0,0-.61-1.219l-10.668-8a1.532,1.532,0,0,0-1.829,0l-10.668,8A1.534,1.534,0,0,0,8,18.025V30.979A1.528,1.528,0,0,0,9.524,32.5h6.1a1.528,1.528,0,0,0,1.524-1.524V26.407a1.528,1.528,0,0,1,1.524-1.524h3.048a1.528,1.528,0,0,1,1.524,1.524v4.572A1.528,1.528,0,0,0,24.763,32.5h6.1A1.528,1.528,0,0,0,32.383,30.979Z" transform="translate(-8 -8.503)" fill="${color}"/>
</svg>
`;
