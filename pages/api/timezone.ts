import { DateTime } from 'luxon';
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  times: Array<string>
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

  const response: Response = {
    times: times.map((time: string) => {
      return DateTime.fromISO(time).setZone(outputTimeZone).toFormat(outputFormat);
    })
  };

  res.status(200).json(response);
}
