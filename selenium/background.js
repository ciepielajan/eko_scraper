var config = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "http",
      host: "p.webshare.io",
      port: 80
    },
    bypassList: ["foobar.com"]
  }
};

chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

function callbackFn(details) {
  return {
      authCredentials: {
          username: "etduobts-rotate",
          password: "vbkjmvxtzu7l"
      }
  };
}

chrome.webRequest.onAuthRequired.addListener(
      callbackFn,
      {urls: ["<all_urls>"]},
      ['blocking']
);
