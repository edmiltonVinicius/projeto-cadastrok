const updatePageDashboard = (...path) => {
    path.forEach((e) => {
        let js = document.createElement('script')
        js.src=e
        document.querySelector('body').appendChild(js)
    })
}