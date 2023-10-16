import { insertDB, saveDB, getDB } from "./db";

export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note,
    };

    await insertDB(newNote);
    return newNote;
}

export const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
}

export const findNotes = async (filter) => {
    const { notes } = await getDB();
    return notes.filter(note => note.content.tolowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async id => {
    const { notes } = await getDB();
    const match = notes.find(note => note.id === id);

    if (match) {
        const newNotes = notes.filter(note => note.id !== id);   
        await saveDB({ notes: newNotes });
        return id;
    }
}

export const removeAllNotes = () => saveDB({ notes: [] });


const data = {
    shooting: 99,
    dribbling: 50,
    jumping: 40
}
const nums = [1,2,3,4]
const [first,_,__,last] = nums;
// const jumping = data.jumping;
// const shooting = data.shooting;
const { jumping, shooting } = data; //deconstructing

const action = ({thing, otherthing, more, ...rest}) => {
 //...rest is another object
}