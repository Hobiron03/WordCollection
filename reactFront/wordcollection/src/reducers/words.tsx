import {
    ADD_NEW_WORD,
    DELETE_WORD,
} from '../actions/index';

interface wordData {
    id: number;
    user_id: number;
    word: string;
    mean: string;
    pronounce: string;
    genre: string;
    color: string;
};

interface wordAction {
    type: string,
    word: wordData,
}

const words = (state: wordData[] = [], action: wordAction) => {
    switch (action.type) {
        case ADD_NEW_WORD:
            const newWord = action.word;
            return [...state, newWord];

        default:
            return state;
    }
};

export default words;