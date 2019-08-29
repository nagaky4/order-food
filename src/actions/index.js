
import * as types from '../constantTypes/index';

export const _getList = () => {
    return {
        type: types.GET_LIST,
    }
}

export const _addToList = (item) => {
    return {
        type: types.ADD_TO_LIST,
        payload: {
            item: item
        }
    }
}

export const _deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        payload: {
            id: id
        }
    }
}

export const _openModal = () => {
    return {
        type: types.OPEN_MODAL
    }
}

export const _closeModal = () => {
    return {
        type: types.CLOSE_MODAL
    }
}