chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log("inside content script");
	if (request.message === "insertScript") {
		const script = document.createElement("script");
		script.src =
			"http://libraries.unbxdapi.com/search-sdk/v2.0.38/vanillaSearch.min.js";
		document.body.appendChild(script);
	}
});
