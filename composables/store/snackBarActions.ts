interface SnackbarOptions {
    color?: String;
    gap?: number;
    login?: Boolean;
}

interface SnackbarState {
    snackbar: boolean;
    snackbarText: string;
    timeout: number;
    progress: number;
}

const snackbarState = useState<SnackbarState>('snackbar', () => ({
    snackbar: false,
    snackbarText: "This is a message from the snackbar",
    timeout: 3000,
    progress: 0
}));

const snackBarOptions = useState<SnackbarOptions>('options', () => ({
    color: 'success',
    gap: 4
}));

const showSnackbar = (increment: number = 2, options: SnackbarOptions = snackBarOptions.value): void => {
    snackbarState.value.snackbar = true;

    let timeoutCompleted = false;

    const time = setTimeout(() => {
        snackbarState.value.snackbar = false;
        timeoutCompleted = true;
    }, snackbarState.value.timeout);

    const interval = setInterval(() => {
        if (snackbarState.value.progress === 105 || timeoutCompleted || !snackbarState.value.snackbar) {
            snackbarState.value.progress = 0;
            clearInterval(interval);
            clearTimeout(time);
        }
        snackbarState.value.progress += increment;
    }, 50);
    if (snackBarOptions.value.login)
        navigateTo('/')
        console.log("Options: ", snackBarOptions);
    console.log("State: ", snackbarState);
};
export { showSnackbar, snackbarState, snackBarOptions };