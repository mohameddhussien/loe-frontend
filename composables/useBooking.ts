import { Adult, Child } from '@/classes/person';
export const useBooking = (Adults: Adult[]) => {
    const AddChildOfAdult = (adult: Adult) => {
        if (personCounter.value < 10 === false)
            return;
        personCounter.value++;
        const adultIndex = Adults.indexOf(adult);
        if (adultIndex !== -1)
            Adults[adultIndex].children.push(new Child());
    };

    const removeChildOfAdult = (adult: Adult, child: Child) => {
        personCounter.value--;
        const adultIndex = Adults.indexOf(adult);
        if (adultIndex !== -1)
            Adults[adultIndex].children.splice(Adults[adultIndex].children.indexOf(child), 1);
    };

    const AddAdult = () => {
        if (personCounter.value < 10 === false)
            return;
        personCounter.value++
        Adults.push(new Adult());
    }

    type RemoveAdultFunction = (adult?: Adult, index?: number) => void;
    const removeAdult: RemoveAdultFunction = (adultToRemove?: Adult, indexToRemove?: number): void => {
        if (adultToRemove && indexToRemove !== undefined)
            removeSpecificAdult(adultToRemove, indexToRemove);
        else
            removeLastAdult();
    };

    const removeSpecificAdult = (adult: Adult, index: number): void => {
        const removedChildrenCount = adult.children.length + 1;
        personCounter.value -= removedChildrenCount;
        Adults.splice(index, 1);
    };

    const removeLastAdult = (): void => {
        const lastAdultIndex = Adults.length - 1;
        if (lastAdultIndex >= 0 === false)
            return;
        const removedChildrenCount = Adults[lastAdultIndex].children.length + 1;
        personCounter.value -= removedChildrenCount;
        Adults.pop();
    };

    return {
        AddAdult,
        removeAdult,
        AddChildOfAdult,
        removeChildOfAdult
    }
}