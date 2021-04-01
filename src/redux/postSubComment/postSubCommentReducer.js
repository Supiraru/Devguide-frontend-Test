import {
  POST_SUBCOMMENT_FAILED,
  POST_SUBCOMMENT_SUCCESS
} from './postSubCommentTypes'

const initialState = {
  data: [],
  error: ''
}

const postSubCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUBCOMMENT_SUCCESS:
      return {
        data: action.payload,
        error: ''
      }
    case POST_SUBCOMMENT_FAILED:
      return {
        data: [],
        error: action.payload
      }
    default: return state
  }
}



export default postSubCommentReducer
