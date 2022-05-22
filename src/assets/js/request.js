import config from '@/config/config.json';

export default function getUrlByKeyNode(keynode) {
  const keys = keynode.split('.');
  let result;
  let finalkey = config;

  for (let i = 0; i < keys.length; i += 1) finalkey = finalkey[keys[i]];

  if (finalkey.startsWith('http')) {
    result = finalkey;
  } else {
    result = config.api.apiUrl + finalkey;
  }

  return result;
}
