import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>(undefined);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
