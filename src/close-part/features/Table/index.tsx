import React from "react";
import style from "./style.module.scss";


export type DataType = {key: string, [key: string]: (string | React.ReactNode)}

export type ColumnsType = {
  title: React.ReactNode | string,
  dataIndex: string,
  key: string,
  width?: string,
  onClick?: (key: string) => void;
}

export type TableType = {
  data: DataType[],
  columns: ColumnsType[]
}

const TableComponent = (props: TableType) => {

  const {
    data,
    columns,
  } = props;

  return (
    <div className={style.wrap}>
      <table>
        <tbody>
          <tr>
            {columns.map(({ key, onClick, title }) => (
              <th key={key} onClick={() => onClick && onClick(key)}>
                {title}
              </th>
            ))}
          </tr>
          {data.map(item => (
            <tr key={item.key}>
              {columns.map(column => (
                <td
                  key={`${item.key}_${column.key}`}
                  width={column?.width || `${100 / columns.length}%`}
                >
                  {item[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  );
};

export default TableComponent;
