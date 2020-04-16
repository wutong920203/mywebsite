
const types = {
	// 获取博客信息
	START_GET_SITE_DATA: 'START_GET_SITE_DATA',
	SUCCESS_GET_SITE_DATA: 'SUCCESS_GET_SITE_DATA',
	FAILURE_GET_SITE_DATA: 'FAILURE_GET_SITE_DATA'
};

const initState = {
	status: '',
	blogList: [],
	siteData: {}
};

export default (state = initState, action) => {
	switch (action.type) {
		case types.START_GET_SITE_DATA:
			return {
				...state,
				status: 'pending'
			};
		case types.SUCCESS_GET_SITE_DATA:
			return {
				status: 'success',
				blogList: action.data.article,
				siteData: action.data
			};
		case types.FAILURE_GET_SITE_DATA:
			return {
				...state,
				status: 'failure'
			};
		default:
			return state;
	}
}

// actions
const startGetSiteData = () => ({
	type: types.START_GET_SITE_DATA
})

const successGetSiteData = data => ({
	type: types.SUCCESS_GET_SITE_DATA,
	data
})

const failureGetSiteData = () => ({
	type: types.FAILURE_GET_SITE_DATA
})

const requestGetSiteData = () => dispatch => {
	dispatch(startGetSiteData());
	  
	return fetch("/site-data")
	.then(res => res.json())
	.then(
		(result) => {
			dispatch(successGetSiteData(result))
		},
		(error) => {
			dispatch(failureGetSiteData())
		}
	);
}

export { requestGetSiteData }