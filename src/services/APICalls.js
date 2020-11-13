import * as APIConstants from './APIConstants';
import * as Constants from '../util/Constants'
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import RNFetchBlob from 'rn-fetch-blob';
import * as Utility from '../util/Utility';

function fetchWithTimeout(url, params) {
    return timeout(fetch(url, params), 30000);
}

function timeout(promise, time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("timeout"));
        }, time);
        promise.then(resolve, reject);
    });
}

export function apiRequest(
    method,
    url,
    headers,
    callback,
    showDialog,
    params,
    loadingMsg,
    errorMsg,
    callbackFailure) {
    Utility.getNetInfo().then(isConnected => {
        console.log("sam" + isConnected);
      if (!isConnected) {
        if(showDialog) {
          Utility.showNoInternetDialog();
          callbackFailure && callbackFailure();
        }
          return;
        }
    // TODO if (loadingMsg) show progress dialog

    var body = '';
    var query = '';
    if (method === 'POST') {
        // body = paramsToBody(params);
        body = JSON.stringify(params);
    } else if (method === 'PUT') {
        // body = paramsToBody(params);
        body = JSON.stringify(params);
    } else if (method === 'GET') {
        query = paramsToUrlQueryParams(params);
    } else if (method === 'JSON_POST') {
        body = params;
        method = 'POST';
    }
    console.log("method : " + method);
    console.log("url : " + url + query);
    console.log("body : " + body);

    fetchWithTimeout(url + query, { method, headers, body }).then((response) => {
        var resJson;
        try {
            resJson = response.json();
        } catch (e) {
            resJson = '';
            // Toast.show("Strings.OOPS");
            callbackFailure && callbackFailure();
        }
        return resJson;
    }).then((responseJson) => {
        // if (!responseJson) {
        //     return;
        // }
        console.log("response : " + url + "    =>  " + JSON.stringify(responseJson));
        if (!responseJson.isSuccess) {
            callbackFailure && callbackFailure(responseJson);
            return;
        }

        if (callback) {
            callback(responseJson);
        }
    }).catch((error) => {
        // Toast.show('Strings.OOPS');
        console.warn(error);
        if (callbackFailure) {
            callbackFailure();
        }
    });
    }
    );
}

function paramsToBody(params) {
    if (!params || params.length < 1) {
        console.warn("response : empty params");
        return null;
    }

    var body = new FormData();
    for (var k in params) {
        body.append(k, params[k]);
    }
    return body;
}

function paramsToUrlQueryParams(params) {
    var esc = encodeURIComponent;
    var query = "";
    if (params) {
        query = '?';
        query += Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    }
    return query;
}

export function otpRequest(params, callbackSuccess, callbackFailure) {
    apiRequest(
        'POST',
        APIConstants.GET_OTP,
        { 'Content-Type': 'application/json' },
        callbackSuccess,
        true,
        params,
        null,
        null,
        callbackFailure
    );
}

export function otpConfirm(params, callbackSuccess, callbackFailure) {
    apiRequest(
        'POST',
        APIConstants.VERIFY_OTP,
        { 'Content-Type': 'application/json' },
        callbackSuccess,
        true,
        params,
        null,
        null,
        callbackFailure
    );
}

export function createPost(params, callbackSuccess, callbackFailure) {
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
        apiRequest(
            'POST',
            APIConstants.GET_ALL_VIDEO_POST,
            {
                'Authorization': token,
                "Content-Type": "application/json"
            },
            callbackSuccess,
            true,
            params,
            null,
            null,
            callbackFailure
        );
    });
}

export function getAllPOST(params, callbackSuccess, callbackFailure) {
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
        apiRequest(
            'GET',
            APIConstants.GET_ALL_VIDEO_POST,
            {
                'Authorization': token
            },
            callbackSuccess,
            true,
            params,
            null,
            null,
            callbackFailure
        );
    });
}

export function updateProfile(params, callbackSuccess, callbackFailure) {
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
        apiRequest(
            'PUT',
            APIConstants.UPDATE_PROFILE,
            {
                'Authorization': token,
                "Content-Type": "application/json"
            },
            callbackSuccess,
            true,
            params,
            null,
            null,
            callbackFailure
        );
    });
}

export function upLoadVideo(uri, callbackSuccess, callbackFailure) {
    let params = [
        {
            name: 'userImage',
            data: RNFetchBlob.wrap(uri),
            filename: uri
        }
    ];
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
        RNFetchBlob.fetch('POST', APIConstants.UPLOAD_VIDEO, {
            Authorization: token,
            'Content-Type': 'multipart/form-data'
        }, params).then((response) => {
            var resJson;
            try {
                resJson = response.json();
            } catch (e) {
                resJson = '';
                callbackFailure && callbackFailure();
            }
            return resJson;
        }).then((responseJson) => {
            console.log('sam ' + responseJson.isSuccess);
            if (!responseJson.isSuccess) {
                callbackFailure && callbackFailure(responseJson);
                return;
            }

            if (callbackSuccess) {
                callbackSuccess(responseJson);
            }
        }).catch((error) => {
            console.warn(error);
            if (callbackFailure) {
                callbackFailure();
            }
        })
    });
}

export function upLoadImage(uri, callbackSuccess, callbackFailure) {
    let params = [
        {
            name: 'userImage',
            data: RNFetchBlob.wrap(uri),
            filename: uri
        }
    ];
    AsyncStorage.getItem(Constants.ACCESS_TOKEN).then((token) => {
        RNFetchBlob.fetch('POST', APIConstants.UPLOAD_IMAGE, {
            Authorization: token,
            'Content-Type': 'multipart/form-data'
        }, params).then((response) => {
            var resJson;
            try {
                resJson = response.json();
            } catch (e) {
                resJson = '';
                callbackFailure && callbackFailure();
            }
            return resJson;
        }).then((responseJson) => {
            console.log('sam ' + responseJson.isSuccess);
            if (!responseJson.isSuccess) {
                callbackFailure && callbackFailure(responseJson);
                return;
            }

            if (callbackSuccess) {
                callbackSuccess(responseJson);
            }
        }).catch((error) => {
            console.warn(error);
            if (callbackFailure) {
                callbackFailure();
            }
        })
    });
}
