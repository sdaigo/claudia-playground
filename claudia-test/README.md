# hello world

## Deployment

```
➜ claudia create --region ap-northeast-1 --handler lambda.handler
```

## Testing function

```
➜ claudia test-lambda --event event.json
{
  "StatusCode": 200,
  "ExecutedVersion": "$LATEST",
  "Payload": "\"hello world\""
}
```