const images = {
  linkedIn: require('../../assets/Icons/LinkedIn.png').default,
  instagram: require('../../assets/Icons/Instagram.png').default,
  twitter: require('../../assets/Icons/Twitter.png').default,
  pinterest: require('../../assets/Icons/Pinterest.png').default,
  facebook: require('../../assets/Icons/Facebook.png').default,
  whatsApp: require('../../assets/Icons/WhatsApp.png').default,
  youtube: require('../../assets/Icons/Youtube.png').default,
  default: require('../../assets/Icons/Youtube.png').default, 
}

export const getSocial = (name) => {
  let social = images[name];
  if (social === undefined) {
      social = images.default
  }
  return social;
}

export default images;