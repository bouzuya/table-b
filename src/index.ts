import eaw from 'eastasianwidth';
import textTable from 'text-table';

const tableB = (
  rows: Array<Array<{}>>,
  options?: {
    hsep?: string;
    align?: Array<'l' | 'r' | 'c' | '.'>;
    stringLength?(str: string): number;
  }) => textTable(rows, {
    ...options,
    ...(
      typeof options === 'undefined' ||
        typeof options.stringLength === 'undefined'
        ? { stringLength: eaw.length.bind(eaw) }
        : {}
    )
  });

export default tableB;
export { tableB as table };
