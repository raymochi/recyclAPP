export const ADD_CHAT_DIALOG = 'ADD_CHAT_DIALOG';

const defaultChatLog = [];

export default function chatLogReducer(state = defaultChatLog, action) {
  switch (action.type) {
    case ADD_CHAT_DIALOG:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export function addChatDialog(dialog) {
  console.log('adding,', dialog)
  return { type: ADD_CHAT_DIALOG, payload: dialog };
}
