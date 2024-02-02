import { Adult } from '~/classes/person';
// const adult = ref<Adult>({
//     name: "",
//     age: "",
//     contact_mandatory: "",
//     contact_optional: "",
//     email: "",
//     children: [],
//     bus: false,
//     food: false,
//     showDetails: false
// });
export const useBooking = (Adults: Adult[]) => {
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
        const adult = new Adult();
        if (personCounter.value < 10) {
            personCounter.value++
            Adults.push(adult);
        }
    }
    // const removeAdult = () => {
    //     const lastAdultIndex = Adults.length - 1
    //     personCounter.value -= (Adults[lastAdultIndex].children.length + 1)
    //     Adults.pop()
    // }
    const removeAdult: {
        (adult: Adult, index: number): void;
        // Overload 2: Arrow function with no parameters
        (): void;
    } = (
            (adult?: Adult, index?: number): void => {
                if (adult && index !== undefined) {
                    personCounter.value -= adult.children.length + 1;
                    console.log(Adults)
                    Adults.splice(index, 1);

                } else {
                    const lastAdultIndex = Adults.length - 1;
                    if (lastAdultIndex >= 0) {
                        personCounter.value -= Adults[lastAdultIndex].children.length + 1;
                        Adults.pop();
                    }
                }
            }
        );

    return {
        AddAdult,
        removeAdult
    }
}