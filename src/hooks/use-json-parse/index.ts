import { useMemo } from 'react';
import sortKeysFunc from 'sort-keys';
import jsonDeepParse from './jsonDeepParse';
import jsonShallowParse from './jsonShallowParse';

interface UseJsonParseOptions {
  code: string;
  deepParse?: boolean;
  sortKeys?: boolean;
}

export default function useJsonParse({ code, deepParse, sortKeys }: UseJsonParseOptions) {
  const data = useMemo(() => {
    let obj = {};
    try {
      if (deepParse) {
        obj = jsonDeepParse(code);
      } else {
        obj = jsonShallowParse(code);
      }
    } catch (e) {
      obj = {
        error: 'Invalid JSON',
      };
    }
    if (sortKeys) {
      obj = sortKeysFunc(obj, { deep: true });
    }
    return obj;
  }, [code, deepParse, sortKeys]);

  return data;
}
