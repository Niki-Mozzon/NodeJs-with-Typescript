import fs from 'fs';

class Repository<T> {
  fetchFile = <T>(url: string): T => {
    if (fs.existsSync(url)) {
      const data = fs.readFileSync(url, 'utf-8');
      const obj: T = JSON.parse(data);
      return obj;
    } else {
      throw new Error("File doesn't exist!");
    }
  };
}
export = new Repository();
