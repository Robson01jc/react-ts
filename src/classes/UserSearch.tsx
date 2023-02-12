import { Component, ReactNode } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user?: User;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const { users } = this.props;
    const { name } = this.state;

    const foundUser = users.find((user) => {
      return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
