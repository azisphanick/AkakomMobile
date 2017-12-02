cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-service-worker/www/service_worker_container.js",
        "id": "phonegap-plugin-service-worker.ServiceWorkerContainer",
        "pluginId": "phonegap-plugin-service-worker",
        "clobbers": [
            "navigator.serviceWorker"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-service-worker/www/service_worker_registration.js",
        "id": "phonegap-plugin-service-worker.ServiceWorkerRegistration",
        "pluginId": "phonegap-plugin-service-worker",
        "clobbers": [
            "ServiceWorkerRegistration"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-service-worker/www/service_worker.js",
        "id": "phonegap-plugin-service-worker.ServiceWorker",
        "pluginId": "phonegap-plugin-service-worker",
        "clobbers": [
            "ServiceWorker"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-service-worker/www/kamino.js",
        "id": "phonegap-plugin-service-worker.kamino.js",
        "pluginId": "phonegap-plugin-service-worker",
        "clobbers": [
            "Kamino"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-statusbar": "2.2.3",
    "es6-promise-plugin": "4.1.0",
    "phonegap-plugin-service-worker": "1.0.1"
}
// BOTTOM OF METADATA
});