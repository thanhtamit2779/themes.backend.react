import * as TYPE from './../contants/action_type';

// HELPER
import request_api from './../../../../helper/api';

/*======================================================================
| FETCH BANNER
| =======================================================================
*/
export const get_banners = banners => {
    return {
      type: TYPE.FETCH_BANNER,
      banners
    }
}

export const fetch_banners = (data) => {
    return (dispatch) => {
        return request_api('term/index', data).then(response => {
            dispatch(get_banners(response.data.data));
        });
    }  
}
