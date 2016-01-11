#!/bin/sh
cd `dirname $0`

export token="xxxxxxxxxxxxxxx"
export weather_api_key="xxxxxxxxxxxxxx"
export DOCOMO_API_KEY="xxxxxxxxxxxxxxxxxxxx"

node bot.js
