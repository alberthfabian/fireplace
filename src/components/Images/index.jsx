const images = {
  fireplace1: require('../../assets/Images/Chimenea1.jpeg').default,
  fireplace2: require('../../assets/Images/Chimenea2.jpeg').default,
  fireplace3: require('../../assets/Images/Chimenea3.jpeg').default,
  fireplace4: require('../../assets/Images/Chimenea4.jpeg').default,
  fireplace5: require('../../assets/Images/Chimenea5.jpeg').default,
  fireplace6: require('../../assets/Images/Chimenea6.jpeg').default,
  fireplace7: require('../../assets/Images/Chimenea7.jpeg').default,
  fireplace8: require('../../assets/Images/Chimenea8.jpeg').default,
  default: require('../../assets/Images/Chimenea1.jpeg').default, 
}

export const getIcon = (image) => {
  let icon = images[image];
  if (icon === undefined) {
      icon = images.default
  }
  return icon;
}

export default images;