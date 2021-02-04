let urlsList = document.getElementById('urlsInput')
let openButton = document.getElementById('openButton')

console.log('init')

openButton.onclick = (element) => {
    let urls = urlsList.value
    if (urls) {
        console.log('value', urls)
        urls = urls.split(' ')
        console.log(urls)
        urls.forEach(newPage => {
            chrome.tabs.create({active: false, url: `/${newPage}`})
        })
    }
}
