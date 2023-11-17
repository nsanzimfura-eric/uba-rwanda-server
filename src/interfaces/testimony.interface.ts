export interface TestimonyInterface {
  from: {
    id: string;
    names: string;
    avatar: string;
    role: string;
  };
  to: {
    id: string;
    names: string;
    avatar: string;
    role: string;
  };
  testimony: string;
  rating: number;
}
