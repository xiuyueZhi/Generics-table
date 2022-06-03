import * as React from "react";
export interface ColumnProps<T> {
  // 声明泛型 T
  key: number | string;
  name: string;
  dataIndex: keyof T; // 约束 dataIndex 值需为引用泛型 T 中的属性
}

interface TableProps<T> {
  // 声明泛型 T
  data: T[]; // 约束 data 数组为 T 类型数组
  columns: Array<ColumnProps<T>>; // dataIndex 应该是泛型 T 中的属性
}

class Table<T> extends React.Component<TableProps<T>, any> {
  renderHeader = () => {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((col: ColumnProps<T>) => (
            <th key={col.key}>{col.name}</th>
          ))}
        </tr>
      </thead>
    );
  };
  renderBody = () => {
    const { data, columns } = this.props;
    const getTd = (item: T) => {
      // item 的类型应该为T
      // dataIndex 应该是泛型 T 中的属性
      return columns.map((col: ColumnProps<T>, index: number) => (
        <td key={`${index}-${col.dataIndex}`}>{item[col.dataIndex]}</td>
      ));
    };
    return (
      <tbody>
        {data.map((item: T, index: number) => (
          <tr key={`${index}`}>{getTd(item)}</tr>
        ))}
      </tbody>
    );
  };
  render() {
    return (
      <table>
        {this.renderHeader()}
        {this.renderBody()}
      </table>
    );
  }
}

export default Table;
