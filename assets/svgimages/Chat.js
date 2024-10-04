import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const SVGImage = ({
  svgContent,
  width,
  height,
  containerMargin,
  fill,
  stroke,
  targetPathId,
}) => {
  const svgProps = {};
  if (width) svgProps.width = width;
  if (height) svgProps.height = height;

  let adjustedSvgContent = svgContent;
  if (targetPathId && fill) {
    // Replace fill attribute for the target path
    adjustedSvgContent = adjustedSvgContent.replace(
      new RegExp(`id="${targetPathId}"[^>]*fill="([^"]*)"`, 'g'),
      `$& fill="${fill}"`,
    );
  } else {
    // If targetPathId is not provided or fill is not specified,
    // apply the fill to all paths
    if (fill)
      adjustedSvgContent = svgContent.replace(
        /fill="[^"]*"/g,
        `fill="${fill}"`,
      );
  }

  if (stroke) {
    adjustedSvgContent = adjustedSvgContent.replace(
      /stroke="[^"]*"/g,
      `stroke="${stroke}"`,
    );
  }
  return (
    <View>
      <SvgXml xml={adjustedSvgContent} {...svgProps} />
    </View>
  );
};

export default SVGImage;

export const PATH = {
  share_icon: `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 12.4916L18.3333 0.824951V7.49162C6.66667 9.15828 1.66667 17.4916 0 25.825C4.16667 19.9916 10 17.3249 18.3333 17.3249V24.1583L30 12.4916Z" fill="white"/>
  </svg>`,
  mute_icon: `<svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="0.824951" width="38" height="38" rx="19" fill="white"/>
  <path d="M19 11.825L16.91 13.915L19 16.005M11.27 10.825L10 12.095L14.73 16.825H10V22.825H14L19 27.825V21.095L23.25 25.355C22.58 25.865 21.83 26.285 21 26.525V28.595C22.38 28.275 23.63 27.645 24.68 26.785L26.73 28.825L28 27.555L19 18.555M26 19.825C26 20.765 25.8 21.645 25.46 22.465L26.97 23.975C27.6449 22.6956 27.9984 21.2714 28 19.825C28 15.545 25 11.965 21 11.055V13.115C23.89 13.975 26 16.655 26 19.825ZM23.5 19.825C23.5 18.055 22.5 16.535 21 15.795V18.005L23.45 20.455C23.5 20.255 23.5 20.035 23.5 19.825Z" fill="black"/>
  </svg>`,
  like_icon: `<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 27.525L12.825 25.545C5.1 18.54 0 13.905 0 8.25C0 3.615 3.63 0 8.25 0C10.86 0 13.365 1.215 15 3.12C16.635 1.215 19.14 0 21.75 0C26.37 0 30 3.615 30 8.25C30 13.905 24.9 18.54 17.175 25.545L15 27.525Z" fill="white"/>
  </svg>`,
  gift_icon: `<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.8 30.625C1.8 31.2888 2.33625 31.825 3 31.825H13.725V17.725H1.8V30.625ZM16.275 31.825H27C27.6638 31.825 28.2 31.2888 28.2 30.625V17.725H16.275V31.825ZM28.8 8.72502H23.265C23.775 7.92252 24.075 6.97002 24.075 5.95002C24.075 3.09627 21.7538 0.775024 18.9 0.775024C17.3475 0.775024 15.9488 1.46502 15 2.55252C14.0513 1.46502 12.6525 0.775024 11.1 0.775024C8.24625 0.775024 5.925 3.09627 5.925 5.95002C5.925 6.97002 6.22125 7.92252 6.735 8.72502H1.2C0.53625 8.72502 0 9.26127 0 9.92502V15.175H13.725V8.72502H16.275V15.175H30V9.92502C30 9.26127 29.4638 8.72502 28.8 8.72502ZM13.725 8.57502H11.1C9.6525 8.57502 8.475 7.39752 8.475 5.95002C8.475 4.50252 9.6525 3.32502 11.1 3.32502C12.5475 3.32502 13.725 4.50252 13.725 5.95002V8.57502ZM18.9 8.57502H16.275V5.95002C16.275 4.50252 17.4525 3.32502 18.9 3.32502C20.3475 3.32502 21.525 4.50252 21.525 5.95002C21.525 7.39752 20.3475 8.57502 18.9 8.57502Z" fill="white"/>
  </svg>`,
  comment_icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.525024H18C21.1826 0.525024 24.2348 1.78931 26.4853 4.03974C28.7357 6.29018 30 9.34243 30 12.525C30 15.7076 28.7357 18.7599 26.4853 21.0103C24.2348 23.2607 21.1826 24.525 18 24.525V29.775C10.5 26.775 0 22.275 0 12.525C0 9.34243 1.26428 6.29018 3.51472 4.03974C5.76516 1.78931 8.8174 0.525024 12 0.525024Z" fill="white"/>
  </svg>`,

}