import { useState, useRef, useEffect } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

    setUser(foundUser);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
