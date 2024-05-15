/* tslint:disable */
/* eslint-disable */
/**
 * PictionaryParty
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {UserResponse}
     * @memberof LoginResponse
     */
    'user'?: UserResponse;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    'token'?: string | null;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    'status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'detail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'instance'?: string | null;
}
/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'email'?: string | null;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost: async (loginRequest?: LoginRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authLoginPost(loginRequest?: LoginRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authLoginPost(loginRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authLoginPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authMeGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authMeGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authMeGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(loginRequest?: LoginRequest, options?: any): AxiosPromise<LoginResponse> {
            return localVarFp.authLoginPost(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet(options?: any): AxiosPromise<UserResponse> {
            return localVarFp.authMeGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {LoginRequest} [loginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authLoginPost(loginRequest?: LoginRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authLoginPost(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authMeGet(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authMeGet(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * WordsApi - axios parameter creator
 * @export
 */
export const WordsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [language] 
         * @param {string} [category] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiWordsGet: async (language?: string, category?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/words`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (language !== undefined) {
                localVarQueryParameter['Language'] = language;
            }

            if (category !== undefined) {
                localVarQueryParameter['Category'] = category;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WordsApi - functional programming interface
 * @export
 */
export const WordsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WordsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [language] 
         * @param {string} [category] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWordsGet(language?: string, category?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiWordsGet(language, category, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WordsApi.apiWordsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WordsApi - factory interface
 * @export
 */
export const WordsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WordsApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [language] 
         * @param {string} [category] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiWordsGet(language?: string, category?: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiWordsGet(language, category, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WordsApi - object-oriented interface
 * @export
 * @class WordsApi
 * @extends {BaseAPI}
 */
export class WordsApi extends BaseAPI {
    /**
     * 
     * @param {string} [language] 
     * @param {string} [category] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordsApi
     */
    public apiWordsGet(language?: string, category?: string, options?: RawAxiosRequestConfig) {
        return WordsApiFp(this.configuration).apiWordsGet(language, category, options).then((request) => request(this.axios, this.basePath));
    }
}



