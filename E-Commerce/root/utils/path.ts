import path from 'path';

function getPath(path: string): string {
  const array: string[] = path.split('\\');
  array.pop();
  path = array.join('\\');
  return path;
}
const dir = getPath(path.dirname(require.main?.filename!));

export default dir;
