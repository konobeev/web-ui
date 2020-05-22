import {DELETE_MESSAGE, Message, SEND_MESSAGE} from "./types";

export function sendMessage(newMessage: Message) {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    };
}

export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    };
}
