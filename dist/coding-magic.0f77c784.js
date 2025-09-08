// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7wZbQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9440bf780f77c784";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2R06K":[function(require,module,exports,__globalThis) {
var _calculation = require("./js/calculation");
var _choosenumber = require("./js/choosenumber");
var _datebirthday = require("./js/datebirthday");
var _football = require("./js/football");
var _footer = require("./js/footer");
var _googledino = require("./js/googledino");
var _header = require("./js/header");
var _modalname = require("./js/modalname");
var _ourteam = require("./js/ourteam");
var _randomnumber = require("./js/randomnumber");
var _rockpapergame = require("./js/rockpapergame");
var _scientistfilter = require("./js/scientistfilter");
var _timecalculation = require("./js/timecalculation");

},{"./js/calculation":"fRHQ3","./js/choosenumber":"8vxjH","./js/datebirthday":"c11rt","./js/football":"f7oTu","./js/footer":"eGHlE","./js/googledino":"1k1tl","./js/header":"7clXR","./js/modalname":"dDOV5","./js/ourteam":"bIkZK","./js/randomnumber":"5kUBR","./js/rockpapergame":"kRYnB","./js/scientistfilter":"i8iQE","./js/timecalculation":"dY265"}],"fRHQ3":[function(require,module,exports,__globalThis) {
const firstNum = document.querySelector(".calculation__numbers");
const secondNum = document.getElementById("number");
const resultEl = document.querySelector(".calculation__result");
const operations = {
    plus: (a, b)=>a + b,
    minus: (a, b)=>a - b,
    multiply: (a, b)=>a * b,
    divide: (a, b)=>b !== 0 ? a / b : "\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u043D\u0443\u043B\u044C \u043D\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435"
};
document.querySelectorAll(".calculation__btn").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const a = parseFloat(firstNum.value);
        const b = parseFloat(secondNum.value);
        if (btn.classList.contains("plus")) {
            resultEl.textContent = operations.plus(a, b);
            resultEl.style.color = "#000";
        } else if (btn.classList.contains("minus")) {
            resultEl.textContent = operations.minus(a, b);
            resultEl.style.color = "#000";
        } else if (btn.classList.contains("multiply")) {
            resultEl.textContent = operations.multiply(a, b);
            resultEl.style.color = "#000";
        } else if (btn.classList.contains("divide")) {
            resultEl.textContent = operations.divide(a, b);
            resultEl.style.color = "#000";
        }
    });
});

},{}],"8vxjH":[function(require,module,exports,__globalThis) {
// const firstNumber = Number(document.getElementById("choose-number-input-1").value);
// const secondNumber = Number(document.getElementById("choose-number-input-2").value);
// const thirdNumber = Number(document.getElementById("choose-number-input-3").value);
// const allNumbers = [firstNumber, secondNumber, thirdNumber];
// const maxNumber = Math.max(...allNumbers);
// console.log(`Найбільше число: ${maxNumber}`);
function findMax() {
    const firstNumber = Number(document.getElementById("choose-number-input-1").value);
    const secondNumber = Number(document.getElementById("choose-number-input-2").value);
    const thirdNumber = Number(document.getElementById("choose-number-input-3").value);
    const allNumbers = [
        firstNumber,
        secondNumber,
        thirdNumber
    ];
    console.log(allNumbers);
    if (allNumbers.some(isNaN)) {
        document.getElementById("choose-number-text-1").textContent = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435 \u0447\u0438\u0441\u043B\u043E, \u044F\u043A\u0435 \u0432\u0438 \u0432\u0432\u0435\u043B\u0438 -";
        document.getElementById("choose-number-text-2").textContent = `\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} -`;
        document.getElementById("choose-number-text-3").textContent = `\u{421}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - `;
    } else {
        const max = Math.max(...allNumbers);
        document.getElementById("choose-number-text-1").textContent = `\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - ${max}`;
        const min = Math.min(...allNumbers);
        document.getElementById("choose-number-text-2").textContent = `\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} -  ${min}`;
        const sorted = [
            ...allNumbers
        ].sort((a, b)=>a - b);
        const mid = sorted[1];
        document.getElementById("choose-number-text-3").textContent = `\u{421}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} -  ${mid}`;
    }
}
document.getElementById("choose-number-input-1").addEventListener("input", findMax);
document.getElementById("choose-number-input-2").addEventListener("input", findMax);
document.getElementById("choose-number-input-3").addEventListener("input", findMax); // const maxNumber = Math.max(...allNumbers);
 // console.log(`The biggest number is: ${maxNumber}`);

},{}],"c11rt":[function(require,module,exports,__globalThis) {
function day() {
    const year = Number(document.querySelector(".date-birthday__number").value);
    const text = document.querySelector(".date-birthday__text");
    const isLeap = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    if (year === "" || Number(year) === 0) {
        text.style.color = "#ff0000";
        text.textContent = "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0440\u0456\u043A ";
        return;
    }
    if (isLeap) {
        text.style.color = "#039900";
        text.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u0443 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
    } else {
        text.style.color = "#900";
        text.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u043D\u0435 \u0443 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
    }
}
const push = document.querySelector(".date-birthday__button");
push.addEventListener("click", day);
document.querySelector(".date-birthday__number").addEventListener("keyup", function(event) {
    if (event.key === "Enter") day();
});

},{}],"f7oTu":[function(require,module,exports,__globalThis) {
const ball = document.getElementById("ball");
const field = document.getElementById("field");
const initialBallPosition = {
    top: 0,
    left: 0
};
let direction = 1;
const goalkeeper = document.querySelector(".goalkeeper");
setInterval(()=>{
    let currentLeft = parseInt(getComputedStyle(goalkeeper).left);
    if (currentLeft >= 50) direction = -1;
    if (currentLeft <= 0) direction = 1;
    goalkeeper.style.left = currentLeft + direction * 2 + "px";
}, 30);
field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) ballCoords.left = field.clientWidth - ball.clientWidth;
    if (ballCoords.top + ball.clientHeight > field.clientHeight) ballCoords.top = field.clientHeight - ball.clientHeight;
    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
    checkGoal();
};
//     const goal = document.querySelector(".goal"); // або #goal, якщо це ID
// const rect = goal.getBoundingClientRect();
// console.log("top:", rect.top);
// console.log("left:", rect.left);
// console.log("right:", rect.right);
// console.log("bottom:", rect.bottom);
let goalCount = 0;
function checkGoal() {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = document.querySelector(".goal").getBoundingClientRect();
    const keeperRect = document.querySelector(".goalkeeper").getBoundingClientRect();
    const isGoal = ballRect.right > goalRect.left && ballRect.left < goalRect.right && ballRect.bottom > goalRect.top && ballRect.top < goalRect.bottom;
    const hitKeeper = ballRect.right > keeperRect.left && ballRect.left < keeperRect.right && ballRect.bottom > keeperRect.top && ballRect.top < keeperRect.bottom;
    if (isGoal && !hitKeeper) {
        goalCount++;
        document.getElementById("goal-count").textContent = goalCount;
        setTimeout(()=>{
            ball.style.top = initialBallPosition.top + "px";
            ball.style.left = initialBallPosition.left + "px";
        }, 500);
    } else if (hitKeeper) {
        alert("\u0412\u043E\u0440\u043E\u0442\u0430\u0440 \u0437\u043B\u043E\u0432\u0438\u0432 \u043C\u2019\u044F\u0447!");
        setTimeout(()=>{
            ball.style.top = initialBallPosition.top + "px";
            ball.style.left = initialBallPosition.left + "px";
        }, 500);
    }
} // const goal = document.querySelector(".ball");
 // const rect = goal.getBoundingClientRect();
 // console.log("Координати ball:");
 // console.log("top:", rect.top);
 // console.log("left:", rect.left);
 // console.log("right:", rect.right);
 // console.log("bottom:", rect.bottom);

},{}],"eGHlE":[function(require,module,exports,__globalThis) {
const btnEl = document.querySelector(".box__btn");
const modEl = document.querySelector(".modal");
const inpEl = document.querySelector(".box__inp");
btnEl.addEventListener("click", ()=>{});
document.querySelector(".box__form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.querySelector(".box__inp");
    if (!email.checkValidity()) e.preventDefault();
    else modEl.style.display = "block";
});

},{}],"1k1tl":[function(require,module,exports,__globalThis) {
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreEl = document.getElementById("score");
const recordEl = document.getElementById("record");
let gameOverFlag = false;
let gameStarted = false;
let gameInterval;
let score = 0;
let record = localStorage.getItem("dinoRecord") ? parseInt(localStorage.getItem("dinoRecord")) : 0;
recordEl.textContent = `\u{412}\u{430}\u{448} \u{440}\u{435}\u{43A}\u{43E}\u{440}\u{434}: ${record}`;
let cactusPassed = false;
function jump() {
    if (!gameStarted || gameOverFlag) return;
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(()=>{
            dino.classList.remove("jump");
        }, 400);
    }
}
function startGame() {
    if (gameStarted || gameOverFlag) return;
    gameStarted = true;
    score = 0;
    cactusPassed = false;
    scoreEl.textContent = `P\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: ${score}`;
    cactus.style.animation = "cactusMove 1s infinite linear";
    gameInterval = setInterval(()=>{
        if (gameOverFlag) return;
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            gameOverFlag = true;
            clearInterval(gameInterval);
            cactus.style.animation = "none";
            cactus.style.left = `${cactusLeft}px`;
            alert("Game Over!");
            startBtn.style.display = "none";
            restartBtn.style.display = "inline-block";
            if (score > record) {
                record = score;
                localStorage.setItem("dinoRecord", record);
                recordEl.textContent = `\u{412}\u{430}\u{448} \u{440}\u{435}\u{43A}\u{43E}\u{440}\u{434}: ${record}`;
            }
            return;
        }
        if (cactusLeft < 0 && !cactusPassed) {
            score++;
            scoreEl.textContent = `P\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: ${score}`;
            cactusPassed = true;
        }
        if (cactusLeft > 300) cactusPassed = false;
    }, 10);
}
function restartGame() {
    location.reload();
}
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
document.addEventListener("keydown", jump);

},{}],"7clXR":[function(require,module,exports,__globalThis) {
// import darkLogo from "/img/photo/logo.webp";
// import whiteLogo from "/img/photo/white-logo.webp";
// import bodyBackground from "/img/photo/bg.webp";
// document.body.style.backgroundImage = `url(${bodyBackground})`;
// const input = document.querySelector(".header__input");
// const body = document.querySelector("body");
// const container = document.querySelector(".container");
// const headerLogo = document.querySelector(".header__logo");
// input.addEventListener("click", (event) => {
//   body.classList.toggle("dark-mode");
//   if (body.classList.contains("dark-mode")) {
//     headerLogo.src = whiteLogo;
//   } else {
//     headerLogo.src = darkLogo;
//   }
// });
// const btns = document.querySelectorAll(".header__modal-button");
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const selectedType = btn.textContent.trim(); // число, ігри, ознайомчий
//     const typeMap = {
//       Числовий: ["Калькулятор", "Введіть 3 числа"],
//       Ігровий: ["Камінь - ножиці - папір", "Google динозавр", "Футбол"],
//       Ознайомчий: [
//         "Популярні інетрактивні ігри",
//         "Калькулятор часу",
//         "Обери вченого/их",
//       ],
//     };
//     const selectedTitles = typeMap[selectedType];
//     const allSections = document.querySelectorAll("section");
//     allSections.forEach((section) => {
//       const heading = section.querySelector("h1, h2, h3");
//       if (!heading) {
//         section.style.display = "none";
//         return;
//       }
//       const text = heading.textContent.trim();
//       if (selectedTitles.includes(text)) {
//         section.style.display = "";
//       } else {
//         section.style.display = "none";
//       }
//     });
//   });
// });

},{}],"dDOV5":[function(require,module,exports,__globalThis) {
const modalBtnNameClose = document.querySelector(".modal__name__close");
const modalName = document.querySelector(".modal__name");
modalBtnNameClose.addEventListener("click", ()=>{
    modalName.classList.add("hidden");
});
const input = document.getElementById("username");
const saveButton = document.querySelector(".modal_name__button");
const headerText = document.querySelector(".header__texter");
saveButton.addEventListener("click", function() {
    const newName = input.value.trim();
    if (newName !== "") {
        headerText.textContent = `\u{412}\u{456}\u{442}\u{430}\u{454}\u{43C}\u{43E}, ${newName}!`;
        modalName.classList.add("modal_move");
        setTimeout(()=>{
            modalName.classList.add("hidden");
        }, 1200);
    }
});
document.body.addEventListener("click", (event)=>{
    if (event.target === event.currentTarget) {
        modalName.classList.add("modal_move");
        setTimeout(()=>{
            modalName.classList.add("hidden");
        }, 1200);
    }
});
window.addEventListener("keydown", (event)=>{
    if (event.code === "Escape") {
        modalName.classList.add("modal_move");
        setTimeout(()=>{
            modalName.classList.add("hidden");
        }, 1200);
    }
});

},{}],"bIkZK":[function(require,module,exports,__globalThis) {
// import vladdraga from "/img/photo/vladdraga.webp";
// import lev from "/img/photo/lev.webp";
// import davyd from "/img/photo/davyd.webp";
// import mukolafok from "/img/photo/mukolafok.webp";
// import nazar from "/img/photo/nazar.webp";
// const team = [
//   {
//     name: "Ростислав",
//     info: "Teamlead, Розробник",
//     image:
//       "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png",
//   },
//   {
//     name: "Влад Д.",
//     info: "Scrum Master, Розробник",
//     image: vladdraga,
//   },
//   {
//     name: "Лев",
//     info: "Розробник",
//     image: lev,
//   },
//   {
//     name: "Давид",
//     info: "Розробник",
//     image: davyd,
//   },
//   {
//     name: "Микола",
//     info: "Розробник",
//     image: mukolafok,
//   },
//   {
//     name: "Влад К.",
//     info: "Розробник",
//     image:
//       "https://img.lovepik.com/png/20231116/cartoon-coding-geek-using-a-laptop-and-headphones-vector-clipart_611738_wh860.png",
//   },
//   {
//     name: "Назар",
//     info: "Розробник",
//     image: nazar,
//   },
// ];
// let current = 0;
// const img = document.getElementById("teamImage");
// const name = document.getElementById("teamName");
// const info = document.getElementById("teamInfo");
// const dotsContainer = document.getElementById("dots");
// function updateSlider() {
//   const person = team[current];
//   img.src = person.image;
//   name.textContent = person.name;
//   info.textContent = person.info;
//   document.querySelectorAll(".dot").forEach((dot, index) => {
//     dot.classList.toggle("active", index === current);
//   });
// }
// function createDots() {
//   team.forEach((_, i) => {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     if (i === current) dot.classList.add("active");
//     dotsContainer.appendChild(dot);
//   });
// }
// document.getElementById("next").onclick = () => {
//   current = (current + 1) % team.length;
//   updateSlider();
// };
// document.getElementById("prev").onclick = () => {
//   current = (current - 1 + team.length) % team.length;
//   updateSlider();
// };
// createDots();
// updateSlider();

},{}],"5kUBR":[function(require,module,exports,__globalThis) {
function random() {
    const min = 1;
    const max = 10;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const inputEl = document.querySelector(".random-number__number");
    const userStr = inputEl.value.trim();
    const text = document.querySelector(".random-number__text");
    if (userStr === "" || isNaN(userStr)) {
        text.style.color = "#ff0000";
        text.textContent = "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 1 \u0434\u043E 10.";
        return;
    }
    if (number === Number(userStr)) {
        text.style.color = "#039900";
        text.textContent = `\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E} ${number}!`;
    } else {
        text.style.color = "#900";
        text.textContent = `\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} ${number}!`;
    }
}
const click = document.querySelector(".random-number__btn");
click.addEventListener("click", random);
document.querySelector(".random-number__number").addEventListener("keyup", function(event) {
    if (event.key === "Enter") random();
});

},{}],"kRYnB":[function(require,module,exports,__globalThis) {
// BUTTONS
const stoneButton = document.querySelector(".stone");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");
// RESULT
const resultText = document.querySelector(".rsp__result");
// SCORE TEXT
const computerText = document.querySelector(".pc");
const playerText = document.querySelector(".you");
// SHOW AI CHOICE
const showAiChoice = document.querySelector(".rsp__btn");
// SOUND EFFECTS
const sound = document.querySelector(".rsp__audio");
// ARRAY CHOICE
const choice = [
    "stone",
    "scissors",
    "paper"
];
// RANGS
const rangs = [
    "Noob\uD83E\uDD13",
    "Advanced\uD83D\uDCA1",
    "Hacker\uD83D\uDEF8"
];
const rangText = document.querySelector(".rsp__mods-rang");
let actualRang = "Noob\uD83E\uDD13";
// CHOICE
let playerChoice = "";
let aiChoice = "";
// SCORE
let playerScore = 0;
let aiScore = 0;
stoneButton.addEventListener("click", (event)=>{
    playerChoice = choice[0];
    getAiChoice();
    checkChoices();
});
scissorsButton.addEventListener("click", (event)=>{
    playerChoice = choice[1];
    getAiChoice();
    checkChoices();
});
paperButton.addEventListener("click", (event)=>{
    playerChoice = choice[2];
    getAiChoice();
    checkChoices();
});
// CHECK CHOICE
function checkChoices() {
    if (playerChoice === aiChoice) {
        resultText.textContent = "\u041D\u0456\u0447\u0438\u044F!";
        resultText.style.color = "black";
    } else if (playerChoice === "stone" && aiChoice === "scissors" || playerChoice === "scissors" && aiChoice === "paper" || playerChoice === "paper" && aiChoice === "stone") {
        playerScore += 1;
        resultText.textContent = "\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        resultText.style.color = "#039900";
    } else {
        aiScore += 1;
        resultText.textContent = "\u041A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440 \u0432\u0438\u0433\u0440\u0430\u0432 \u0440\u0430\u0443\u043D\u0434!";
        resultText.style.color = "red";
    }
    playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
    computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
    playerText.style.fontFamily = "Montserrat Alternates";
    playerText.style.fontSize = "12px";
    computerText.style.fontFamily = "Montserrat Alternates";
    computerText.style.fontSize = "12px";
    if (isFourtySecondsModeOn && playerScore >= 20) {
        clearInterval(timeInterval);
        isFourtySecondsModeOn = false;
        alert("\u0412\u0456\u0442\u0430\u044E!\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438!");
        actualRang = rangs[1];
        rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
        playerScore = 0;
        aiScore = 0;
        playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
        computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
    }
    if (isFiftyPointModsOn && playerScore >= 50) {
        clearInterval(fiftyPointsModeTimeInterval);
        isFiftyPointModsOn = false;
        alert("\u0412\u0456\u0442\u0430\u044E!\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438!");
        actualRang = rangs[2];
        rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
        playerScore = 0;
        aiScore = 0;
        playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
        computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
    }
}
// GET AI CHOICE
function getAiChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    aiChoice = choice[randomIndex];
}
showAiChoice.addEventListener("click", (event)=>{
    alert(`\u{412}\u{438}\u{431}\u{456}\u{440} \u{43A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440}\u{430} \u{431}\u{443}\u{432} "${aiChoice}"`);
});
// MODS INSTRUCTION
const instructionModal = document.querySelector(".rsp__modal");
const instructionModalBackdrop = document.querySelector(".backdrop");
const instructionModalClose = document.querySelector(".rsp__modal-close");
const instructionButton = document.querySelector(".rsp__mods-instruction");
instructionButton.addEventListener("click", (event)=>{
    sound.play();
    instructionModal.style.opacity = "1";
    instructionModalBackdrop.style.opacity = "1";
    instructionModalBackdrop.style.pointerEvents = "all";
});
instructionModalClose.addEventListener("click", (event)=>{
    sound.play();
    instructionModal.style.opacity = "0";
    instructionModalBackdrop.style.opacity = "0";
    instructionModalBackdrop.style.pointerEvents = "none";
});
// MODS 40 SECONDS
const fourtySecondsButton = document.querySelector(".rsp__mods-40seconds");
let isFourtySecondsModeOn = false;
let isPlayerWin = false;
let seconds = 40;
let timeInterval;
fourtySecondsButton.addEventListener("click", (event)=>{
    alert("\u0413\u0440\u0430 \u043F\u043E\u0447\u0430\u043B\u0430\u0441\u044C!\u0423 \u0432\u0430\u0441 \u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C 40 \u0441\u0435\u043A\u0443\u043D\u0434.");
    isFourtySecondsModeOn = true;
    // If timer is on, turn off
    clearInterval(timeInterval);
    seconds = 40;
    timeInterval = setInterval(()=>{
        seconds -= 1;
        console.log(`\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44C}: ${seconds} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`);
        // Коли час вичерпано
        if (seconds <= 0) {
            clearInterval(timeInterval);
            isFourtySecondsModeOn = false;
            alert("\u0427\u0430\u0441 \u0432\u0438\u0447\u0435\u0440\u043F\u0430\u043D\u043E!");
            if (playerScore >= 20) {
                alert("\u0412\u0456\u0442\u0430\u044E!\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438!");
                clearInterval(timeInterval);
                actualRang = rangs[1];
                rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
                computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
            } else {
                alert("\u041D\u0430\u0436\u0430\u043B\u044C,\u0432\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438:(");
                rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
                computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
            }
        }
    }, 1000);
});
// MODS 50 pointerEvents
const fiftyPointsButton = document.querySelector(".rsp__mods-50points");
let isFiftyPointModsOn = false;
let isFiftyPointPlayerWin = false;
let fiftyPointsModeSeconds = 50;
let fiftyPointsModeTimeInterval;
fiftyPointsButton.addEventListener("click", (event)=>{
    alert("\u0413\u0440\u0430 \u043F\u043E\u0447\u0430\u043B\u0430\u0441\u044C! \u0423 \u0432\u0430\u0441 \u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C 50 \u0441\u0435\u043A\u0443\u043D\u0434!");
    isFiftyPointModsOn = true;
    clearInterval(fiftyPointsModeTimeInterval);
    fiftyPointsModeSeconds = 50;
    fiftyPointsModeTimeInterval = setInterval(()=>{
        fiftyPointsModeSeconds -= 1;
        console.log(`\u{417}\u{430}\u{43B}\u{438}\u{448}\u{438}\u{43B}\u{43E}\u{441}\u{44F} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}: ${fiftyPointsModeSeconds}`);
        if (fiftyPointsModeSeconds <= 0) {
            clearInterval(fiftyPointsModeTimeInterval);
            isFiftyPointModsOn = false;
            alert("\u0427\u0430\u0441 \u0432\u0438\u0447\u0435\u0440\u043F\u0430\u043D\u043E!");
            if (playerScore >= 50) {
                alert("\u0412\u0456\u0442\u0430\u044E!\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438!");
                clearInterval(fiftyPointsModeTimeInterval);
                actualRang = rangs[1];
                rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
                computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
            } else {
                alert("\u041D\u0430\u0436\u0430\u043B\u044C,\u0432\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438:(");
                rangText.textContent = `\u{412}\u{430}\u{448} \u{440}\u{430}\u{43D}\u{433}: ${actualRang}`;
                playerScore = 0;
                aiScore = 0;
                playerText.textContent = `\u{412}\u{438} - ${playerScore}`;
                computerText.textContent = `\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${aiScore}`;
            }
        }
    }, 1000);
});

},{}],"i8iQE":[function(require,module,exports,__globalThis) {
const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        birth: 1879,
        death: 1955
    },
    {
        name: "Isaac",
        surname: "Newton",
        birth: 1643,
        death: 1727
    },
    {
        name: "Marie",
        surname: "Curie",
        birth: 1867,
        death: 1934
    },
    {
        name: "Nikola",
        surname: "Tesla",
        birth: 1856,
        death: 1943
    },
    {
        name: "Ada",
        surname: "Lovelace",
        birth: 1815,
        death: 1852
    },
    {
        name: "Charles",
        surname: "Darwin",
        birth: 1809,
        death: 1882
    },
    {
        name: "Galileo",
        surname: "Galilei",
        birth: 1564,
        death: 1642
    },
    {
        name: "Carl",
        surname: "Sagan",
        birth: 1934,
        death: 1996
    },
    {
        name: "Alan",
        surname: "Turing",
        birth: 1912,
        death: 1954
    },
    {
        name: "Stephen",
        surname: "Hawking",
        birth: 1942,
        death: 2018
    }
];
const grid = document.querySelector(".scientists__grid");
function renderScientists(data) {
    grid.innerHTML = "";
    data.forEach((scientist)=>{
        const card = document.createElement("li");
        card.className = "scientists__card";
        card.innerHTML = `
      <strong>${scientist.name} ${scientist.surname}</strong><br>
      ${scientist.birth}\u{2013}${scientist.death}
    `;
        grid.appendChild(card);
    });
}
const tasks = document.querySelectorAll(".tasks__item");
tasks[0].addEventListener("click", ()=>{
    const res = scientists.filter((s)=>s.birth >= 1801 && s.birth <= 1900);
    renderScientists(res);
});
tasks[1].addEventListener("click", ()=>{
    const einstein = scientists.find((s)=>s.name === "Albert" && s.surname === "Einstein");
    alert(`Albert Einstein \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F} \u{432} ${einstein.birth} \u{440}\u{43E}\u{446}\u{456}.`);
});
tasks[2].addEventListener("click", ()=>{
    const sorted = [
        ...scientists
    ].sort((a, b)=>a.surname.localeCompare(b.surname));
    renderScientists(sorted);
});
tasks[3].addEventListener("click", ()=>{
    const res = scientists.filter((s)=>s.surname.startsWith("C"));
    renderScientists(res);
});
tasks[4].addEventListener("click", ()=>{
    const sorted = [
        ...scientists
    ].sort((a, b)=>b.death - b.birth - (a.death - a.birth));
    renderScientists(sorted);
});
tasks[5].addEventListener("click", ()=>{
    const filtered = scientists.filter((s)=>!s.name.startsWith("A"));
    renderScientists(filtered);
});
tasks[6].addEventListener("click", ()=>{
    const latestBorn = [
        ...scientists
    ].sort((a, b)=>b.birth - a.birth)[0];
    renderScientists([
        latestBorn
    ]);
});
tasks[7].addEventListener("click", ()=>{
    const sorted = [
        ...scientists
    ].sort((a, b)=>b.death - b.birth - (a.death - a.birth));
    const maxLived = sorted[0];
    const minLived = sorted[sorted.length - 1];
    renderScientists([
        maxLived,
        minLived
    ]);
});
tasks[8].addEventListener("click", ()=>{
    const res = scientists.filter((s)=>s.name[0] === s.surname[0]);
    renderScientists(res);
});

},{}],"dY265":[function(require,module,exports,__globalThis) {
const convertTime = ()=>{
    const input = parseInt(document.getElementById("hoursInput").value);
    if (isNaN(input) || input < 0) {
        document.getElementById("result").innerText = "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0447\u0438\u0441\u043B\u043E";
        return;
    }
    const days = Math.floor(input / 86400);
    const hours = Math.floor(input % 86400 / 3600);
    const minutes = Math.floor(input % 3600 / 60);
    const seconds = input % 60;
    const formatted = `${days} \u{434}\u{43D}. ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("result").innerText = formatted;
};
document.querySelector(".time__button").addEventListener("click", convertTime);

},{}]},["7wZbQ","2R06K"], "2R06K", "parcelRequire1ad7", {})

//# sourceMappingURL=coding-magic.0f77c784.js.map
