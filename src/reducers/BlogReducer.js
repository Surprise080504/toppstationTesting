export default (state, action) => {
    switch (action.type) {
        case 'BLOGUPDATE_SUCCESS':
        case 'BLOGSAVE_SUCCESS':    
        case 'BLOG_LOADED':
            return {
                ...state,
                blog: action.payload,
                error: null
            };
        case 'BLOGS_LOADED':
        case 'BLOG_LOADED':
            return {
                ...state,
                blogs: action.payload,
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };
        default:
            return state
    }
}