import { DefaultTheme, Colors } from 'react-native-paper'

const bgColor = '#00a663',
    btnColor = '#00a663',
    theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: Colors.white
        }
    }

export { bgColor, btnColor, theme }