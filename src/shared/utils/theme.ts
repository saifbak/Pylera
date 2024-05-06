// import { Dimensions, Platform } from "react-native";
import {
  ITheme,
  ThemeIcons,
  ThemeFonts,
  ThemeAssets,
  ThemeColors,
} from '../types/theme';
// import { COLORS } from "./colors";

// const { width, height } = Dimensions.get('window');

// export const WEIGHTS: ThemeWeights = {
//   text: 'normal',
//   h1: Platform.OS === 'ios' ? '700' : 'normal',
//   h2: Platform.OS === 'ios' ? '700' : 'normal',
//   h3: Platform.OS === 'ios' ? '700' : 'normal',
//   h4: Platform.OS === 'ios' ? '700' : 'normal',
//   h5: Platform.OS === 'ios' ? '600' : 'normal',
//   p: 'normal',

//   thin: Platform.OS === 'ios' ? '100' : 'normal',
//   extralight: Platform.OS === 'ios' ? '200' : 'normal',
//   light: Platform.OS === 'ios' ? '300' : 'normal',
//   normal: Platform.OS === 'ios' ? '400' : 'normal',
//   medium: Platform.OS === 'ios' ? '500' : 'normal',
//   semibold: Platform.OS === 'ios' ? '600' : 'normal',
//   bold: Platform.OS === 'ios' ? '700' : 'normal',
//   extrabold: Platform.OS === 'ios' ? '800' : 'normal',
//   black: Platform.OS === 'ios' ? '900' : 'normal',
// };

export const ASSETS: ThemeAssets = {
  // fonts
  SegoeUI: require('../../../assets/fonts/SegoeUI.ttf'),
  SegoeUIBold: require('../../../assets/fonts/SegoeUI-Bold.ttf'),
  //   SFProDisplayHeavy: require('../../../assets/fonts/SFProDisplay-Heavy.ttf'),
  SegoeUILight: require('../../../assets/fonts/SegoeUI-SemiLight.ttf'),
  // SegoeUIMedium: require('../../../assets/fonts/'),
  // SegoeUIRegular: require('../../../assets/fonts/SegoeUI.ttf'),
  SegoeUISemiBold: require('../../../assets/fonts/SegoeUI-SemiBold.ttf'),
  //   SFProDisplaySemiThin: require('../../../assets/fonts/SFProDisplay-Thin.ttf'),
  PoppinsMedium: require('../../../assets/fonts/Poppins-Medium.ttf'),
  DroidSansArabic: require('../../../assets/fonts/DroidSansArabic.ttf'),

  // // backgrounds/logo
  // logo: require('../assets/images/logo.png'),
  // header: require('../assets/images/header.png'),
  // background: require('../assets/images/background.png'),
  // ios: require('../assets/images/ios.png'),
  // android: require('../assets/images/android.png'),

  // // cards
  // card1: require('../assets/images/card1.png'),
  // card2: require('../assets/images/card2.png'),
  // card3: require('../assets/images/card3.png'),
  // card4: require('../assets/images/card4.png'),
  // card5: require('../assets/images/card5.png'),

  // // gallery photos
  // photo1: require('../assets/images/photo1.png'),
  // photo2: require('../assets/images/photo2.png'),
  // photo3: require('../assets/images/photo3.png'),
  // photo4: require('../assets/images/photo4.png'),
  // photo5: require('../assets/images/photo5.png'),
  // photo6: require('../assets/images/photo6.png'),
  // carousel1: require('../assets/images/carousel1.png'),

  // avatars
  // avatar1: require('../assets/images/avatar1.png'),
  // avatar2: require('../assets/images/avatar2.png'),

  // // cars
  // x5: require('../assets/images/x5.png'),
  // gle: require('../assets/images/gle.png'),
  // tesla: require('../assets/images/tesla.png'),
};

export const FONTS: ThemeFonts = {
  // based on font size
  text: 'SegoeUI',
  h1: 'SegoeUI-Bold',
  h2: 'SegoeUI-Bold',
  h3: 'SegoeUI-Bold',
  h4: 'SegoeUI-Bold',
  h5: 'SegoeUI-SemiBold',
  p: 'SegoeUI',

  // based on fontWeight
  thin: 'SegoeUI-SemiLight',
  extralight: 'SegoeUI-SemiLight',
  light: 'SegoeUI-SemiLight',
  normal: 'SegoeUI',
  medium: 'Poppins-Medium',
  semibold: 'SegoeUI-SemiBold',
  bold: 'SegoeUI-Bold',
  text_arabic: 'DroidSansArabic',
  // extrabold: 'SegoeUI-Heavy',
  // black: 'SFProDisplay-Black',
};

// export const LINE_HEIGHTS: ThemeLineHeights = {
//   // font lineHeight
//   text: 22,
//   h1: 60,
//   h2: 55,
//   h3: 43,
//   h4: 33,
//   h5: 24,
//   p: 22,
// };

// export const GRADIENTS: ThemeGradients = {
//   primary: ['#FF0080', '#7928CA'],
//   secondary: ['#A8B8D8', '#627594'],
//   info: ['#21D4FD', '#2152FF'],
//   success: ['#98EC2D', '#17AD37'],
//   warning: ['#FBCF33', '#F53939'],
//   danger: ['#FF667C', '#EA0606'],

//   light: ['#EBEFF4', '#CED4DA'],
//   dark: ['#3A416F', '#141727'],

//   white: [String(COLORS.white), '#EBEFF4'],
//   black: [String(COLORS.black), '#141727'],

//   divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
//   menu: [
//     'rgba(255, 255, 255, 0.2)',
//     'rgba(112, 125, 149, 0.5)',
//     'rgba(255, 255, 255, 0.2)',
//   ],
// };

// export const SIZES: ThemeSizes = {
//   // global sizes
//   base: 8,
//   text: 14,
//   radius: 4,
//   padding: 20,

//   // font sizes
//   h1: 44,
//   h2: 40,
//   h3: 32,
//   h4: 24,
//   h5: 18,
//   p: 16,

//   // button sizes
//   buttonBorder: 1,
//   buttonRadius: 8,
//   socialSize: 64,
//   socialRadius: 16,
//   socialIconSize: 26,

//   // button shadow
//   shadowOffsetWidth: 0,
//   shadowOffsetHeight: 7,
//   shadowOpacity: 0.07,
//   shadowRadius: 4,
//   elevation: 2,

//   // input sizes
//   inputHeight: 46,
//   inputBorder: 1,
//   inputRadius: 8,
//   inputPadding: 12,

//   // card sizes
//   cardRadius: 16,
//   cardPadding: 10,

//   // image sizes
//   imageRadius: 14,
//   avatarSize: 32,
//   avatarRadius: 8,

//   // switch sizes
//   switchWidth: 50,
//   switchHeight: 24,
//   switchThumb: 20,

//   // checkbox sizes
//   checkboxWidth: 18,
//   checkboxHeight: 18,
//   checkboxRadius: 5,
//   checkboxIconWidth: 10,
//   checkboxIconHeight: 8,

//   // product link size
//   linkSize: 12,

//   /** font size multiplier: for maxFontSizeMultiplier prop */
//   multiplier: 2,
// };

// export const SPACING: ThemeSpacing = {
//   /** xs: 4px */
//   xs: SIZES.base * 0.5,
//   /** s: 8px */
//   s: SIZES.base * 1,
//   /** sm: 16px */
//   sm: SIZES.base * 2,
//   /** m: 24px */
//   m: SIZES.base * 3,
//   /** md: 32px */
//   md: SIZES.base * 4,
//   /** l: 40px */
//   l: SIZES.base * 5,
//   /** xl: 48px */
//   xl: SIZES.base * 6,
//   /** xxl: 56px */
//   xxl: SIZES.base * 7,
// };

export const ICONS: ThemeIcons = {
  logo: require('../../assets/icons/logo.png'),
  check_mark: require('../../assets/icons/check-mark.png'),
  ob1: require('../../assets/icons/ob1.png'),
  ob2: require('../../assets/icons/ob2.png'),
  ob3: require('../../assets/icons/ob3.png'),
  arrow: require('../../assets/icons/arrow.png'),
  doctor: require('../../assets/icons/doctor.png'),
  dose: require('../../assets/icons/dose.png'),
  discover: require('../../assets/icons/discover.png'),
  medication: require('../../assets/icons/medication.png'),
  treatment: require('../../assets/icons/treatment.png'),
  home: require('../../assets/icons/home.png'),
  h_dose: require('../../assets/icons/h_dose.png'),
  h_medication: require('../../assets/icons/h_medication.png'),
  h_discover: require('../../assets/icons/h_discover.png'),
  h_treatment: require('../../assets/icons/h_treatment.png'),
  bell: require('../../assets/icons/bell.png'),
  infection: require('../../assets/icons/infection.png'),
  symptoms: require('../../assets/icons/symptoms.png'),
  cause: require('../../assets/icons/cause.png'),
  dodont: require('../../assets/icons/dodont.png'),
  do: require('../../assets/icons/do.png'),
  dont: require('../../assets/icons/dont.png'),
  facts: require('../../assets/icons/facts.png'),
  factsAR: require('../../assets/icons/facts-ar.png'),
  cranberry: require('../../assets/icons/cranberry.png'),
  broccoli: require('../../assets/icons/broccoli.png'),
  beans: require('../../assets/icons/beans.png'),
  green_banana: require('../../assets/icons/green_banana.png'),
  aloevera: require('../../assets/icons/aloevera.png'),
  gabbage: require('../../assets/icons/gabbage.png'),
  oregano: require('../../assets/icons/oregano.png'),
  pickles: require('../../assets/icons/pickles.png'),
  spices: require('../../assets/icons/spices.png'),
  tea: require('../../assets/icons/tea.png'),
  coffee: require('../../assets/icons/coffee.png'),
  softdrink: require('../../assets/icons/softdrink.png'),
  chocolate: require('../../assets/icons/chocolate.png'),
  citrus: require('../../assets/icons/citrus.png'),
  fries: require('../../assets/icons/fries.png'),
  tomatoes: require('../../assets/icons/tomatoes.png'),
  redmeat: require('../../assets/icons/redmeat.png'),
  caution: require('../../assets/icons/caution.png'),
  caution2: require('../../assets/icons/caution2.png'),
  indication: require('../../assets/icons/indication.png'),
  events: require('../../assets/icons/events.png'),
  information: require('../../assets/icons/information.png'),
  finish: require('../../assets/icons/finish.png'),
  family: require('../../assets/icons/family.png'),
  time: require('../../assets/icons/time.png'),
  date: require('../../assets/icons/date.png'),
  playbutton: require('../../assets/icons/playbutton.png'),
  lunch_time: require('../../assets/icons/lunch_time.png'),
  breakfast_time: require('../../assets/icons/breakfast_time.png'),
  cross: require('../../assets/icons/cross.png'),
  //   cart_plus: require('../../assets/icons/cart_plus.png'),
  //   minus: require('../../assets/icons/minus.png'),
  //   cart_minus: require('../../assets/icons/cart_minus.png'),
  //   under_dev: require('../../assets/icons/under_dev.png'),
  //   wallet: require('../../assets/icons/wallet.png'),
  //   discount: require('../../assets/icons/discount.png'),
  //   location: require('../../assets/icons/location.png'),
  //   logout: require('../../assets/icons/logout.png'),
  //   success_party_face: require('../../assets/icons/success_party_face.png'),
  //   profile_bg: require('../../assets/icons/profile_bg.png'),
  //   user: require('../../assets/icons/user.png'),
  //   lock: require('../../assets/icons/lock.png'),
  //   boxicon: require('../../assets/icons/box.png'),
  //   language: require('../../assets/icons/language.png'),
  //   fav: require('../../assets/icons/fav.png'),
  //   person_profile: require('../../assets/images/person.jpg'),
  //   forgot_password_icon: require('../../assets/icons/forgot_password_icon.png'),
  //   otp_verification_icon: require('../../assets/icons/otp_verification_icon.png'),
  //   reset_password_icon: require('../../assets/icons/reset_password_icon.png'),
  //   all_pro: require('../../assets/icons/all_pro.png'),
  //   user_profile: require('../../assets/icons/user_profile.png'),
};

export const COLORS: ThemeColors = {
  // default text color
  text: '#252F40',
  borderColor: '#66707A',
  lightBlue: '#D3E9FC',
  lightGreen: '#D0F4D5',
  lightPeach: '#FFDED3',
  lightPurple: '#C7C5FF',
  lightPink: '#FBE8FF',
  heart: '#F55E5E',

  // base colors
  /** UI color for #primary */
  primary: '#4597cf',
  /** UI color for #secondary */
  secondary: '#1d3660', // '#8392AB',
  appgreen: '#c1cf57', // '#8392AB',
  /** UI color for #tertiary */
  tertiary: '#E8AE4C',

  // non-colors
  black: '#171725',
  white: '#FFFFFF',

  dark: '#252F40',
  light: '#E9ECEF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

  // colors variations
  /** UI color for #danger */
  danger: '#EA0606',
  /** UI color for #warning */
  warning: '#FFC107',
  /** UI color for #success */
  success: '#82D616',
  /** UI color for #info */
  info: '#17C1E8',

  /** UI colors for navigation & card */
  card: '#FFFFFF',
  background: '#E9ECEF',

  /** UI color for shadowColor */
  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.3)',

  /** UI color for input borderColor on focus */
  focus: '#E293D3',
  input: '#252F40',

  /** UI color for switch checked/active color */
  switchOn: '#3A416F',
  switchOff: '#E9ECEF',

  /** UI color for checkbox icon checked/active color */
  checkbox: ['#3A416F', '#141727'],
  checkboxIcon: '#FFFFFF',

  /** social colors */
  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',

  /** icon tint color */
  icon: '#8392AB',

  /** blur tint color */
  blurTint: 'light',

  /** product link color */
  link: '#CB0C9F',
  yellow: '#f9f6cf',
  acrylic: '#ebf1fa',
  peach: '#fbdac8',
  metalic_grey: '#efefef',
};

export const THEME: ITheme = {
  colors: COLORS,
  //   gradients: GRADIENTS,
  //   sizes: { ...SIZES, ...{ width, height }, ...SPACING },
  icons: ICONS,
  assets: {...ICONS, ...ASSETS},
  fonts: FONTS,
  //   weights: WEIGHTS,
  //   lines: LINE_HEIGHTS,
};
