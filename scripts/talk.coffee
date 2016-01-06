# talk
controller.hears ['ぬるぽ'], AMBIENT, (bot, message) ->
  params =
    timestamp: message.ts,
    channel: message.channel,
    name: 'boom',

  bot.api.reactions.add params, (err, res) ->
    if err
      bot.botkit.log "Failed to add emoji reaction :(", err

  bot.reply message, "ガッ"
