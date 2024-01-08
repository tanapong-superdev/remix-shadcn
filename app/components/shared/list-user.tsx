import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Skeleton } from "~/components/ui/skeleton";
export type User = {
  id: number;
  name: string;
  email: string;
  total: string;
};
export default function SharedListUser() {
  const [loading, setLoading] = useState(true);
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      total: "$265.00",
      email: "olivia.martin@email.com",
    },
    {
      id: 2,
      name: "Jackson Lee",
      total: "+$1,999.00",
      email: "jackson.lee@email.com",
    },
    {
      id: 3,
      name: "Isabella Nguyen",
      total: "+$299.00",
      email: "olivia.martin@email.com",
    },
    {
      id: 4,
      name: "William Kim",
      total: "+$99.00",
      email: "will@email.com",
    },
    {
      id: 5,
      name: "Sofia Davis",
      total: "+$39.00",
      email: "sofia.davis@email.com",
    },
  ];
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="py-3">
              {loading ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                <div className="flex items-centerx ">
                  <div className="flex flex-1 space-x-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="font-bold">{user.total}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
