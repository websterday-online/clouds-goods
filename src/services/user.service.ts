import UserClient from "@/client/user.client";
import {
  UserResponseInterface,
  DeleteUserRequestModel,
  DeleteUserResponseInterface,
} from "@/models/user.model";
import { store } from "@/store";

export default class UserService {
  static async getAllUsers(): Promise<UserResponseInterface[]> {
    const response: UserResponseInterface[] = await UserClient.getAllUsers();

    await store.dispatch("setUsers", response);

    return response;
  }

  static async deleteUserById(id: string): Promise<DeleteUserResponseInterface> {
    const deleteUserData = new DeleteUserRequestModel(id);
    const response = await UserClient.deleteUserById(deleteUserData);

    if(response.statusCode === 200) {
      await store.dispatch("removeUser", id);
    }

    return response;
  }
}

