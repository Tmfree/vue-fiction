function loadJs(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.type = "text/javascript"
        script.onload = () => {
            resolve()
        }
        script.onerror = () => {
            reject()
        }
        script.src = src
        document.getElementsByTagName('body')[0].appendChild(script)
    })
}

export default loadJs