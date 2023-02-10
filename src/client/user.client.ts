import {
  UserModel,
  UserResponseInterface,
  DeleteUserResponseModel,
  DeleteUserResponseInterface,
  DeleteUserRequestInterface,
} from "@/models/user.model";
import { nanoid } from "nanoid";

export default class UserClient {
  static async getAllUsers(): Promise<UserResponseInterface[]> {
    const response = {
      data: [
        {
          id: nanoid(6),
          nickname: "nickname 1",
        },
        {
          id: nanoid(6),
          nickname: "nickname 2",
        },
        {
          id: nanoid(6),
          nickname: "nickname 3",
        },
        {
          id: nanoid(6),
          nickname: "nickname 4",
        },
        {
          id: nanoid(6),
          nickname: "nickname 5",
        },
        {
          id: nanoid(6),
          nickname: " nickname 6",
        },
      ],
    };

    return response.data.map((item: UserResponseInterface) => new UserModel(item));
  }

  static async deleteUserById(id: DeleteUserRequestInterface): Promise<DeleteUserResponseInterface> {
    const response = {
      data: {
        message: `Deleted user by id: ${ id.id }, was been successful!`,
      },
      statusCode: 200,
    };

    return new DeleteUserResponseModel(response);
  }
}
