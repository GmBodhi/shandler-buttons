const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {
    guilds:['826662403810131988'],
    name:'ping',
    async run({interaction}){
        console.log(interaction.user)
        const handler = (int) => {
            int.reply("test", {type: 7}).catch(console.error)
            interaction.client.removeListener('ButtonClick', handler)       
        }
        let cmp = [
            {"type": 1, "components": [
                {"type": 2, "style": 1, "label": "Button 1", "custom_id": "1"},
                {"type": 2, "style": 4, "label": "Button 2", "custom_id": "2"}
            ]}
        ]
        console.log('654')
        interaction.reply("tesfsfst",{ components: cmp, type: 4, flags: 64 }).then(m => {
            interaction.client.on('buttonClick', handler)
        })
    }
}
