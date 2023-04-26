import { InputData, Options, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';

export default async function jsonToType(samples: string[], options?: Partial<Options>) {
  const jsonInput = jsonInputForTargetLanguage('typescript');

  await jsonInput.addSource({
    name: 'Type',
    samples,
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    lang: 'typescript',
    inputData,
    ...options,
  });
}
