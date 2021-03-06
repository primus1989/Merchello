/**
 * @ngdoc resource
 * @name marketingResource
 * @description Loads in data and allows modification for marketing information
 **/
angular.module('merchello.resources')
    .factory('marketingResource',
       ['$http', 'umbRequestHelper',
        function($http, umbRequestHelper) {

            var baseUrl = Umbraco.Sys.ServerVariables['merchelloUrls']['merchelloMarketingApiBaseUrl'];

            return {
                getOfferProviders: function() {
                    return umbRequestHelper.resourcePromise(
                        $http({
                            url: baseUrl + 'GetOfferProviders',
                            method: "GET"
                        }),
                        'Failed to get offer providers');
                },
                getOfferSettings: function(key) {
                    return umbRequestHelper.resourcePromise(
                        $http({
                            url: baseUrl + 'GetOfferSettings',
                            method: "GET",
                            params: { id: key }
                        }),
                        'Failed to get offer settings');
                },
                getOffersByQuery: function(query) {

                },
                getAllOfferSettings: function() {
                    return umbRequestHelper.resourcePromise(
                        $http({
                            url: baseUrl + 'GetAllOfferSettings',
                            method: "GET"
                        }),
                        'Failed to get offer settings');
                },
                newOfferSettings: function (offerSettings) {
                    return umbRequestHelper.resourcePromise(
                        $http.post(baseUrl + "PostAddOfferSettings",
                            offerSettings
                        ),
                        'Failed to create offer');
                },
                saveOfferSettings: function(offerSettings) {
                    return umbRequestHelper.resourcePromise(
                        $http.post(baseUrl + "PutUpdateOfferSettings",
                            offerSettings
                        ),
                        'Failed to create offer');
                },
                deleteOfferSettings: function(offerSettings) {
                    return umbRequestHelper.resourcePromise(
                        $http({
                            url: baseUrl + 'DeleteOfferSettings',
                            method: "GET",
                            params: { id: offerSettings.key }
                        }),
                        'Failed to delete offer settings');
                }

            };
        }]);
