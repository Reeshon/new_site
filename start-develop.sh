# Start Gatsby develop on port 8004 with logging
LOG_FILE="develop.log"
PORT=8004
MAX_RETRIES=5
RETRY_DELAY=5

for ((i=1;i<=MAX_RETRIES;i++)); do
    npm run develop -- --port $PORT > $LOG_FILE 2>&1 &
    sleep 2
    if ! lsof -i:$PORT > /dev/null; then
        echo "Gatsby development server started on port $PORT."
        break
    else
        echo "Port $PORT is in use. Attempt $i/$MAX_RETRIES."
        kill $(lsof -t -i:$PORT) 2>/dev/null
        sleep $RETRY_DELAY
    fi
    if [ $i -eq $MAX_RETRIES ]; then
        echo "Failed to start Gatsby development server on port $PORT after $MAX_RETRIES attempts."
        exit 1
    fi
done