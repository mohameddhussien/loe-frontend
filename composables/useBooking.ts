import type { Adult } from '~/types/person';
const adult = ref<Adult>({
    name: "",
    age: "",
    contact_mandatory: "",
    contact_optional: "",
    children: [],
    bus: false,
    food: false,
    showDetails: false
});
export const useBooking = () => {
    const Adults = inject<Adult[]>('adults', []);
    // const AddChildOfAdult = (adult) => {
    //     if (personCounter.value < 10) {
    //         personCounter.value++
    //         Adults[adult].children.push({ name: "", age: "", bus: false, food: false, showDetails: true })
    //     }
    // }

    // const removeChildOfAdult = (adult, child) => {
    //     personCounter.value--
    //     Adults[adult].children.splice(child, 1)
    // }


    // const removeAdult = (adult, index) => {
    //     personCounter.value -= adult.children.length + 1
    //     Adults.splice(index, 1)
    // }
    const AddAdult = () => {
        if (personCounter.value < 10) {
            personCounter.value++
            Adults.push(adult.value)
        }
    }
    const removeAdult = () => {
        const lastAdultIndex = Adults.length - 1
        personCounter.value -= (Adults[lastAdultIndex].children.length + 1)
        Adults.pop()
    }
    return {
        AddAdult,
        removeAdult,
        Adults
    }
}