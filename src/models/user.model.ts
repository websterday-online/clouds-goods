interface UserResponseInterface {
  id: string;
  nickname: string;
}

class UserModel implements UserResponseInterface {
  id: string;
  nickname: string;

  constructor(data: UserResponseInterface) {
    this.id = data.id;
    this.nickname = data.nickname;
  }
}

interface DeleteUserResponseInterface {
  data: object;
  statusCode: number;
}

class DeleteUserResponseModel implements DeleteUserResponseInterface {
  data: object;
  statusCode: number;

  constructor(data: DeleteUserResponseInterface) {
    this.data = data.data;
    this.statusCode = data.statusCode;
  }
}

interface DeleteUserRequestInterface {
  id: string;
}

class DeleteUserRequestModel implements DeleteUserRequestInterface {
  constructor(public id: string) {
    this.id = id;
  }
}

export {
  UserResponseInterface,
  UserModel,
  DeleteUserResponseInterface,
  DeleteUserResponseModel,
  DeleteUserRequestInterface,
  DeleteUserRequestModel,
};
