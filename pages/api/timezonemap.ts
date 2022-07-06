import { time } from 'console';
import { DateTime } from 'luxon';
import type { NextApiRequest, NextApiResponse } from 'next'

type TimeMap = {
  key: string,
  value: string
}

type Response = {
  times: Array<TimeMap>
}

type Error = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response | Error>) {

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not supported." })
    return;
  }

  const outputTimeZone: string = req.body.outputTimeZone;
  const outputFormat: string = req.body.outputFormat;
  const times: Array<string> = req.body.times;

  let response: Response = {
    times: []
  };

  let map = new Map<string, string>();

  times.forEach((time: string) => {
    map.set(time, DateTime.fromISO(time).setZone(outputTimeZone).toFormat(outputFormat).toString());
  });

  map.forEach((value: string, key: string) => {
    response.times.push({
      key: key,
      value: value
    });
  });

  res.status(200).json(response);
}
