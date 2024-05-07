import { Role } from "../model/role";
import { OkPacketParams } from "mysql2";
import { ICrudRepository } from "./ICrudRepository.repository";

class RoleRepository implements ICrudRepository<Role> {

  findAll(): Promise<Role[]> {
    
  }
  findById(id: number): Promise<Role> {
    
  }
  create(entity: Role): Promise<void> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacketParams>(
        "INSERT INTO tutorials (title, description, published) VALUES(?,?,?)",
        [],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((tutorial) => resolve(tutorial!))
              .catch(reject);
        }
      );
    });
  }
  update(id: number, entity: Partial<Role>): Promise<void> {
    
  }
  delete(id: number): Promise<void> {
    
  }

}

