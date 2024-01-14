import { ref } from 'vue';

const isDialogOpen = ref(false);
const currentEvent = ref({});
const personCounter = ref(1);

const checkDefault = () => {
    return !isDialogOpen.value && personCounter.value !== 1;
}

const openDialog = (data) => {
    currentEvent.value = data;
    isDialogOpen.value = true;
    console.log("Dialog Opened: ", isDialogOpen.value)
    console.log("Current Event: ", currentEvent.value)

};

// Function to close the dialog and save
const closeDialogAndSave = () => {
    // Your save logic goes here

    // Close the dialog
    isDialogOpen.value = false;

};

// Function to cancel the current process
const cancelCurrentProcess = () => {
    // Your cancel logic goes here
    if (checkDefault())
        return;
    personCounter.value = 1
    // Close the dialog
    isDialogOpen.value = false;

};

export { isDialogOpen, currentEvent, personCounter, openDialog, cancelCurrentProcess, closeDialogAndSave };