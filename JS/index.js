//config
let key_map = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]




//init
let keybord = document.createElement('div')
let main = document.getElementsByTagName('main')[0]
keybord.className = 'keybord'
main.appendChild(keybord)


for(let i=0; i<key_map.length; i++){
    let key_line = document.createElement('p')
    key_line.className = 'key_line'
    key_map[i].forEach((e)=>{
        let key_module = document.createElement('div')
        let key_node = document.createElement('span')
        let text = document.createTextNode(e.toUpperCase())
        key_module.className = 'key_module'
        key_node.className = 'key_node'
        key_node.appendChild(text)
        key_module.appendChild(key_node)
        key_line.appendChild(key_module)
    })
    keybord.appendChild(key_line)
}