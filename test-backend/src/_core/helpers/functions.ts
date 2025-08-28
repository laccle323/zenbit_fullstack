import * as crypto from 'crypto';

export function makeHash(content: any) {
  const md5 = crypto.createHash('md5').update(content).digest("hex");
  return md5.toString();
}