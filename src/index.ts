import stringWidth from 'string-width';
import textTable from 'text-table';

const tableB = (
  rows: Array<Array<{}>>,
  options?: {
    hsep?: string;
    align?: Array<'l' | 'r' | 'c' | '.'>;
    stringLength?(str: string): number;
  }
): string =>
  textTable(rows, {
    ...options,
    ...(typeof options === 'undefined' ||
    typeof options.stringLength === 'undefined'
      ? { stringLength: stringWidth }
      : {})
  });

export default tableB;
export { tableB as table };
