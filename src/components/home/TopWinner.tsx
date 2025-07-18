interface User {
  id: string;
  name: string;
  userId: string;
  avatar: string;
  rank?: number;
}

const users: User[] = [
  {
    id: "1",
    name: "Ella Lewis",
    userId: "user65946634",
    avatar: "/assets/avatar-01.svg",
    rank: 1,
  },
  {
    id: "2",
    name: "Natalie Clark",
    userId: "user12358547",
    avatar: "/assets/avatar-02.svg",
    rank: 2,
  },
  {
    id: "3",
    name: "Sophia Hernandez",
    userId: "user69786731",
    avatar: "/assets/avatar-03.svg",
    rank: 3,
  },
  {
    id: "4",
    name: "Olivia Martin",
    userId: "user65723156",
    avatar: "/assets/avatar-04.svg",
    rank: 4,
  },
  {
    id: "5",
    name: "Mia Taylor",
    userId: "user89451247",
    avatar: "/assets/avatar-05.svg",
    rank: 5,
  },
  {
    id: "6",
    name: "James Rodriguez",
    userId: "user57797353",
    avatar: "/assets/avatar-06.svg",
    rank: 6,
  },
  {
    id: "7",
    name: "Sophia Hernandez",
    userId: "user04526833",
    avatar: "/assets/avatar-07.svg",
    rank: 7,
  },
];

const TopWinner = () => {
  return (
    <div className="w-full min-h-[500px] mt-30 px-4">
      <h1 className="text-center font-medium text-lg text-white mb-4">Top Winners</h1>
      <div className="flex justify-center items-center px-4">
        <img src="/assets/top-winner.svg" alt="Image" />
      </div>
      <div className="px-2 py-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between py-4 border-b border-blue-400/20 last:border-b-0"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={`${user.name} avatar`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                {/* Orange notification dot */}
                <div className="absolute -top-0 left-1 w-4 h-4 rounded-full  flex items-center justify-center">
                  <img src="/assets/medals.svg" alt="medal" />
                  <span className=" text-white text-xs font-bold -translate-x-[11px]">
                    {user.rank ? user.rank : "N/A"}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">{user.name}</h3>
              </div>
            </div>
            <div>
              <span className="text-[#80A5DF] text-sm font-normal">
                {user.userId}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWinner;
