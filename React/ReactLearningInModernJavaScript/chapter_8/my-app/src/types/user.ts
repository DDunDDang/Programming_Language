export type User = {
  id: number;
  name: string;
  age: number;
  // ?는 생략 가능함을 의미
  personalColor?: string;
  hobbies?: string[];
};