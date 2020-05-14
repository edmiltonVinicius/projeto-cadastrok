function refreshJsDashboard(path){
    const scri = document.createElement('script')
    scri.src=path
    document.querySelector('body').appendChild(scri)
}