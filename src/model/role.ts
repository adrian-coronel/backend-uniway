import { RowDataPacket } from "mysql2";

// RowDataPacket permite tipar los resultados de tlas consultas a la base de datos MySQL en TypeScript
export interface Role extends RowDataPacket{

  id: number;
  name: string;

}