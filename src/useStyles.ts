import useTheme from "./themes/hooks";

function useStyles() {
    const {theme} = useTheme()
    return {
        container: {
            backgroundColor: theme.colors.surface,
            color: theme.colors.onSurface
        },
        link: {
            color: theme.colors.primary
        }
    }
}

export default useStyles
