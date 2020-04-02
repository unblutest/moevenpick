
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"64",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(\"",["escape",["macro",0],7],"\"){case \"www.moevenpick-wein.com\":case \"www.moevenpick-wein.de\":return\"prod\";case \"ci.moevenpick-wein.com\":case \"ci.moevenpick-wein.de\":case \"acc.moevenpick-wein.com\":case \"acc.moevenpick-wein.de\":case \"moevenpick.localhost\":case \"moevenpick-de.localhost\":return\"test\";default:return\"test\"}})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",2],7],"\".indexOf(\"\/b2b\")==0?\"b2b\":\"b2c\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",0],7],"\".indexOf(\".com\")\u003E0?\"CH\":\"DE\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"[]",
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof ",["escape",["macro",5],8,16],".purchase?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\/\"==",["escape",["macro",2],8,16],"||\"\/de\"==",["escape",["macro",2],8,16],"||0===",["escape",["macro",2],8,16],".indexOf(\"\/de\/\")?\"de\":\"fr\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"google_tag_params"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"home\"==",["escape",["macro",8],8,16],".ecomm_pagetype})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",2],7],"\".indexOf(\"\/checkout\/cart\")==0?true:false})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Math.round((new Date).getTime()\/1E3);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx4xxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],"-",["escape",["macro",14],8,16],";return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"visitorId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"prod\"===\"",["escape",["macro",1],7],"\")return true;else return false})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"CH\"==\"",["escape",["macro",4],7],"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"b2b\"==\"",["escape",["macro",3],7],"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!",["escape",["macro",20],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",18],8,16],"?",["escape",["macro",19],8,16],"?",["escape",["macro",21],8,16],"?\"UA-2416030-1\":\"UA-2416030-16\":",["escape",["macro",21],8,16],"?\"UA-2416030-5\":\"UA-2416030-17\":",["escape",["macro",19],8,16],"?",["escape",["macro",21],8,16],"?\"UA-2416030-10\":\"UA-2416030-14\":",["escape",["macro",21],8,16],"?\"UA-2416030-11\":\"UA-2416030-15\"})();"]
    },{
      "function":"__c",
      "vtp_value":["macro",22]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",17]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"timingLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"timingCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"timingVar"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"timingValue"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","1066950744"],["map","key","false","value","1050938206"]]
    },{
      "function":"__c",
      "vtp_value":["macro",33]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","0"],["map","key","false","value","0"]]
    },{
      "function":"__c",
      "vtp_value":["macro",35]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","0"],["map","key","false","value","m2_4CODXwVcQ3paQ9QM"]]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"Sovendus Token"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slotIndex"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","14285"],["map","key","false","value","14343"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","9"],["map","key","false","value","11"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","MTY1"],["map","key","false","value","MTk5"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"UNKNOWN",
      "vtp_name":"destinationCountry"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",19],8,16],")if(\"",["escape",["macro",54],7],"\"==\"CH\")return\"mKjqs\";else return\"mKjqs\";else if(\"",["escape",["macro",54],7],"\"==\"DE\")return\"ExN1n\";else return\"U6PjA\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",19],8,16],")if(\"",["escape",["macro",54],7],"\"==\"CH\")return 298;else return 298;else if(\"",["escape",["macro",54],7],"\"==\"DE\")return 566;else return 577})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_map":["list",["map","key","true","value","12000006"],["map","key","false","value","5993646"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"\":\"14550\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"14935\":\"14549\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"cms",
      "vtp_name":"pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"14933\":\"14547\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"14932\":\"14546\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"14934\":\"14548\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"?\"14937\":\"14551\"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pageviewCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"Session ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.consumerSalutation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.consumerFirstName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.consumerLastName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.consumerEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.consumerZipcode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"sovReqToken",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"sovendus-container-1"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Add To Cart",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Remove From Cart",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Product Click",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"Promotion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Promotion View",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"NewProduct Widget",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"NewProduct Widget View",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Checkout",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Checkout Option",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",26],
      "vtp_gaSettings":["macro",24],
      "vtp_socialNetwork":["macro",27],
      "vtp_socialActionTarget":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":9
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",29],
      "vtp_gaSettings":["macro",24],
      "vtp_timingCategory":["macro",30],
      "vtp_timingVar":["macro",31],
      "vtp_timingValue":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":10
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Impression",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",8],
      "vtp_conversionId":["macro",34],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_conversionLabel":["macro",36],
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",37],
      "vtp_enableRdpCheckbox":false,
      "tag_id":12
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":13
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",33],
      "vtp_conversionLabel":["macro",39],
      "vtp_url":["macro",37],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":19
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.pw-footprints.de\/ieh31dusSg\/conversion\/1.gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",40],
      "tag_id":36
    },{
      "function":"__awj",
      "once_per_event":true,
      "vtp_merchantId":"14592",
      "tag_id":39
    },{
      "function":"__awc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_orderRef":["macro",41],
      "vtp_discountCode":["macro",42],
      "vtp_merchantId":"14592",
      "vtp_testMode":false,
      "vtp_channel":["macro",43],
      "vtp_currency":["macro",44],
      "vtp_orderValue":["macro",45],
      "vtp_group":["template","S0001:",["macro",45]],
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Merchandising - Home - Suggestions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Go to details",
      "vtp_eventLabel":["template","Slot ",["macro",48]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Wine of the Year",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Add to wishlist",
      "vtp_eventLabel":"Slot",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Merchandising - Home - Suggestions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Add to cart",
      "vtp_eventLabel":["template","Slot ",["macro",48]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Merchandising - Home - Suggestions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Add to wishlist",
      "vtp_eventLabel":["template","Slot ",["macro",48]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Wine of the Year",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Add to cart",
      "vtp_eventLabel":"Slot",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Wine of the Year",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Go to details",
      "vtp_eventLabel":"Slot",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/partners.webmasterplan.com\/registersale.asp?site=",["escape",["macro",49],12],"\u0026amp;mode=pps\u0026amp;ltype=1\u0026amp;price=",["escape",["macro",50],12],"\u0026amp;order=",["escape",["macro",51],12],"\" width=\"1\" height=\"1\"\u003E\n\u003Cscript type=\"text\/javascript\" id=\"affilinet_advc\"\u003Evar type=\"Checkout\",site=\"",["escape",["macro",49],7],"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"https:\/\/partners.webmasterplan.com\/art\/JS\/param.aspx\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":14
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/ads.dynamicads.ch\/api\/track\/conversion\/",["escape",["macro",52],3],"?cot=Sale\u0026amp;ov=",["escape",["macro",50],12],"\u0026amp;oi=",["escape",["macro",51],12],"\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"add-to-cart\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,b,f,g){var c,d,a;e.SMCX=e.SMCX||[];b.getElementById(g)||(c=b.getElementsByTagName(f),d=c[c.length-1],a=b.createElement(f),a.type=\"text\/javascript\",a.async=!0,a.id=g,a.src=[\"https:\"===location.protocol?\"https:\/\/\":\"http:\/\/\",\"widget.surveymonkey.com\/collect\/website\/js\/tRaiETqnLgj758hTBazgd_2FLxq9nTJXpTne3fB1HyIzwNcPPHWVtj6MW5OwP_2BTMR_2B.js\"].join(\"\"),d.parentNode.insertBefore(a,d))})(window,document,\"script\",\"smcx-sdk\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg border=\"0\" width=\"1\" height=\"1\" src=\"https:\/\/tracking.adtracker.ch\/tracking\/lead?Kampagne=",["escape",["macro",53],12],"\u0026amp;Ordervalue=",["escape",["macro",50],12],"\u0026amp;Ordernumber=",["escape",["macro",51],12],"\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.getback.ch\/app\/tracking\/",["escape",["macro",55],3],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/www.profity.de\/imp\/?s=",["escape",["macro",56],12],"\u0026amp;b=6\u0026amp;lp=1\u0026amp;ordervalue=",["escape",["macro",50],12],"\u0026amp;ordernumber=",["escape",["macro",51],12],"\u0026amp;vouchercode=",["escape",["macro",57],12],"\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"",["escape",["macro",58],7],"\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "setup_tags":["list",["tag",32,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({gv:",["escape",["macro",50],8,16],",gc:",["escape",["macro",5],8,16],".currencyCode});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof TDConf\u0026\u0026\"undefined\"!=typeof TDConf.Config){TDConf.Config.containerTagId=\"",["escape",["macro",59],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof TDConf\u0026\u0026\"undefined\"!=typeof TDConf.Config){TDConf.Config.containerTagId=\"",["escape",["macro",60],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof TDConf\u0026\u0026\"undefined\"!=typeof TDConf.Config){TDConf.Config.containerTagId=\"",["escape",["macro",62],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof TDConf\u0026\u0026\"undefined\"!=typeof TDConf.Config){TDConf.Config.containerTagId=\"",["escape",["macro",63],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof TDConf\u0026\u0026\"undefined\"!=typeof TDConf.Config){TDConf.Config.containerTagId=\"",["escape",["macro",64],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(b){var c=document.cookie;b+=\"\\x3d\";var a=c.indexOf(\"; \"+b);if(-1==a){if(a=c.indexOf(b),0!=a)return null}else a+=2;var d=document.cookie.indexOf(\";\",a);-1==d\u0026\u0026(d=c.length);return unescape(c.substring(a+b.length,d))}\nif(\"undefined\"!=typeof TDConf\u0026\u0026(TDConf.Config.tduid=getCookie(\"TRADEDOUBLER\"),\"undefined\"!=typeof TDConf.Config)){TDConf.Config.containerTagId=\"",["escape",["macro",65],7],"\";var td_s=\"https:\"==document.location.protocol?\"s\":\"\",TDAsync=document.createElement(\"script\");TDAsync.src=\"http\"+td_s+\":\/\/\"+td_s+\"wrap.tradedoubler.com\/wrap?id\\x3d\"+TDConf.Config.containerTagId;TDAsync.async=\"true\";document.body.appendChild(TDAsync)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/cct.connects.ch\/tl.php?p=1441\u0026amp;oid=",["escape",["macro",51],12],"\u0026amp;ocategory=Sales\u0026amp;ovalue=",["escape",["macro",50],12],"\u0026amp;ocurrency=CHF\" alt=\"\" border=\"0\" width=\"0\" height=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/tracking.effectives.com\/EXK41\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"167731200599484\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=167731200599484\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg border=\"0\" height=\"0\" src=\"https:\/\/www.awin1.com\/sread.img?tt=ns\u0026amp;tv=2\u0026amp;merchant=14592\u0026amp;amount=",["escape",["macro",45],12],"\u0026amp;ch=",["escape",["macro",43],12],"\u0026amp;parts=S0001:",["escape",["macro",45],12],"\u0026amp;ref=",["escape",["macro",41],12],"\u0026amp;cr=",["escape",["macro",44],12],"\u0026amp;vc=",["escape",["macro",42],12],"\u0026amp;testmode=0\" style=\"display: none;\" width=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",45,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,a){if(a){var b=new Date;b.setTime(b.getTime()+864E5*a);a=\"; expires\\x3d\"+b.toGMTString()}else a=\"\";document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"Session ID\",",["escape",["macro",12],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b,c){a=a+\"\\x3d\"+b+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\"undefined\"!==typeof c\u0026\u0026(b=new Date,b.setTime(b.getTime()+864E5*c),a+=\"; expires\\x3d\"+b.toUTCString());document.cookie=a}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}\n(function(){var a=getCookie(\"pageviewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"pageviewCount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cdiv id=\"sovendus-container-1\"\u003E\u003C\/div\u003E\n\u003Cscript type=\"text\/javascript\"\u003Edocument.querySelector(\"#sovendus-container-1\").parentElement.removeAttribute(\"style\");document.querySelector(\"[class*\\x3dpage-title]\").appendChild(document.querySelector(\"#sovendus-container-1\"));\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.sovIframes=window.sovIframes||[];window.sovIframes.push({trafficSourceNumber:\"4219\",trafficMediumNumber:\"2\",sessionId:\"",["escape",["macro",67],7],"\",timestamp:\"",["escape",["macro",11],7],"\",orderId:\"",["escape",["macro",68],7],"\",orderValue:\"",["escape",["macro",15],7],"\",orderCurrency:\"",["escape",["macro",69],7],"\",usedCouponCode:\"",["escape",["macro",70],7],"\",iframeContainerId:\"sovendus-container-1\"});window.sovConsumer=window.sovConsumer||{};\nwindow.sovConsumer={consumerSalutation:\"",["escape",["macro",71],7],"\",consumerFirstName:\"",["escape",["macro",72],7],"\",consumerLastName:\"",["escape",["macro",73],7],"\",consumerEmail:\"",["escape",["macro",74],7],"\",consumerZipcode:\"",["escape",["macro",75],7],"\"};var sovDomain=window.location.protocol+\"\/\/api.sovendus.com\",sovJsFile=sovDomain+\"\/sovabo\/common\/js\/flexibleIframe.js\";document.write('\\x3cscript async\\x3d\"true\" src\\x3d\"'+sovJsFile+'\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e');\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":45
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(b,d,a){if(a){var c=new Date;c.setTime(c.getTime()+864E5*a);a=\"; expires\\x3d\"+c.toGMTString()}else a=\"\";document.cookie=b+\"\\x3d\"+d+a+\"; path\\x3d\/\"}\nfunction getVar(b){get_string=document.location.search;return_value=\"\";do name_index=get_string.indexOf(b+\"\\x3d\"),-1!=name_index\u0026\u0026(get_string=get_string.substr(name_index+b.length+1,get_string.length-name_index),end_of_value=get_string.indexOf(\"\\x26\"),value=-1!=end_of_value?get_string.substr(0,end_of_value):get_string,return_value=\"\"==return_value||\"\"==value?return_value+value:return_value+(\", \"+value));while(-1!=name_index);for(space=return_value.indexOf(\"+\");-1!=space;)return_value=return_value.substr(0,\nspace)+\" \"+return_value.substr(space+1,return_value.length),space=return_value.indexOf(\"+\");return return_value}var tduid=getVar(\"tduid\");\"\"!=tduid\u0026\u0026createCookie(\"TRADEDOUBLER\",tduid,\"365\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!=typeof window.jQuery\u0026\u0026(jQuery(\".cms-home .item .product-box \\x3e .add-to-box .btn-cart\").click(function(){var a=jQuery(this).closest(\".item\").index()-5;dataLayer.push({event:\"sliderClick\",slotIndex:a,action:\"add to cart\"})}),jQuery(\".cms-home .item .product-box \\x3e .wr-product .link-to-details \\x3e a\").click(function(){var a=jQuery(this).closest(\".item\").index()-5;dataLayer.push({event:\"sliderClick\",slotIndex:a,action:\"detail click\"})}),jQuery(\".cms-home .item .product-box .p-image\").click(function(){var a=\njQuery(this).closest(\".item\").index()-5;dataLayer.push({event:\"sliderClick\",slotIndex:a,action:\"picture detail click\"})}),jQuery(\".cms-home .item .product-box \\x3e .add-to-box a[class*\\x3dwishlist]\").click(function(){var a=jQuery(this).closest(\".item\").index()-5;dataLayer.push({event:\"sliderClick\",slotIndex:a,action:\"add to wishlist\"})}),jQuery(\".cms-home .wine-of-the-year .add-to-box .btn-wishlist\").click(function(){jQuery(this).closest(\".item\").index();dataLayer.push({event:\"wineOfTheYearClick\",\naction:\"add to wishlist\"})}),jQuery(\".cms-home .wine-of-the-year .add-to-box .btn-cart\").click(function(){jQuery(this).closest(\".item\").index();dataLayer.push({event:\"wineOfTheYearClick\",action:\"add to cart\"})}),jQuery(\".cms-home .wine-of-the-year .description-box a\").click(function(){jQuery(this).closest(\".item\").index();dataLayer.push({event:\"wineOfTheYearClick\",action:\"detail click\"})}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cform id=\"popup-newsletter\" action=\"de\/optivo\/newsletter\/choose\/\" method=\"get\"\u003E\n    \u003Cdiv class=\"pn-header\"\u003E\n        \u003Cdiv class=\"pn-logo\"\u003E\u003C\/div\u003E\n        \u003Cdiv class=\"pn-close\"\u003E\n            \u003Ca onclick=\"closeWindow()\"\u003E\n                \u003Cimg src=\"media\/wysiwyg\/other\/x.png\" alt=\"X\"\u003E\n            \u003C\/a\u003E\n        \u003C\/div\u003E\n    \u003C\/div\u003E\n    \u003Cdiv class=\"pn-content\"\u003E\n        \u003Cdiv class=\"pn-teaser\"\u003E\n            Abonnieren Sie jetzt unseren Newsletter und sichern Sie sich \u003Cstrong\u003E10,- € auf Ihren nächsten\n            Onlinekauf!\u003C\/strong\u003E\n        \u003C\/div\u003E        \u003Cdiv class=\"pn-form\"\u003E\n            \u003Cdiv class=\"pn-top\"\u003E\n                \u003Cinput type=\"text\" class=\"pn-firstname\" name=\"firstname\" placeholder=\"Vorname\"\u003E\n                \u003Cinput type=\"text\" class=\"pn-lastname\" name=\"lastname\" placeholder=\"Nachname\"\u003E            \u003C\/div\u003E\n            \u003Cdiv class=\"pn-bottom\"\u003E\n                \u003Cinput type=\"email\" class=\"pn-email\" name=\"email\" placeholder=\"E-Mail-Addresse\"\u003E\n                \u003Cinput type=\"submit\" class=\"btn\" value=\"Zur Newsletterauswahl\"\u003E\n            \u003C\/div\u003E\n        \u003C\/div\u003E\n    \u003C\/div\u003E\n\u003C\/form\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction closeWindow(){document.getElementById(\"popup-newsletter\").style.visibility=\"hidden\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"promotionClick"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"promoViewNonInteractive"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"widgetViewNonInteractive"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"socialInt"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackTime"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"impression"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"fireRemarketingTag"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/+newsletter\\\/*$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",46],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"picture detail click"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"sliderClick"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"detail click"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"add to wishlist"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"wineOfTheYearClick"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"add to cart"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"de"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"cms"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"product"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"undefined"
    },{
      "function":"_ge",
      "arg0":["macro",66],
      "arg1":"2"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"false"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1],["add",1]],
    [["if",2],["add",2]],
    [["if",3],["add",3]],
    [["if",4],["add",4]],
    [["if",5],["add",5]],
    [["if",6],["add",6]],
    [["if",7],["add",7]],
    [["if",8],["add",8]],
    [["if",9],["add",9]],
    [["if",10],["add",10]],
    [["if",11,12,13,14],["add",11,32,41]],
    [["if",15],["add",12,45,47,48]],
    [["if",11,12,15,16,17],["add",13]],
    [["if",11,12,18,19],["add",14]],
    [["if",11,12,15,16,20],["add",15,17,25,26,29,30,33,39,42,43,46]],
    [["if",11,12,15,16],["add",16]],
    [["if",11,12,15,16,20],["unless",21],["add",18]],
    [["if",22,23],["add",19]],
    [["if",23,24],["add",19]],
    [["if",25,26],["add",20]],
    [["if",23,27],["add",21]],
    [["if",23,25],["add",22]],
    [["if",26,27],["add",23]],
    [["if",24,26],["add",24]],
    [["if",11,12,13,15,20],["add",25,26,29,30,31,33,39,40]],
    [["if",0,11,12,13],["add",27]],
    [["if",11,12,13,15,18,28],["add",28]],
    [["if",11,12,13,15,17],["add",34]],
    [["if",11,12,13,15,29],["add",35]],
    [["if",11,12,15,16,29],["add",35]],
    [["if",11,12,13,15,30],["add",36]],
    [["if",11,12,15,16,30],["add",36]],
    [["if",11,12,13,15,31],["add",37]],
    [["if",11,12,15,16,31],["add",37]],
    [["if",11,12,13,15,32],["add",38]],
    [["if",11,12,15,16,32],["add",38]],
    [["if",15,33],["add",44]],
    [["if",15,34],["add",44]],
    [["if",15,36],["add",49]],
    [["if",15,35],["block",44]]]
},
"runtime":[[50,"__awj",[46,"a"],[52,"b",["require","injectScript"]],["b",[0,[0,"https://www.dwin1.com/",[17,[15,"a"],"merchantId"]],".js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"awj"]]]
,"permissions":{"__awj":{"inject_script":{"urls":["https:\/\/www.dwin1.com\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__awj"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Gf:!0},ja={};try{ja.__proto__=fa;ea=ja.Gf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.m={};this.i=!1;this.o={}};ra.prototype.get=function(a){return this.m["dust."+a]};ra.prototype.set=function(a,b){this.i||(a="dust."+a,this.o.hasOwnProperty(a)||(this.m[a]=b))};ra.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var g=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=g.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Vb=function(){for(var a=sa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new g(a)};
var ta=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.o.hasOwnProperty(d)||delete c.m[d]}};ba=g.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new g(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ua=function(){function a(f,h){if(b[f]){if(b[f].Lb+h>b[f].max)throw Error("Quota exceeded");b[f].Lb+=h}}var b={},c=void 0,d=void 0,e={$g:function(f){c=f},pe:function(){c&&a(c,1)},bh:function(f){d=f},za:function(f){d&&a(d,f)},Bh:function(f,h){b[f]=b[f]||{Lb:0};b[f].max=h},yg:function(f){return b[f]&&b[f].Lb||0},reset:function(){b={}},eg:a};e.onFnConsume=e.$g;e.consumeFn=e.pe;e.onStorageConsume=e.bh;e.consumeStorage=e.za;e.setMax=e.Bh;e.getConsumed=e.yg;e.reset=e.reset;e.consume=e.eg;return e};var wa=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.i)if(a.F.za(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.o["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.za(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ba=function(a){var b=new wa(a.F,a);a.o&&(b.o=a.o);b.S=a.S;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Fa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Fa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},La=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Fa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];La(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){ra.call(this);this.F=a;this.S=b};oa($a,ra);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof pa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.Vb=function(){return new g(sa(this))};$a.prototype.a=function(a,b){a.F.pe();return this.S.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Fa(d)?ab(e,d):d};c.prototype.o=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Ba=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){ra.call(this)};oa(db,ra);db.prototype.Vb=function(){return new g(sa(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof g?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},G=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var ob=function(a,b){var c=[],d=[],e=function(h,k){for(var l=sa(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Vb(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof db){var q={};c.push(h);d.push(q);e(h,q);return q}if(h instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:ua(),w=new wa(v);b&&
(w.a=b.a);return f(h.a.apply(h,[w].concat(p)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(Fa(h)||Ma(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(jb(h)){var n=
new db;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var q=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=ob(this.a(u[v]),b);return f((0,this.i.S)(h,h,u))});c.push(h);d.push(q);e(h,q);return q}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var pb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().za(a.length+f.length);return new $a(a,function(){return function(h){var k=Ba(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.set(e.get(q),l[q]):k.set(e.get(q),void 0);k.set("arguments",new g(l));var t=bb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.za(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.za(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),h=e.length;h+="string"===
typeof f?f.length:1;b.za(h);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof pa||c instanceof $a||c instanceof g||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=ua();this.a=new wa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Sb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.o=function(a,b){var c=Ba(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new pa("break"),yb=new pa("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var h=a.get(b);if(h instanceof $a){var k=tb(c);k.unshift(this.i);return h.a.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ba(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Hb=function(){return yb},
Ib=function(a,b,c){var d=new g;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Mb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Nb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof g||b instanceof $a)for(var h=b.Vb(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=bb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);xa(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof g||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Xb=function(a,b){return this.a(a)!==this.a(b)},Yb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.o(d);if(e instanceof pa)return e},Zb=function(a,b){return this.a(a)<this.a(b)},$b=function(a,b){return this.a(a)<=
this.a(b)},ac=function(a,b){return this.a(a)%this.a(b)},bc=function(a,b){return this.a(a)*this.a(b)},cc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new pa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof g||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Fa(d)||!Fa(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.o(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.o(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Sb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.o(a,b)},zc=function(a){function b(e,f){var h=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(h,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,zb);c(1,Ab);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Mb);c(47,Ob);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Xb);c(22,Yb);c(23,Zb);c(24,$b);c(25,ac);c(26,bc);c(27,
cc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.S=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;Gc[3]=function(a){return String(a).replace(Jc,Ic)};var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Gc[7]=function(a){return String(a).replace(Nc,Qc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Qc)+"'"}};var Wc=/['()]/g,Xc=function(a){return"%"+a.charCodeAt(0).toString(16)};Gc[12]=function(a){var b=
encodeURIComponent(String(a));Wc.lastIndex=0;return Wc.test(b)?b.replace(Wc,Xc):b};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=cd[f];if(!h||b.Wc(h))return;c[f]=!0;try{var k=od(h,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.gg(d,k))}catch(y){b.Ge&&b.Ge(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Cb);d.push(q)}return jd&&m?jd.jg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Fa(a[1])&&"macro"===a[1][0]&&jd.Lg(a))return jd.ih(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={ve:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Bd:a("convert_case_to"),Cd:a("convert_false_to"),Dd:a("convert_null_to"),Ed:a("convert_true_to"),Fd:a("convert_undefined_to"),Vh:a("debug_mode_metadata"),xa:a("function"),ef:a("instance_name"),kf:a("live_only"),nf:a("malware_disabled"),pf:a("metadata"),Wh:a("original_vendor_template_id"),tf:a("once_per_event"),Od:a("once_per_load"),Wd:a("setup_tags"),Yd:a("tag_id"),Zd:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.a=c};oa(sd,Error);function td(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};oa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],h=Ad(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=yd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new sd(c,d,h);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,h);Ed(f,b,d,h)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Cd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,h){var k={};La(h,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Kh=Oa('');Nd.qg=Oa('');var Od=Md,Pd=Nd.qg,Qd=Nd.Kh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=q;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ie,je=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Uf&&(l["fix_"+m]=!0),l.we=l.we||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var u=k.slice(p.length);if(u.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,P:p.P,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var u={};p[2].replace(e,function(v,w,y,x,B){var A=y||x||B||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=A;u[w]=z.textContent||z.innerText||A});return{tagName:p[1],P:u,vb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var u=q[p]();return u?(u.type=u.type||p,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.we&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ee=function(){return this[this.length-1]};v.Yc=function(z){var E=this.Ee();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.fg=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.vb=p.test(z.tagName)||z.vb);return z},y=t,x=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.Yc("TABLE")?(k="<TBODY>"+k,A()):l.ei&&u.test(E)&&v.fg(E)?v.Yc(E)?x():(k="</"+z.tagName+">"+k,A()):z.vb||v.push(z)},endTag:function(z){v.Ee()?l.sg&&!v.Yc(z.tagName)?x():v.pop():l.sg&&(y(),A())}},A=function(){var z=k,E=w(y());k=z;if(E&&
B[E.type])B[E.type](E)};t=function(){A();return w(y())}}();return{append:function(p){k+=p},qh:t,ki:function(p){for(var u;(u=t())&&(!p[u.type]||!1!==p[u.type](u)););},clear:function(){var p=k;k="";return p},li:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.ni="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.mi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.I=b;a.O=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.P){var t=m.P[q];n+=
" "+q+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.vb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.a=a.a||!b[h]&&h;ie=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,p){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(p,q[u],u)}function d(q,t,p){for(var u in q)q.hasOwnProperty(u)&&t.call(p,u,q[u])}function e(q,
t){d(t,function(p,u){q[p]=u});return q}function f(q,t){q=q||{};d(t,function(p,u){b(q[p])||(q[p]=u)});return q}function h(q){try{return m.call(q)}catch(p){var t=[];c(q,function(u){t.push(u)});return t}}var k={Kf:a,Lf:a,Mf:a,Nf:a,Vf:a,Wf:function(q){return q},done:a,error:function(q){throw q;},th:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,u){var v=p.ownerDocument;e(this,{root:p,options:u,wb:v.defaultView||v.parentWindow,Oa:v,hc:ie("",{Uf:!0}),Kc:[p],hd:"",jd:v.createElement(p.nodeName),sb:[],Ea:[]});q(this.jd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ea,arguments);for(var p;!this.Ob&&this.Ea.length;)p=this.Ea.shift(),"function"===typeof p?this.ag(p):this.ud(p)};t.prototype.ag=function(p){var u={type:"function",value:p.name||p.toString()};this.dd(u);p.call(this.wb,this.Oa);this.Ke(u)};
t.prototype.ud=function(p){this.hc.append(p);for(var u,v=[],w,y;(u=this.hc.qh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Qh(v);w&&this.Dg(u);y&&this.Eg(u)};t.prototype.Qh=function(p){var u=this.Yf(p);u.ke&&(u.Uc=this.hd+u.ke,this.hd+=u.mh,this.jd.innerHTML=u.Uc,this.Nh())};t.prototype.Yf=function(p){var u=this.Kc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.P){if(!/^noscript$/i.test(x.tagName)){var B=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.P.id&&"ps-style"!==x.P.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.vb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{oi:p,raw:v.join(""),ke:w.join(""),mh:y.join("")}};t.prototype.Nh=function(){for(var p,u=[this.jd];b(p=u.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.Kc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.Kc[w].appendChild(p)}u.unshift.apply(u,h(p.childNodes))}};t.prototype.Dg=function(p){var u=this.hc.clear();u&&this.Ea.unshift(u);p.src=p.P.src||p.P.Xh;p.src&&this.sb.length?this.Ob=p:this.dd(p);var v=this;this.Ph(p,function(){v.Ke(p)})};t.prototype.Eg=function(p){var u=this.hc.clear();u&&this.Ea.unshift(u);p.type=p.P.type||p.P.Yh||"text/css";this.Rh(p);u&&this.write()};t.prototype.Rh=function(p){var u=this.$f(p);this.Ig(u);p.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=p.content:
u.appendChild(this.Oa.createTextNode(p.content)))};t.prototype.$f=function(p){var u=this.Oa.createElement(p.tagName);u.setAttribute("type",p.type);d(p.P,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Ig=function(p){this.ud('<span id="ps-style"/>');var u=this.Oa.getElementById("ps-style");u.parentNode.replaceChild(p,u)};t.prototype.dd=function(p){p.dh=this.Ea;this.Ea=[];this.sb.unshift(p)};t.prototype.Ke=function(p){p!==this.sb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.sb.shift(),this.write.apply(this,p.dh),!this.sb.length&&this.Ob&&(this.dd(this.Ob),this.Ob=null))};t.prototype.Ph=function(p,u){var v=this.Zf(p),w=this.Dh(v),y=this.options.Kf;p.src&&(v.src=p.src,this.yh(v,w?y:function(){u();y()}));try{this.Hg(v),p.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.Zf=function(p){var u=this.Oa.createElement(p.tagName);d(p.P,function(v,w){u.setAttribute(v,w)});p.content&&(u.text=p.content);return u};t.prototype.Hg=function(p){this.ud('<span id="ps-script"/>');
var u=this.Oa.getElementById("ps-script");u.parentNode.replaceChild(p,u)};t.prototype.yh=function(p,u){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);u()}})};t.prototype.Dh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.th&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var w=u.shift(),y;w&&(y=w[w.length-1],y.Lf(),w.stream=t.apply(null,w),y.Mf())}function t(w,y,x){function B(H){H=x.Wf(H);v.write(H);x.Nf(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var A=w.ownerDocument,z={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var E=v.wb.onerror||a;v.wb.onerror=function(H,K,U){x.error({hi:H+
" - "+K+":"+U});E.apply(v.wb,arguments)};v.write(y,function(){e(A,z);v.wb.onerror=E;x.done();v=null;q()});return v}var p=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.gi?w[0]:w;var B=[w,y,x];w.hh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.Vf(B);u.push(B);v||q();return w.hh},{streams:{},ji:u,ai:n})}();je=l.postscribe}})();function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,me(a+"_"+d,e)):(Ea(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){F(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){F(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(ob(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){F(this.getName(),["message:?string"],arguments);};var ye=function(a,b){F(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Tf.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-NZMMQJS');a.set("version",'64');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof g?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(ob(c))})}};var Ee=function(a){return Na(ob(a,this.i))};var Fe=function(a){return Number(ob(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{zg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ch:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){F(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var D=window,I=document,Me=navigator,Ne=I.currentScript&&I.currentScript.src,Oe=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){D.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?I.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(I.querySelectorAll)try{var ff=I.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==I.documentElement&&(ef=!0)}catch(a){}var bf=ef;var M={va:"_ee",Zh:"_uci",Bc:"event_callback",Bb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",Cc:"restricted_data_processing",Wa:"allow_google_signals",ba:"cookie_expires",Ab:"cookie_update",Xa:"session_duration",ia:"user_properties"};M.ze=[M.aa,M.Wa,M.Ab];M.Be=[M.ba,M.Bb,M.Xa];var xf=/[A-Z]+/,yf=/\s/,zf=function(a){if(r(a)&&(a=Qa(a),!yf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Bf=function(a){for(var b={},c=0;c<a.length;++c){var d=zf(a[c]);d&&(b[d.id]=d)}Af(b);var e=[];La(b,function(f,h){e.push(h)});return e};
function Af(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gd={},Q=null,Cf=Math.random();Gd.w="GTM-NZMMQJS";Gd.Gb="3p1";var Df={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Ef="www.googletagmanager.com/gtm.js";var Ff=Ef,Gf=null,Hf=null,If=null,Jf="//www.googletagmanager.com/a?id="+Gd.w+"&cv=64",Kf={},Lf={},Mf=function(){var a=Q.sequence||0;Q.sequence=a+1;return a};var Nf={},Of=function(a,b){Nf[a]=Nf[a]||[];Nf[a][b]=!0},Pf=function(a){for(var b=[],c=Nf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Qf=function(){return"&tc="+fd.filter(function(a){return a}).length},Tf=function(){Rf||(Rf=D.setTimeout(Sf,500))},Sf=function(){Rf&&(D.clearTimeout(Rf),Rf=void 0);void 0===Uf||Vf[Uf]&&!Wf&&!Xf||(Yf[Uf]||Zf.Ng()||0>=$f--?(Of("GTM",1),Yf[Uf]=!0):(Zf.rh(),Te(ag()),Vf[Uf]=!0,bg=cg=Xf=Wf=""))},ag=function(){var a=Uf;if(void 0===a)return"";var b=Pf("GTM"),c=Pf("TAGGING");return[dg,Vf[a]?"":"&es=1",eg[a],b?"&u="+b:"",c?"&ut="+c:"",Qf(),Wf,Xf,cg,bg,"&z=0"].join("")},fg=function(){return[Jf,"&v=3&t=t",
"&pid="+Ha(),"&rv="+Gd.Gb].join("")},gg="0.005000">Math.random(),dg=fg(),hg=function(){dg=fg()},Vf={},Wf="",Xf="",bg="",cg="",Uf=void 0,eg={},Yf={},Rf=void 0,Zf=function(a,b){var c=0,d=0;return{Ng:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},rh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),$f=1E3,ig=function(a,b){if(gg&&!Yf[a]&&Uf!==a){Sf();Uf=a;bg=Wf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";eg[a]="&e="+c+"&eid="+a;Tf()}},jg=function(a,b,c){if(gg&&
!Yf[a]&&b){a!==Uf&&(Sf(),Uf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Wf=Wf?Wf+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(hd[h]?"1":"2")+d;bg=bg?bg+"."+k:"&ti="+k;Tf();2022<=ag().length&&Sf()}},kg=function(a,b,c){if(gg&&!Yf[a]){a!==Uf&&(Sf(),Uf=a);var d=c+b;Xf=
Xf?Xf+"."+d:"&epr="+d;Tf();2022<=ag().length&&Sf()}};var lg={},mg=new Ia,ng={},og={},rg={name:"dataLayer",set:function(a,b){G(Ya(a,b),ng);pg()},get:function(a){return qg(a,2)},reset:function(){mg=new Ia;ng={};pg()}},qg=function(a,b){if(2!=b){var c=mg.get(a);if(gg){var d=sg(a);c!==d&&Of("GTM",5)}return c}return sg(a)},sg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:ug(d)},ug=function(a){for(var b=ng,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var wg=function(a,b){og.hasOwnProperty(a)||(mg.set(a,b),G(Ya(a,b),ng),pg())},pg=function(a){La(og,function(b,c){mg.set(b,c);G(Ya(b,void 0),ng);G(Ya(b,c),ng);a&&delete og[b]})},xg=function(a,b,c){lg[a]=lg[a]||{};var d=1!==c?sg(b):mg.get(b);"array"===hb(d)||"object"===hb(d)?lg[a][b]=G(d):lg[a][b]=d},yg=function(a,b){if(lg[a])return lg[a][b]},zg=function(a,b){lg[a]&&delete lg[a][b]};var Ag=function(){var a=!1;return a};var S=function(a,b,c,d){return(2===Bg()||d||"http:"!=D.location.protocol?a:b)+c},Bg=function(){var a=Re(),b;if(1===a)a:{var c=Ff;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=I.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ug="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Wg=function(a){var b=qg("gtm.whitelist");b&&Of("GTM",9);var c=b&&Wa(Pa(b),Rg),d=qg("gtm.blacklist");d||(d=qg("tagTypeBlacklist"))&&Of("GTM",3);
d?Of("GTM",8):d=[];Vg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Of("GTM",2);var e=d&&Wa(Pa(d),Sg),f={};return function(h){var k=h&&h[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Lf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var q=
0;q<l.length;q++){if(0>C(c,l[q])){Of("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ja(e,l||[]);u&&Of("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ja(e,Ug));return f[k]=v}},Vg=function(){return Qg.test(D.location&&D.location.hostname)};var Xg={gg:function(a,b){b[rd.Bd]&&"string"===typeof a&&(a=1==b[rd.Bd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Dd)&&null===a&&(a=b[rd.Dd]);b.hasOwnProperty(rd.Fd)&&void 0===a&&(a=b[rd.Fd]);b.hasOwnProperty(rd.Ed)&&!0===a&&(a=b[rd.Ed]);b.hasOwnProperty(rd.Cd)&&!1===a&&(a=b[rd.Cd]);return a}};var Yg={active:!0,isWhitelisted:function(){return!0}},Zg=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var $g=function(){};var ah=!1,bh=0,ch=[];function dh(a){if(!ah){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ah=!0;for(var e=0;e<ch.length;e++)J(ch[e])}ch.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function eh(){if(!ah&&140>bh){bh++;try{I.documentElement.doScroll("left"),dh()}catch(a){D.setTimeout(eh,50)}}}var fh=function(a){ah?a():ch.push(a)};var gh={},hh={},ih=function(a,b,c,d){if(!hh[a]||Df[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return hh[a].tags.push(e)-1},jh=function(a,b,c,d){if(hh[a]){var e=hh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function kh(a){for(var b=gh[a]||[],c=0;c<b.length;c++)b[c]();gh[a]={push:function(d){d(Gd.w,hh[a])}}}
var nh=function(a,b,c){hh[a]={tags:[]};Da(b)&&lh(a,b);c&&D.setTimeout(function(){return kh(a)},Number(c));return mh(a)},lh=function(a,b){gh[a]=gh[a]||[];gh[a].push(Ta(function(){return J(function(){b(Gd.w,hh[a])})}))};function mh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&kh(a)})},Rf:function(){d=!0;b>=c&&kh(a)}}};var oh=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Q._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ea(rg.get("gtm.start"))?rg.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Hf-b)}}};var sh={},th=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},uh=!1;
var vh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Of("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}oh();return D[b]},wh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=th();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var yh=function(a){},xh=function(){return D.GoogleAnalyticsObject||"ga"};var Ah=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Bh=/:[0-9]+$/,Ch=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Fh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Dh(a.protocol)||Dh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(Bh,"").toLowerCase());return Eh(a,b,c,d,e)},Eh=function(a,b,c,d,e){var f,h=Dh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Gh(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Bh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Of("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ch(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Dh=function(a){return a?a.replace(":",
"").toLowerCase():""},Gh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Hh=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Of("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Mh=function(){return!1},Nh=function(){var a={};return function(b,c,d){}};function Oh(a,b,c,d){var e=fd[a],f=Ph(a,b,c,d);if(!f)return null;var h=nd(e[rd.Wd],c,[]);if(h&&h.length){var k=h[0];f=Oh(k.index,{C:f,B:1===k.ve?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Ph(a,b,c,d){function e(){if(f[rd.nf])k();else{var w=od(f,c,[]),y=ih(c.id,String(f[rd.xa]),Number(f[rd.Yd]),w[rd.pf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ra()-A;jg(c.id,fd[a],"5");jh(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ra()-A;jg(c.id,fd[a],"6");jh(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;jg(c.id,f,"1");var B=function(){var z=Ra()-A;jg(c.id,f,"7");jh(c.id,y,"exception",z);x||(x=!0,k())};var A=Ra();try{md(w,c)}catch(z){B(z)}}}var f=fd[a],h=b.C,k=b.B,l=b.terminate;if(c.Wc(f))return null;var m=nd(f[rd.Zd],c,[]);if(m&&m.length){var n=m[0],q=Oh(n.index,{C:h,B:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.ve?l:q}if(f[rd.Od]||f[rd.tf]){var t=f[rd.Od]?gd:c.Eh,p=h,u=k;if(!t[a]){e=Ta(e);var v=Qh(a,t,e);h=v.C;k=v.B}return function(){t[a](p,u)}}return e}
function Qh(a,b,c){var d=[],e=[];b[a]=Rh(d,e,c);return{C:function(){b[a]=Sh;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=Th;for(var f=0;f<e.length;f++)e[f]()}}}function Rh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Sh(a){a()}function Th(a,b){b()};var Wh=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.qb[d]){var e=fd[d];var f=b.add();try{var h=Oh(d,{C:f,B:f,terminate:f},a,d);h?c.push({Te:d,Oe:pd(e),Sb:h}):(Uh(d,a),f())}catch(l){f()}}b.Rf();c.sort(Vh);for(var k=0;k<c.length;k++)c[k].Sb();return 0<c.length};function Vh(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Te,k=b.Te;f=h>k?1:h<k?-1:0}return f}
function Uh(a,b){if(!gg)return;var c=function(d){var e=b.Wc(fd[d])?"3":"4",f=nd(fd[d][rd.Wd],b,[]);f&&f.length&&c(f[0].index);jg(b.id,fd[d],e);var h=nd(fd[d][rd.Zd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Xh=!1,Yh=function(a,b,c,d,e){if("gtm.js"==b){if(Xh)return!1;Xh=!0}ig(a,b);var f=nh(a,d,e);xg(a,"event",1);xg(a,"ecommerce",1);xg(a,"gtm");var h={id:a,name:b,Wc:Wg(c),qb:[],Eh:[],Ge:function(){Of("GTM",6)}};h.qb=Bd(h);var k=Wh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||yh(Gd.w);if(!k)return k;for(var l=0;l<h.qb.length;l++)if(h.qb[l]){var m=fd[l];if(m&&!Df[String(m[rd.xa])])return!0}return!1};var Zh={},$h={},ai=function(a){return void 0==$h[a]?void 0:$h[a]};var bi=[];function ci(){var a=Oe("google_tag_data",{}),b=void 0!=ai("ogt_cc")&&void 0!=ai("ogt_ccr");a.ics||(a.ics={entries:{},set:di,update:ei,addListener:fi,notifyListeners:gi,active:!1,valid:b});return a.ics}function di(a,b,c){var d=ci();d.active=!0;if(void 0!=b){var e=d.entries,f=e[a]||{},h=c&&r(c)?c.toUpperCase():void 0,k=f.region;h!==ai("ogt_ccr")&&(h===ai("ogt_cc")?k===ai("ogt_ccr"):h||k)||(e[a]={region:h,initial:"granted"===b,update:f.update})}}
function ei(a,b){var c=ci();c.active=!0;if(void 0!=b){var d=hi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(hi(a)!==d)for(var f=0;f<bi.length;++f){var h=bi[f];Fa(h.oe)&&-1!==h.oe.indexOf(a)&&(h.Ne=!0)}}}function fi(a,b){bi.push({oe:a,ug:b})}function gi(){for(var a=0;a<bi.length;++a){var b=bi[a];if(b.Ne){b.Ne=!1;try{b.ug.call()}catch(c){}}}}var hi=function(a){if(0==ci().valid)return!1;var b=ci().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0};var ii=[M.Zg,M.gh];var ki=/^https?:\/\/www\.googletagmanager\.com/;function li(){var a;return a}function ni(a,b){}
function mi(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function oi(){var a=!1;return a};var pi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.C=function(){};this.B=function(){}},qi=function(a){var b=new pi;b.eventModel=a;return b},ri=function(a,b){a.targetConfig=b;return a},si=function(a,b){a.containerConfig=b;return a},ti=function(a,b){a.a=b;return a},ui=function(a,b){a.globalConfig=b;return a},vi=function(a,b){a.C=b;return a},wi=function(a,b){a.B=b;return a};
pi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var xi=function(a){function b(e){La(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];La(c,function(e){d.push(e)});return d};var yi=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Bi=function(a,b,c,d){var e=zi(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ai(e,function(f){return f.Pb},b);if(1===e.length)return e[0].id;e=Ai(e,function(f){return f.rb},c);return e[0]?e[0].id:void 0}};
function Ci(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=yi(b,e).indexOf(c)}
var Gi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}var h;void 0==b?h=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Di(b),h=a+"="+b);var k={};h=e(h,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);h=e(h,"expires",l);h=e(h,"max-age",c.Vg);h=e(h,"samesite",c.vh);c.zh&&(h=f(h,"secure"));
h=f(h,c.flags);var m=c.domain;if("auto"===m){for(var n=Ei(),q=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(h,"domain",u);try{d&&d(a,k)}catch(w){q=w;continue}t=!0;if(!Fi(u,c.path)&&Ci(v,a,b))return!0}if(q&&!t)throw q;return!1}m&&"none"!==m&&(h=e(h,"domain",m));d&&d(a,k);return Fi(m,c.path)?!1:Ci(h,a,b)},Hi=function(a,b,c,d,e,f,h){var k={domain:d,path:c,expires:e,flags:h,encode:f};null==k.path&&(k.path="/");k.domain||(k.domain="auto");return Gi(a,b,k)};
function Ai(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function zi(a,b){for(var c=[],d=yi(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Pb:1*k[0]||1,rb:1*k[1]||1}))}}return c}
var Di=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ii=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ji=/(^|\.)doubleclick\.net$/i,Fi=function(a,b){return Ji.test(document.location.hostname)||"/"===b&&Ii.test(a)},Ei=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ji.test(e)||Ii.test(e)||a.push("none");
return a};function Ki(){for(var a=Li,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Mi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Li,Ni;function Oi(a){Li=Li||Mi();Ni=Ni||Ki();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Li[l],Li[m],Li[n],Li[q])}return b.join("")}
function Pi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ni[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Li=Li||Mi();Ni=Ni||Ki();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Qi;var Ui=function(){var a=Ri,b=Si,c=Ti(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ue(I,"mousedown",d);Ue(I,"keyup",d);Ue(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Vi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ti().decorators.push(f)},Wi=function(a,b,c){for(var d=Ti().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ua(e,h.callback())}}return e},Ti=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Xi=/(.*?)\*(.*?)\*(.*)/,Yi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Zi=/^(?:www\.|m\.|amp\.)+/,$i=/([^?#]+)(\?[^#]*)?(#.*)?/;function aj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var cj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Oi(String(d))))}var e=b.join("*");return["1",bj(e),e].join("*")},bj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Qi)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Qi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Qi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ej=function(){return function(a){var b=Hh(D.location.href),c=b.search.replace("?",""),d=Ch(c,"_gl",!1,!0)||"";a.query=dj(d)||{};var e=Fh(b,"fragment").match(aj("_gl"));a.fragment=dj(e&&e[3]||"")||{}}},fj=function(){var a=ej(),b=Ti();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},dj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Xi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===bj(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Pi(t[p+1]);return q}}}}catch(u){}};
function gj(a,b,c,d){function e(n){var q=n,t=aj(a).exec(q),p=q;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=$i.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function hj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Wi(b,1,c),e=Wi(b,2,c),f=Wi(b,3,c);if(Va(d)){var h=cj(d);c?ij("_gl",h,a):jj("_gl",h,a,!1)}if(!c&&Va(e)){var k=cj(e);jj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){jj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ij(m,n,q);break a}}"string"==typeof q&&gj(m,n,q,void 0)}}
function jj(a,b,c,d){if(c.href){var e=gj(a,b,c.href,void 0===d?!1:d);Ah.test(e)&&(c.href=e)}}
function ij(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=gj(a,b,c.action);Ah.test(m)&&(c.action=m)}}}
var Ri=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||hj(e,e.hostname)}}catch(h){}},Si=function(a){try{if(a.action){var b=Fh(Hh(a.action),"host");hj(a,b)}}catch(c){}},kj=function(a,b,c,d){Ui();Vi(a,b,"fragment"===c?2:1,!!d,!1)},lj=function(a){Ui();Vi(a,[D.location.hostname],3,!0,!0)},mj=function(){var a=I.location.hostname,b=Yi.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Zi,""),l=e.replace(Zi,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},nj=function(a,b){return!1===a?!1:a||b||mj()};var oj=/^\w+$/,pj=/^[\w-]+$/,qj=/^~?[\w-]+$/,rj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function sj(a){return a&&"string"==typeof a&&a.match(oj)?a:"_gcl"}
var uj=function(){var a=Hh(D.location.href),b=Fh(a,"query",!1,void 0,"gclid"),c=Fh(a,"query",!1,void 0,"gclsrc"),d=Fh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ch(e,"gclid",!1,void 0);c=c||Ch(e,"gclsrc",!1,void 0)}return tj(b,c,d)},tj=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(pj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Zh.gtm_3pds?0:Zh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},wj=function(a){var b=uj();vj(b,a)};
function vj(a,b,c){function d(q,t){var p=xj(q,e);p&&Hi(p,t,h,f,l,!0)}b=b||{};var e=sj(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Qa?7776E3:b.Qa;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.ri?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var zj=function(a,b,c,d,e){for(var f=fj(),h=sj(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==rj[l]){var m=xj(l,h),n=f[m];if(n){var q=Math.min(yj(n),Ra()),t;b:{for(var p=q,u=yi(m,I.cookie),v=0;v<u.length;++v)if(yj(u[v])>p){t=!0;break b}t=!1}t||Hi(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};vj(tj(f.gclid,f.gclsrc),w)},xj=function(a,b){var c=rj[a];if(void 0!==c)return b+c},yj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Aj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Bj=function(a,b,c,d,e){if(Fa(b)){var f=sj(e);kj(function(){for(var h={},k=0;k<a.length;++k){var l=xj(a[k],f);if(l){var m=yi(l,I.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Cj=function(a){return a.filter(function(b){return qj.test(b)})},Dj=function(a,b){for(var c=sj(b&&b.prefix),d={},e=0;e<a.length;e++)rj[a[e]]&&(d[a[e]]=rj[a[e]]);La(d,function(f,h){var k=yi(c+h,I.cookie);if(k.length){var l=k[0],m=yj(l),n={};n[f]=[Aj(l)];vj(n,b,m)}})},Ej=function(){var a=["","aw.ds"],b=uj(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&lj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Fj(){var a=uj(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Q.reported_gclid||(Q.reported_gclid={});d=Q.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));$e("https://www.google.com"+e)}}};var Gj;if(3===Gd.Gb.length)Gj="g";else{var Hj="G";Gj=Hj}
var Ij={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gj,OPT:"o"},Jj=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=Ij[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Gb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Gd.Gb+e};var Tj=function(){for(var a=Me.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Wj=function(a,b,c,d){var e=Uj(b);return Bi(a,e,Vj(c),d)},Xj=function(a,b,c,d){var e=""+Uj(c),f=Vj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Uj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Vj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Yj=["1"],Zj={},dk=function(a,b,c,d){var e=ak(a);Zj[e]||bk(e,b,c)||(ck(e,Tj(),b,c,d),bk(e,b,c))};function ck(a,b,c,d,e){var f=Xj(b,"1",d,c);Hi(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function bk(a,b,c){var d=Wj(a,b,c,Yj);d&&(Zj[a]=d);return d}function ak(a){return(a||"_gcl")+"_au"};var ek=function(){for(var a=[],b=I.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({pd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].pd]||(f[a[h].pd]=[]),f[a[h].pd].push({timestamp:k[1],wg:k[2]}))}return f};var fk=/^\d+\.fls\.doubleclick\.net$/;function gk(a){var b=Hh(D.location.href),c=Fh(b,"host",!1);if(c&&c.match(fk)){var d=Fh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function hk(a,b){if("aw"==a||"dc"==a){var c=gk("gcl"+a);if(c)return c.split(".")}var d=sj(b);if("_gcl"==d){var e;e=uj()[a]||[];if(0<e.length)return e}var f=xj(a,d),h;if(f){var k=[];if(I.cookie){var l=yi(f,I.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Aj(l[m]);n&&-1===C(k,n)&&k.push(n)}h=Cj(k)}else h=k}else h=k}else h=[];return h}
var ik=function(){var a=gk("gac");if(a)return decodeURIComponent(a);var b=ek(),c=[];La(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].wg);f=Cj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},jk=function(a,b,c,d,e){dk(b,c,d,e);var f=Zj[ak(b)],h=uj().dc||[],k=!1;if(f&&0<h.length){var l=Q.joined_au=Q.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk";q=q+"?gclid="+h[n]+"&auiddc="+f;$e(q);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=ak(b),
p=Zj[t];p&&ck(t,p,c,d,e)}};var cl={},dl=["G","GP"];cl.Ue="";var el=cl.Ue.split(",");function fl(){var a=Q;return a.gcq=a.gcq||new gl}
var hl=function(a,b,c){fl().register(a,b,c)},il=function(a,b,c,d){fl().push("event",[b,a],c,d)},jl=function(a,b){fl().push("config",[a],b)},kl={},ll=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},ml=function(a,b,c,d,e){this.type=a;this.m=b;this.V=c||"";this.a=d;this.i=e},gl=function(){this.i={};this.m={};this.a=[]},nl=function(a,b){var c=zf(b);return a.i[c.containerId]=a.i[c.containerId]||new ll},ol=function(a,b,c,d){if(d.V){var e=nl(a,d.V),
f=e.m;if(f){var h=G(c),k=G(e.targetConfig[d.V]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),q=qg("gtm.uniqueEventId"),t=zf(d.V).prefix,p=wi(vi(ui(ti(si(ri(qi(h),k),l),m),n),function(){kg(q,t,"2");}),function(){kg(q,t,"3");});try{kg(q,t,"1");f(d.V,b,d.m,p)}catch(u){
kg(q,t,"4");}}}};
gl.prototype.register=function(a,b,c){if(3!==nl(this,a).status){nl(this,a).m=b;nl(this,a).status=3;c&&(nl(this,a).i=c);var d=zf(a),e=kl[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,h=d.prefix.toUpperCase();Q[d.containerId]._spx&&(h=h.toLowerCase());var k=qg("gtm.uniqueEventId"),l=h,m=Ra()-f;if(gg&&!Yf[k]){k!==Uf&&(Sf(),Uf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);cg=cg?cg+","+n:"&cl="+n}delete kl[d.containerId]}this.flush()}};
gl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);a:if(c){var f=zf(c),h;if(h=f){var k;if(k=1===nl(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(nl(this,c).status=2,this.push("require",[],f.containerId),kl[f.containerId]=Ra(),Ag()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Qe(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new ml(a,e,c,b,d));d||this.flush()};
gl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==nl(this,c.V).status&&!a)return;break;case "set":La(c.a[0],function(l,m){G(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[M.bc];delete d[M.bc];var f=nl(this,c.V),h=zf(c.V),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.V]={});f.a&&e||ol(this,M.D,d,c);f.a=!0;delete d[M.va];k?G(d,f.containerConfig):G(d,f.targetConfig[c.V]);break;
case "event":ol(this,c.a[1],c.a[0],c)}this.a.shift()}};var pl=function(a,b){return!0};var ql=function(a,b){var c;return c};var rl=function(a){};var sl=function(a){var b;return kb(b,this.i)};var tl=function(a,b){var c=null;return kb(c,this.i)};var ul=function(a){var b;return kb(b,
this.i)};var vl=function(a){var b;return b};var wl=function(a,b){b=void 0===b?!0:b;var c;return c};var xl=function(a,b){var c;return c};var yl=function(a,b){var c;return c};var zl=function(a){var b="";return b};var Al=function(a){var b="";return b};var Bl=function(a,b){};var Cl={},Dl=function(a,b,c,d){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Ba(e)},h=function(){c instanceof $a&&c.Ba(e)};if(!d){Qe(a,f,h);return}var k=d;Cl[k]?(Cl[k].onSuccess.push(f),Cl[k].onFailure.push(h)):(Cl[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Cl[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},h=function(){for(var l=Cl[k].onFailure,m=0;m<l.length;m++)J(l[m]);Cl[k]=null},Qe(a,f,h));};var El=function(){return!1},Fl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Gl=function(){};var Hl={},Il={};Hl.getItem=function(a){var b=null;return b};Hl.setItem=function(a,b){};
Hl.removeItem=function(a){};Hl.clear=function(){};var Jl=function(a,b){var c=!1;return c};var Kl=function(a,b,c){};var Ll=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Ml=function(a,b,c){return!1};var Nl=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Ol=function(a,b,c){var d=this;};var Pl=function(a){var b;return b};function Ql(a){}
function Rl(a,b){var c;return kb(c,this.i)}function Sl(){var a="";return a}
function Tl(){var a="";return a}
var Dc=function(){var a=new Ke;Ag()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Bl),a.add("injectScript",Dl));var b=Kl;a.add("addEventCallback",Ql);a.add("aliasInWindow",pl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",ql);a.add("callLater",rl);a.add("copyFromDataLayer",
Rl);a.add("copyFromWindow",sl);a.add("createQueue",ul);a.add("createArgumentsQueue",tl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",wl);a.add("getQueryParameters",xl);a.add("getReferrerQueryParameters",yl);a.add("getReferrerUrl",zl);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Al);a.add("logToConsole",Gl);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Jl);a.add("readCharacterSet",Sl);a.add("readTitle",Tl);a.add("sendPixel",b);a.add("setCookie",Ll);a.add("setInWindow",Ml);a.add("sha256",Ol);a.add("TestHelper",Le());a.add("toBase64",Pl,!("btoa"in D)),a.add("fromBase64",
vl,!("atob"in D));a.add("localStorage",Fl,!El());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function Ul(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;Vl();bd=function(e,f,h){Wl(f);var k=new db;La(f,function(p,u){k.set(p,kb(u))});Bc.a.a.o=xd();var l={Tf:Ld(e),eventId:void 0!==h?h.id:void 0,Rb:e,log:function(){}};if(Mh()){var m=Nh(),n=void 0,q=void 0;l.Z={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(q=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:q,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.o=void 0;t instanceof pa&&
"return"===t.a&&(t=t.i);return ob(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Fa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Sb(d)}}function Wl(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){J(b)});Da(c)&&(a.gtmOnFailure=function(){J(c)})}function Vl(){var a=Bc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}
function Xl(a){void 0!==a&&La(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Lf[e]=Lf[e]||[];Lf[e].push(b)}})};var Yl=["GP","G"],Zl="G".split(/,/);Zl.push("HA");var $l=!1;$l=!0;var am=null,bm={},cm={},dm;function em(a,b){var c={event:a};b&&(c.eventModel=G(b),b[M.Bc]&&(c.eventCallback=b[M.Bc]),b[M.Bb]&&(c.eventTimeout=b[M.Bb]));return c}
var km={config:function(a){},event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=em(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=G(a[1]):3==a.length&&r(a[1])&&(b={},jb(a[2])||Fa(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var lm={policy:!0};var mm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},om=function(a){var b=nm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pm=!1,qm=[];function rm(){if(!pm){pm=!0;for(var a=0;a<qm.length;a++)J(qm[a])}}var sm=function(a){pm?J(a):qm.push(a)};var Hm=function(a){if(Gm(a))return a;this.a=a};Hm.prototype.Cg=function(){return this.a};var Gm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Hm.prototype.getUntrustedUpdateValue=Hm.prototype.Cg;var Im=[],Jm=!1,Km=function(a){return D["dataLayer"].push(a)},Lm=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mm(a){var b=a._clear;La(a,function(f,h){"_clear"!==f&&(b&&wg(f,void 0),wg(f,h))});Gf||(Gf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Mf(),a["gtm.uniqueEventId"]=d,wg("gtm.uniqueEventId",d));If=c;var e=
Nm(a);If=null;switch(c){case "gtm.init":Of("GTM",19),e&&Of("GTM",20)}return e}function Nm(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Q.zones;d=e?e.checkState(Gd.w,c):Yg;return d.active?Yh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Om(){for(var a=!1;!Jm&&0<Im.length;){Jm=!0;delete ng.eventModel;pg();var b=Im.shift();if(null!=b){var c=Gm(b);if(c){var d=b;b=Gm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=qg(h,1);if(Fa(k)||jb(k))k=G(k);og[h]=k}}try{if(Da(b))try{b.call(rg)}catch(u){}else if(Fa(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=qg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(u){}}}else{if(Ma(b)){a:{if(b.length&&r(b[0])){var p=km[b[0]];if(p&&(!c||!lm[b[0]])){b=p(b);break a}}b=void 0}if(!b){Jm=!1;continue}}a=Mm(b)||a}}finally{c&&pg(!0)}}Jm=!1}return!a}function Pm(){var a=Om();try{mm(D["dataLayer"],Gd.w)}catch(b){}return a}
var Rm=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};fh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});sm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Q.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Hm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Im.push.apply(Im,d);if(300<
this.length)for(Of("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Om()&&h};Im.push.apply(Im,a.slice(0));Qm()&&J(Pm)},Qm=function(){var a=!0;return a};var Sm={};Sm.Cb=new String("undefined");
var Tm=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sm.Cb?b:a[d]);return c.join("")}};Tm.prototype.toString=function(){return this.a("undefined")};Tm.prototype.valueOf=Tm.prototype.toString;Sm.Cf=Tm;Sm.Ic={};Sm.jg=function(a){return new Tm(a)};var Um={};Sm.sh=function(a,b){var c=Mf();Um[c]=[a,b];return c};Sm.qe=function(a){var b=a?0:1;return function(c){var d=Um[c];if(d&&"function"===typeof d[b])d[b]();Um[c]=void 0}};Sm.Lg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sm.ih=function(a){if(a===Sm.Cb)return a;var b=Mf();Sm.Ic[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};Sm.Wg=function(a,b,c){a instanceof Sm.Cf&&(a=a.a(Sm.sh(b,c)),b=Ca);return{Uc:a,C:b}};var Vm=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wm=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xm=function(a,b,c){Wm(a)[b]=c},Ym=function(a,b,c,d){var e=Wm(a),f=Sa(e,b,d);e[b]=c(f)},Zm=function(a,b,c){var d=Wm(a);return Sa(d,b,c)};var $m=["input","select","textarea"],an=["button","hidden","image","reset","submit"],bn=function(a){var b=a.tagName.toLowerCase();return!Ga($m,function(c){return c===b})||"input"===b&&Ga(an,function(c){return c===a.type.toLowerCase()})?!1:!0},cn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):Ze(a,["form"],100)},dn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bn(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var en=!!D.MutationObserver,fn=void 0,gn=function(a){if(!fn){var b=function(){var c=I.body;if(c)if(en)(new MutationObserver(function(){for(var e=0;e<fn.length;e++)J(fn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<fn.length;e++)J(fn[e])}))})}};fn=[];I.body?b():J(b)}fn.push(a)};var Cn=D.clearTimeout,Dn=D.setTimeout,T=function(a,b,c){if(Ag()){b&&J(b)}else return Qe(a,b,c)},En=function(){return D.location.href},Fn=function(a){return Fh(Hh(a),"fragment")},Gn=function(a){return Gh(Hh(a))},Hn=function(a,b){return qg(a,b||2)},In=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Km(a)):d=Km(a);return d},Jn=function(a,b){D[a]=b},V=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Kn=function(a,b,c){return yi(a,b,void 0===c?!0:!!c)},Ln=function(a,b){if(Ag()){b&&J(b)}else Se(a,b)},Mn=function(a){return!!Zm(a,"init",!1)},Nn=function(a){Xm(a,"init",!0)},On=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ff;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(S("https://","http://",c))},Pn=function(a,b){var c=a[b];return c};
var Qn=Sm.Wg;var no=new Ia;function oo(a,b){function c(h){var k=Hh(h),l=Fh(k,"protocol"),m=Fh(k,"host",!0),n=Fh(k,"port"),q=Fh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function po(a){return qo(a)?1:0}
function qo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Fa(c)){for(var d=0;d<c.length;d++)if(po({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=no.get(p);u||(u=new RegExp(c,t),no.set(p,u));q=u.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return oo(b,
c)}return!1};var ro=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var so={},to=encodeURI,Y=encodeURIComponent,uo=Te;var vo=function(a,b){if(!a)return!1;var c=Fh(Hh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var wo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};so.Mg=function(){var a=!1;return a};var Jp=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var Up=window,Vp=document,Wp=function(a){var b=Up._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Up["ga-disable-"+a])return!0;try{var c=Up.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=yi("AMP_TOKEN",Vp.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Vp.getElementById("__gaOptOutExtension")?!0:!1};var Zp=function(a){La(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.ia]||{};La(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var cq=function(a,b,c){il(b,c,a)},dq=function(a,b,c){il(b,c,a,!0)},fq=function(a,b){};
function eq(a,b){}var Z={b:{}};


Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;oh();T(b,function(){var d=V("google_trackConversion");if(Da(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=wo(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Jj()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);
d(h)||c()}else c()},c)})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(yg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Hn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fh(Hh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Gn(String(b)):String(b)})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Kn(a.vtp_name,Hn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ha(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Hn("gtm.url",1);c=c||En();var d=b[a("vtp_component")];if(!d||"URL"==d)return Gn(String(c));var e=Hh(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?Fa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Fh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Fh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Hn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(wo(n.vtp_fieldsToSet,"fieldName","value"),f);G(wo(n.vtp_contentGroup,"index","group"),h);G(wo(n.vtp_dimension,"index","dimension"),k);G(wo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=G(n);d=G(d,q)}G(wo(d.vtp_fieldsToSet,"fieldName","value"),f);G(wo(d.vtp_contentGroup,
"index","group"),h);G(wo(d.vtp_dimension,"index","dimension"),k);G(wo(d.vtp_metric,"index","metric"),l);var t=vh(d.vtp_functionName);if(Da(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Mf(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(P){var L=[].slice.call(arguments,0);L[0]=p+L[0];t.apply(window,L)},x=function(P,L){return void 0===L?L:P(L)},B=function(P,L){if(L)for(var za in L)L.hasOwnProperty(za)&&
y("set",P+za,L[za])},A=function(){var P=function(jq,lk,kq){if(!jb(lk))return!1;for(var Dd=Sa(Object(lk),kq,[]),Tg=0;Dd&&Tg<Dd.length;Tg++)y(jq,Dd[Tg]);return!!Dd&&0<Dd.length},L;if(d.vtp_useEcommerceDataLayer){var za=!1;za||(L=Hn("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(L=d.vtp_ecommerceMacroData.ecommerce);if(!jb(L))return;L=Object(L);var Wb=Sa(f,"currencyCode",L.currencyCode);void 0!==Wb&&y("set","&cu",Wb);P("ec:addImpression",L,"impressions");if(P("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){y("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Ka="detail checkout checkout_option click add remove purchase refund".split(" "),lb="refund purchase remove checkout checkout_option add click detail".split(" "),
mb=0;mb<Ka.length;mb++){var xb=L[Ka[mb]];if(xb){P("ec:addProduct",xb,"products");y("ec:setAction",Ka[mb],xb.actionField);if(gg)for(var Lb=0;Lb<lb.length;Lb++){var Oc=L[lb[Lb]];if(Oc){Oc!==xb&&Of("GTM",13);break}}break}}},z=function(P,L,za){var Wb=0;if(P)for(var Ka in P)if(P.hasOwnProperty(Ka)&&(za&&v[Ka]||!za&&void 0===v[Ka])){var lb=w[Ka]?Oa(P[Ka]):P[Ka];"anonymizeIp"!=Ka||lb||(lb=void 0);L[Ka]=lb;Wb++}return Wb},E={name:u};z(f,
E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Jj(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,L){void 0!==d[L]&&y("set",P,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=f&&f.hitCallback;Da(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Na,d.vtp_eventValue||e.value)};z(K,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){var X={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};z(K,X,!1);y("send",X);}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){var R={hitType:"timing",timingCategory:String(d.vtp_timingCategory||e.category),timingVar:String(d.vtp_timingVar||e.name),timingValue:Na(d.vtp_timingValue||e.value),timingLabel:x(String,d.vtp_timingLabel||e.label)};z(K,R,!1);y("send",R);}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ya="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:ya})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var va="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:va})}K?y("send","pageview",K):y("send","pageview");}if(!a){var Aa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var nb=S("https:","http:","//www.google-analytics.com/"+Aa,f&&f.forceSSL);
T(nb,function(){var P=th();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Script URL must be a string.");try{if(he(Hh(f),c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();





Z.b.aev=["google"],function(){function a(p,u){var v=yg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(p,w);if(B&&(x=v(B),n[y]=x,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(En());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!vo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Fh(Hh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)bn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var x;a:{var B=String(a(u,"elementUrl")||v||""),A=Hh(B),z=String(p.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,p.vtp_affiliatedDomains);break a;default:x=Fh(A,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(u,w,v);else{var H=p.vtp_attribute,K=a(u,"element");E=K&&We(K,H)||v||""}return E;case "MD":var U=p.vtp_mdValue,X=b(u,"MD",on);return U&&X?rn(X,U)||
v:X||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[rd.xa]=null;c[rd.ef]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.awc=["nonGoogleScripts"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else{var d=c.vtp_channel||"na",e,f,h;if(c.vtp_group&&0<=c.vtp_group.indexOf(":")){e=c.vtp_group;for(var k=c.vtp_group.split("|"),l=[],m=h=0;m<k.length;m++)if(k[m]){var n=k[m].split(":");if(2==n.length&&n[0]&&n[1]){var q=parseFloat(n[1]);isNaN(q)||(l.push(Y(n[0])+":"+q),h+=q)}}f=l.join("|")}else h=c.vtp_orderValue||0,e=(c.vtp_group||"DEFAULT")+":"+h,f=Y(c.vtp_group||"DEFAULT")+":"+Y(h);var t=c.vtp_testMode?"1":
"0";try{var p=["merchant="+Y(c.vtp_merchantId),"ref="+Y(c.vtp_orderRef),"amount="+Y(h),"parts="+f,"ch="+Y(d),"testmode="+t];c.vtp_currency&&p.push("cr="+Y(c.vtp_currency));c.vtp_discountCode&&p.push("vc="+Y(c.vtp_discountCode));uo("https://www.awin1.com/sread.img?tt=ns&tv=2&"+p.join("&"))}catch(v){}try{var u={};u.orderRef=c.vtp_orderRef;u.amount=h;c.vtp_currency&&(u.currency=c.vtp_currency);u.parts=e;c.vtp_discountCode&&(u.voucher=c.vtp_discountCode);u.channel=d;u.test=t;D.AWIN={Tracking:{Sale:u}};
T("https://www.dwin1.com/"+c.vtp_merchantId+".js",c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure);a=!0}catch(v){J(c.vtp_gtmOnFailure)}}};Z.__awc=b;Z.__awc.g="awc";Z.__awc.h=!0;Z.__awc.priorityOverride=0}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=V("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){oh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Jj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var B="DATA_LAYER"==v?Hn(x):k[y];B&&(l[w]=B)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var q=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,B){var A="DATA_LAYER"==v?Hn(x):k[y];B(A)&&q(w,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var u=!0;u&&b.push(l);a||(a=!0,
T(p,f(),e(p)))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=wo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){J(h)}}}var b=function(d,e,f){fh(function(){var h,k=Q;k.postscribe||(k.postscribe=je);h=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{h(m,d,l)}catch(n){J(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=Qn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Uc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(I.body,Ye(h),k,e)()}else Dn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ye('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}uo(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var gq={};gq.macro=function(a){if(Sm.Ic.hasOwnProperty(a))return Sm.Ic[a]},gq.onHtmlSuccess=Sm.qe(!0),gq.onHtmlFailure=Sm.qe(!1);gq.dataLayer=rg;gq.callback=function(a){Kf.hasOwnProperty(a)&&Da(Kf[a])&&Kf[a]();delete Kf[a]};function hq(){Q[Gd.w]=gq;Ua(Lf,Z.b);jd=jd||Sm;kd=Xg}
function iq(){Zh.gtm_3pds=!0;Q=D.google_tag_manager=D.google_tag_manager||{};if(Q[Gd.w]){var a=Q.zones;a&&a.unregisterChild(Gd.w)}else{for(var b=data.resource||
{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)ed.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Z;id=po;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Ul();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");
Lf[x]=w}Xl(v);hq();Rm();ah=!1;bh=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)dh();else{Ue(I,"DOMContentLoaded",dh);Ue(I,"readystatechange",dh);if(I.createEventObject&&I.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(H){}B&&eh()}Ue(D,"load",dh)}pm=!1;"complete"===I.readyState?rm():Ue(D,"load",rm);
a:{if(!gg)break a;D.setInterval(hg,864E5);}Hf=(new Date).getTime();}}iq();

})()
