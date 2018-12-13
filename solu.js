let Discord = require('discord.js');
let client = new Discord.Client();
let fs = require('fs');
let d = new Date();
sada = [];
client.on('message',(message)=>{
	let msg = message.content;
	if(msg.includes('$add')) {
		abilarr = msg.split('$add')[1].split(',')
		for(let i = 0; i < abilarr.length; i++) {
			sada.push(abilarr[i])
		}
	let abils = sada.toString();
	let year = d.getFullYear();
	let month = d.getMonth();
	let day = d.getDate();
	fs.writeFile(`Database/${abilarr[0].split(':')[1]}` + '.txt', '```js\n'+ abils + '\n\n' + 'Added ' + day + '/' + month + '/' + year + '\n!Time may be slightly off!' +'\n```', (err)=>{
    	if(err) {
        	return console.log(err);
    	}
    })
    sada = [];
    }
    if(msg.includes('$search')) {
    	iName = msg.split('$search')[1];
    }			
})    

client.login('NTIyNTM4NjQ5OTQ3MDc4NjU4.DvMcqQ.gAS_jMmyLgdxd4g-VQ19Nz9PmWk')