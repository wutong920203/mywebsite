
const types = {
	// 获取博客信息
	START_GET_SITE_DATA: 'START_GET_SITE_DATA',
	SUCCESS_GET_SITE_DATA: 'SUCCESS_GET_SITE_DATA',
	FAILURE_GET_SITE_DATA: 'FAILURE_GET_SITE_DATA'
};

const initState = {
	status: '',
	blogList: [],
	weiboList: [],
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
				weiboList: action.data.weibo,
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

	return fetch("/api/site-data")
	.then(res => {
		if (res.status >= 200 && res.status < 300) {
			return Promise.resolve(res.json());
		} else {
			return Promise.reject(new Error(res.statusText));
		}
	})
	.then(
		(result) => {
			dispatch(successGetSiteData(result))
		},
		(error) => {
			console.log(error);
			dispatch(failureGetSiteData())
		}
	);
}

export { requestGetSiteData }