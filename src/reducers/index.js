import { INCREMENT, DECREMENT, RESET, ADD_EVENT, VANISH, TAKE, INCRETEN, ADD_DATA } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INCRETEN:
            console.log(state.count)
            if (state.count % 3 === 0 && state.count !== 0) {
                return { ...state, count: state.count + 10 };
            } else {
                return state
            }
        case RESET:
            return { ...state, count: 0 };
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            let id = 0
            if (state.length === 0) {
                id = state.length + 1;
            } else {
                let temp = []
                state.forEach(data => temp.push(data.id))
                id = Math.max(...temp) + 1
            }
            return [...state, { id, ...event }];
        case VANISH:
            return [];
        case TAKE:
            console.log(action.id)
            console.log(state)
            const result = state.filter(event => event.id !== (action.id));
            console.log(result);
            return result;

        case ADD_DATA:
            console.log(action.data)
            return { ...state, data: action.data };
        default:
            return state;



    }
};

export default reducer;