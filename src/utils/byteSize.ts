import prettyBytes from 'pretty-bytes';

export default function byteSize(data: string): string {
  return prettyBytes(new TextEncoder().encode(data).length);
}
