import JSON5 from 'json5';

export default function jsonDeepParse(code: string): any {
  try {
    const parsed = JSON5.parse(code, (key, value) => {
      if (typeof value === 'string') {
        return jsonDeepParse(value);
      } else {
        return value;
      }
    });
    if (typeof parsed === 'object') {
      return parsed;
    } else {
      return code;
    }
  } catch (e) {
    return code;
  }
}
