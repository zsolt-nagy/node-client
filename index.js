const url = 'https://zsolt-pk-azure.azurewebsites.net/api/features';

fetch(url)
    .then(x => x.json())
    .then(data => {
        let [{id, feature, version}] = data;
        document.querySelector('.js-content').innerHTML = `
            <p>id: ${id}</p>
            <p>feature: ${feature}</p>
            <p>version: ${version}</p>
        `;
    });