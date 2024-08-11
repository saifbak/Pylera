import { ColorValue, FlexStyle, ImageSourcePropType, ScaledSize, TextStyle } from "react-native";

export interface ThemeColors {
    text: ColorValue;
    primary: ColorValue;
    secondary: ColorValue;
    appgreen: ColorValue;
    tertiary: ColorValue;
    lightBlue: ColorValue;
    lightPurple: ColorValue;
    lightPeach: ColorValue;
    lightGreen: ColorValue;
    lightPink: ColorValue;
    heart: ColorValue;
    black: ColorValue;
    white: ColorValue;
    light: ColorValue;
    dark: ColorValue;
    gray: ColorValue;
    danger: ColorValue;
    warning: ColorValue;
    success: ColorValue;
    info: ColorValue;
    card: ColorValue;
    background: ColorValue;
    shadow: ColorValue;
    overlay: ColorValue;
    focus: ColorValue;
    input: ColorValue;
    switchOn: ColorValue;
    switchOff: ColorValue;
    checkbox: string[];
    checkboxIcon: ColorValue;
    facebook: ColorValue;
    twitter: ColorValue;
    dribbble: ColorValue;
    icon: ColorValue;
    blurTint: 'light' | 'dark' | 'default';
    link: ColorValue;
    borderColor: ColorValue;
    yellow: ColorValue;
    acrylic: ColorValue;
    metalic_grey: ColorValue;
    peach: ColorValue;

}


// export interface ThemeGradients {
//     primary?: string[];
//     secondary?: string[];
//     tertiary?: string[];
//     black?: string[];
//     white?: string[];
//     light?: string[];
//     dark?: string[];
//     gray?: string[];
//     danger?: string[];
//     warning?: string[];
//     success?: string[];
//     info?: string[];
//     divider?: string[];
//     menu?: string[];
// }

// export interface ThemeSizes {
//     base: number;
//     text: number;
//     radius: number;
//     padding: number;

//     h1: number;
//     h2: number;
//     h3: number;
//     h4: number;
//     h5: number;
//     p: number;

//     buttonBorder: number;
//     buttonRadius: number;
//     socialSize: number;
//     socialRadius: number;
//     socialIconSize: number;

//     inputHeight: number;
//     inputBorder: number;
//     inputRadius: number;
//     inputPadding: number;

//     shadowOffsetWidth: number;
//     shadowOffsetHeight: number;
//     shadowOpacity: number;
//     shadowRadius: number;
//     elevation: number;

//     cardRadius: number;
//     cardPadding: number;

//     imageRadius: number;
//     avatarSize: number;
//     avatarRadius: number;

//     switchWidth: number;
//     switchHeight: number;
//     switchThumb: number;

//     checkboxWidth: number;
//     checkboxHeight: number;
//     checkboxRadius: number;
//     checkboxIconWidth: number;
//     checkboxIconHeight: number;

//     linkSize: number;

//     multiplier: number;
// }

// export interface ThemeSpacing {
//     xs: number;
//     s: number;
//     sm: number;
//     m: number;
//     md: number;
//     l: number;
//     xl: number;
//     xxl: number;
// }

// export interface ThemeWeights {
//     text: TextStyle['fontWeight'];
//     h1?: TextStyle['fontWeight'];
//     h2?: TextStyle['fontWeight'];
//     h3?: TextStyle['fontWeight'];
//     h4?: TextStyle['fontWeight'];
//     h5?: TextStyle['fontWeight'];
//     p?: TextStyle['fontWeight'];

//     thin: TextStyle['fontWeight'];
//     extralight: TextStyle['fontWeight'];
//     light: TextStyle['fontWeight'];
//     normal: TextStyle['fontWeight'];
//     medium: TextStyle['fontWeight'];
//     semibold?: TextStyle['fontWeight'];
//     bold?: TextStyle['fontWeight'];
//     extrabold?: TextStyle['fontWeight'];
//     black?: TextStyle['fontWeight'];
// }


export interface ThemeAssets {
    SegoeUI?: any;
    SegoeUIBold?: any;
    SegoeUIMedium?: any;
    SegoeUISemiBold?: any;
    SegoeUILight?: any;
    DroidSansArabic?: any;
    PoppinsMedium?: any;
    // SFProDisplaySemiThin?: any;
    // SFProDisplaySemiUltralight?: any;

    //     // logo: ImageSourcePropType;
    //     // header: ImageSourcePropType;
    //     // background: ImageSourcePropType;

    //     // card1: ImageSourcePropType;
    //     // card2: ImageSourcePropType;
    //     // card3: ImageSourcePropType;
    //     // card4: ImageSourcePropType;
    //     // card5: ImageSourcePropType;

    //     // photo1: ImageSourcePropType;
    //     // photo2: ImageSourcePropType;
    //     // photo3: ImageSourcePropType;
    //     // photo4: ImageSourcePropType;
    //     // photo5: ImageSourcePropType;
    //     // photo6: ImageSourcePropType;
    //     // carousel1: ImageSourcePropType;

    //     // avatar1: ImageSourcePropType;
    //     // avatar2: ImageSourcePropType;

    //     // x5: ImageSourcePropType;
    //     // gle: ImageSourcePropType;
    //     // tesla: ImageSourcePropType;

    //     // ios: ImageSourcePropType;
    //     // android: ImageSourcePropType;
}

export interface ThemeFonts {
    text: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    p: string;
    thin: string;
    extralight: string;
    light: string;
    normal: string;
    medium: string;
    bold: string;
    semibold: string;
    text_arabic: string;
    // extrabold: string;
    // black: string;
}

// export interface ThemeLineHeights {
//     text: number;
//     h1: number;
//     h2: number;
//     h3: number;
//     h4: number;
//     h5: number;
//     p: number;
// }

// // Spacing types
// export interface ISpacing
//     extends Pick<
//         FlexStyle,
//         | 'margin'
//         | 'marginVertical'
//         | 'marginHorizontal'
//         | 'marginLeft'
//         | 'marginRight'
//         | 'marginTop'
//         | 'marginBottom'
//         | 'padding'
//         | 'paddingVertical'
//         | 'paddingHorizontal'
//         | 'paddingLeft'
//         | 'paddingRight'
//         | 'paddingTop'
//         | 'paddingBottom'
//     > { }

// export type TWeight =
//     /** fontWeight: 400 */
//     | 'normal'
//     /** fontWeight: 100 */
//     | 'thin'
//     /** fontWeight: 200 */
//     | 'extralight'
//     /** fontWeight: 300 */
//     | 'light'
//     /** fontWeight: 500 */
//     | 'medium'
//     /** fontWeight: 600 */
//     | 'semibold'
//     /** fontWeight: 700 */
//     | 'bold'
//     /** fontWeight: 800 */
//     | 'extrabold'
//     /** fontWeight: 900 */
//     | 'black';

export interface ITheme {
    colors: ThemeColors;
    // gradients: ThemeGradients;
    // sizes: ThemeSizes & ThemeSpacing & ICommonTheme['sizes'];
    assets: ThemeAssets & ThemeIcons;
    icons: ThemeIcons;
    fonts: ThemeFonts;
    // weights: ThemeWeights;
    // lines: ThemeLineHeights;
}
// export interface ICommonTheme {
//     assets: ThemeAssets & ThemeIcons;
//     icons: ThemeIcons;
//     fonts: ThemeFonts;
//     weights: ThemeWeights;
//     lines: ThemeLineHeights;
//     sizes: {
//         width: ScaledSize['width'];
//         height: ScaledSize['height'];
//     };
// }

// export interface IThemeProvider {
//     children?: React.ReactNode;
//     theme?: ITheme;
//     setTheme?: (theme?: ITheme) => void;
// }



export interface ThemeIcons {
    logo: ImageSourcePropType;
    check_mark: ImageSourcePropType;
    ob1: ImageSourcePropType;
    ob2: ImageSourcePropType;
    ob3: ImageSourcePropType;
    arrow: ImageSourcePropType;
    doctor: ImageSourcePropType;
    dose: ImageSourcePropType;
    discover: ImageSourcePropType;
    treatment: ImageSourcePropType;
    medication: ImageSourcePropType;
    home: ImageSourcePropType;
    h_discover: ImageSourcePropType;
    h_medication: ImageSourcePropType;
    h_dose: ImageSourcePropType;
    h_treatment: ImageSourcePropType;
    bell: ImageSourcePropType;
    facts: ImageSourcePropType;
    factsAR: ImageSourcePropType;
    symptoms: ImageSourcePropType;
    cause: ImageSourcePropType;
    causeAr: ImageSourcePropType;
    infection: ImageSourcePropType;
    infectionAr: ImageSourcePropType;
    dodont: ImageSourcePropType;
    dodontAr: ImageSourcePropType;
    do: ImageSourcePropType;
    doAr: ImageSourcePropType;
    dont: ImageSourcePropType;
    dontAr: ImageSourcePropType;
    cranberry: ImageSourcePropType;
    coffee: ImageSourcePropType;
    broccoli: ImageSourcePropType;
    beans: ImageSourcePropType;
    green_banana: ImageSourcePropType;
    aloevera: ImageSourcePropType;
    gabbage: ImageSourcePropType;
    oregano: ImageSourcePropType;
    pickles: ImageSourcePropType;
    spices: ImageSourcePropType;
    tea: ImageSourcePropType;
    chocolate: ImageSourcePropType;
    citrus: ImageSourcePropType;
    fries: ImageSourcePropType;
    softdrink: ImageSourcePropType;
    tomatoes: ImageSourcePropType;
    redmeat: ImageSourcePropType;
    caution: ImageSourcePropType;
    indication: ImageSourcePropType;
    events: ImageSourcePropType;
    information: ImageSourcePropType;
    caution2: ImageSourcePropType;
    finish: ImageSourcePropType;
    family: ImageSourcePropType;
    time: ImageSourcePropType;
    date: ImageSourcePropType;
    playbutton: ImageSourcePropType;
    lunch_time: ImageSourcePropType;
    breakfast_time: ImageSourcePropType;
    cross: ImageSourcePropType;
    brand: ImageSourcePropType;
    //   plus: ImageSourcePropType;
    //   minus: ImageSourcePropType;
    //   cart_plus: ImageSourcePropType;
    //   cart_minus: ImageSourcePropType;
    //   under_dev: ImageSourcePropType;
    //   wallet: ImageSourcePropType;
    //   discount: ImageSourcePropType;
    //   location: ImageSourcePropType;
    //   logout: ImageSourcePropType;
    //   success_party_face: ImageSourcePropType;
    //   profile_bg: ImageSourcePropType;
    //   user: ImageSourcePropType;
    //   fav: ImageSourcePropType;
    //   lock: ImageSourcePropType;
    //   language: ImageSourcePropType;
    //   boxicon: ImageSourcePropType;
    //   person_profile: ImageSourcePropType;
    //   forgot_password_icon: ImageSourcePropType;
    //   otp_verification_icon: ImageSourcePropType;
    //   reset_password_icon: ImageSourcePropType;
    //   all_pro: ImageSourcePropType;
    //   user_profile: ImageSourcePropType;
}
