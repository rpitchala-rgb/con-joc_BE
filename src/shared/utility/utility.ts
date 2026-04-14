import * as crypto from 'crypto';
export class Utility {
  encrypted(text: string, encrypt_decrypt_key: string): string {
    const key = crypto.createHash('md5').update(encrypt_decrypt_key).digest();
    const iv = crypto.createHash('md5').update(key).digest();

    const blockSize = 16;
    const textBuffer = Buffer.from(text, 'utf8');
    const paddingLength = blockSize - (textBuffer.length % blockSize);
    const padded = Buffer.concat([textBuffer, Buffer.alloc(paddingLength, 0)]);

    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    cipher.setAutoPadding(false);
    const encrypted = Buffer.concat([cipher.update(padded), cipher.final()]);

    return encrypted.toString('base64');
  }
}