

		let insertSteamidPlace = document.querySelector('.persona_name');		
		let getPageSourceCode = document.querySelector('div#responsive_page_template_content')
		let arrSteamID = getPageSourceCode.textContent.match(/(?<="steamid":")(.+)(?=","personaname)/)
		let arrNickname = getPageSourceCode.textContent.match(/(?<="personaname":")(.+?)(?=")/)
		insertSteamidPlace.insertAdjacentHTML('afterend', `<span id="steamid-custom-insert">SteamID: ${arrSteamID[0]} <button type="button" id="copyIdBtn">ID</button> <button type="button" id="copyIdNickBtn">ID + N</button> <button type="button" id="copyLinkBtn">Lnk</button>`)

		const copyIdBtnSearch = document.querySelector('#copyIdBtn');
		const copyIdNickBtnSearch = document.querySelector('#copyIdNickBtn');
		const copyLinkBtnSearch = document.querySelector('#copyLinkBtn');
		
		copyIdBtnSearch.addEventListener('click', function () {navigator.clipboard.writeText(arrSteamID[0])}, false);
		copyIdNickBtnSearch.addEventListener('click', function () {navigator.clipboard.writeText(arrSteamID[0] + ' ' + '\"' + arrNickname[0] + '\"')}, false);
		copyLinkBtnSearch.addEventListener('click', function () {navigator.clipboard.writeText('https://steamcommunity.com/profiles/' + arrSteamID[0])}, false);




