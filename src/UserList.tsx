import * as React from "react";
import Table, { ColumnProps } from "./Table";

export interface User {
  id?: number | string;
  username?: string;
  password?: string;
  email?: string;
  gender?: string;
  age?: number;
}

const users = [{ id: "1001", username: "ziv", birth: "1991" }];
const columns: Array<ColumnProps<User>> = [
  { key: "id", name: "ID", dataIndex: "id" },
  { key: "username", name: "姓名", dataIndex: "username" }
];

class UserList extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Table<User> columns={columns} data={users} />
      </div>
    );
  }
}
export default UserList;
