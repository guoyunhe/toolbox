import JSON5 from 'json5';

export default function jsonShallowParse(code: string): any {
  let parsed = JSON5.parse(code);
  if (typeof parsed === 'string') {
    try {
      parsed = JSON5.parse(parsed);
    } catch (e) {
      return parsed;
    }
  }
  return parsed;
}
