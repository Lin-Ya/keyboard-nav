//config
const key_map = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]
let key_hash = {
    'q': 'qq.com',
    'j': 'juejin.im',
    'b': 'baidu.com',
    'g': 'google.com',
    'f': 'resume.fengxiaoyong.work',
    'z': 'zhihu.com',
    'h': 'www.hupu.com',
    'a': 'iqiyi.com',
    'e': 'ele.me',
    'm': 'meituan.com',
    'l': 'linkedin.com',
    's': 'stackoverflow.com',
    'i': 'ithome.com',
    'u': 'uiiiuiii.com',
    'r': 'reactjs.org'
}

initKeybord(key_map)
//bind打开新页面的事件
document.onkeypress = function (key) {
    let target = key.key
    let website = key_hash[target]
    if (website) {
        window.open('http://' + website)
    }
}

function initKeybord(keymap) {
    //取出localstorage中的用户设置
    userConfig = JSON.parse(localStorage.getItem('userConfig') || 'null')
    if (userConfig) {
        // key_hash = userConfig
    }
    //在页面生成根节点
    let keybord = document.createElement('div')
    let main = document.getElementsByTagName('main')[0]
    keybord.className = 'keybord'
    main.appendChild(keybord)
    //利用for循环生成键盘节点
    for(let i=0; i<keymap.length; i++){
        let key_line = document.createElement('p')
        key_line.className = 'key_line'
        //初始化键盘的每一行
        keymap[i].forEach((e)=>{
            let key_module = document.createElement('kbd')
            let key_text = document.createElement('span')
            let text = document.createTextNode(e.toUpperCase())
            let edit = document.createElement('button')
            let edit_text = document.createTextNode('Edit')
            let img = document.createElement('img')
            img = getIcon(e,img)
            edit.setAttribute('id',e)
            edit.appendChild(edit_text)
            key_module.className = 'key_module'
            key_text.className = 'key_text'
            key_text.appendChild(text)
            key_module.appendChild(key_text)
            key_module.appendChild(img)
            key_module.appendChild(edit)
            key_line.appendChild(key_module)
        })
        keybord.appendChild(key_line)
        //给编辑按钮绑定事件
        let editonButton = document.getElementsByTagName('button')
        for(let i=0; i<editonButton.length; i++){
            editonButton[i].onclick = function (e) {
                console.log(e)
                let key = e.target.id;
                let value = prompt('请输入你需要绑定的网站，格式为：qq.com','')
                let img = e.target.previousSibling;
                if(value){
                    key_hash[key] = value
                    localStorage.setItem('userConfig',JSON.stringify(key_hash))
                }else {
                    alert('你并没有绑定网站')
                }
                getIcon(key,img)
                console.log(key_hash)
            }
        }
    }
}
//获取网站的icon
function getIcon(key,img) {
    if(key_hash[key]){
        let domain = 'http://' + key_hash[key]
        console.log(domain)
        console.log(img)
        img.src = domain + '/favicon.ico'
    }else {
        img.src = '../IMG/doct.png'        
    }
    img.onerror = function (e) {
        e.target.src = '../IMG/doct.png'    //如果获取失败了就改为使用默认的图标
    }
    return img
}