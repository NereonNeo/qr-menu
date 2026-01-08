#!/bin/sh
set -e

: "${DOMAIN:?DOMAIN is required}"

mkdir -p /etc/nginx/ssl-conf

# 1) поднимаем HTTP-конфиг (работает всегда)
envsubst '${DOMAIN}' < /etc/nginx/templates/http.conf.template > /etc/nginx/conf.d/default.conf

# 2) стартуем watcher в фоне — он будет reload nginx, когда появится/обновится cert
sh /reload-watcher.sh &

exec "$@"
