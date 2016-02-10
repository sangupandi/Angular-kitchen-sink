var UserActions = require('../actions/user-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = {}; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case UserActions.REQUEST_USERS:
            return Object.assign({}, state, { isFetching: true });
        case UserActions.RECEIVE_USERS:
            return Object.assign({}, state, { isFetching: false, list: action.users, updated: action.updated });
        case UserActions.CURRENT_USER:
            return Object.assign({}, state, { current: action.current });
        case UserActions.SET_FILM_FILTER:
            return Object.assign({}, state, { filmFilter: action.filmFilter });
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvdXNlcnMtcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLFdBQVcsV0FBTSx5QkFBeUIsQ0FBQyxDQUFBO0FBRXZEO2tCQUFlLFVBQUMsS0FBVSxFQUFFLE1BQWU7SUFBM0IscUJBQVUsR0FBVixVQUFVO0lBQUUsc0JBQWUsR0FBZixXQUFlO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssV0FBVyxDQUFDLGFBQWE7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3hELEtBQUssV0FBVyxDQUFDLGFBQWE7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3RHLEtBQUssV0FBVyxDQUFDLFlBQVk7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLFdBQVcsQ0FBQyxlQUFlO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDckU7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9yZWR1Y2Vycy91c2Vycy1yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbjphbnkgPSB7fSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVXNlckFjdGlvbnMuUkVRVUVTVF9VU0VSUzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xyXG4gICAgICAgIGNhc2UgVXNlckFjdGlvbnMuUkVDRUlWRV9VU0VSUzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogZmFsc2UsIGxpc3Q6IGFjdGlvbi51c2VycywgdXBkYXRlZDogYWN0aW9uLnVwZGF0ZWR9KTtcclxuICAgICAgICBjYXNlIFVzZXJBY3Rpb25zLkNVUlJFTlRfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y3VycmVudDogYWN0aW9uLmN1cnJlbnR9KTtcclxuICAgICAgICBjYXNlIFVzZXJBY3Rpb25zLlNFVF9GSUxNX0ZJTFRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7ZmlsbUZpbHRlcjogYWN0aW9uLmZpbG1GaWx0ZXJ9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
