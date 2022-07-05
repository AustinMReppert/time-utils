# Time Utils
This small API serves to provide time related utilities.
Built in TypeScript with [Next.js](https://nextjs.org/) and [Luxon](https://moment.github.io/luxon/#/?id=luxon).

## POST /api/timezone
Convert from an ISO 8601 timestamp to another timezone/format.

Sample input:
```json
{
	"outputTimeZone": "America/New_York",
	"outputFormat": "yyyy-MM-dd'T'hh:mm:ss",
	"times": [
		"2022-01-01T07:00:00+00:00",
		"2022-07-01T07:00:00+00:00"
	]
}
```

Sample Output:
```json
{
	"times": [
		"2022-01-01T02:00:00",
		"2022-07-01T03:00:00"
	]
}
```
