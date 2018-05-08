//config
const key_map = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]
let key_hash = {
    'q': 'qq.com',
    'j': 'jd.com'
}

//init
let keybord = document.createElement('div')
let main = document.getElementsByTagName('main')[0]
keybord.className = 'keybord'
main.appendChild(keybord)
//取出localstorage中的用户设置
userConfig = JSON.parse(localStorage.getItem('userConfig')|| 'null')
if(userConfig){
    key_hash = userConfig
}

for(let i=0; i<key_map.length; i++){
    let key_line = document.createElement('p')
    key_line.className = 'key_line'
    key_map[i].forEach((e)=>{
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
}

//绑定网站
let editonButton = document.getElementsByTagName('button')
for(let i=0; i<editonButton.length; i++){
    editonButton[i].onclick = function (e) {
        let key = e.target.id;
        let value = prompt('请输入你需要绑定的网站，格式为：qq.com','')
        if(value){
            key_hash[key] = value
            localStorage.setItem('userConfig',JSON.stringify(key_hash))
        }else {
            alert('你并没有绑定网站')
        }
        console.log(key_hash)
    }
}

//bind打开新页面的事件
document.onkeypress = function (key) {
    let target = key.key
    let website = key_hash[target]
    if (website) {
        window.open('http://' + website)
    }
}

function getIcon(e,img) {
    if(key_hash[e]){
        let domain = 'http://' + key_hash[e]
        console.log(domain)
        img.src = domain + '/favicon.ico'
    }else {
        img.src = '../IMG/doct.png'        
    }
    img.onerror = function (e) {
        e.target.src = '../IMG/doct.png'
    }
    return img
}