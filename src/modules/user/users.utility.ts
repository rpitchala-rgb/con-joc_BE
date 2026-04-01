import * as crypto from 'crypto';
export class UsersUtility {

    encrypted(text: string, key: string): string {
    return crypto
      .createHash('sha256')
      .update(text + key)
      .digest('hex');
  }

}