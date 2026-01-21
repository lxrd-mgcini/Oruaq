export default function Tags() {
  const tags = [
    {
      name: "All Products",
      count: "12",
      id: 1,
    },
    {
      name: "Anti-Aging",
      count: "4",
      id: 1,
    },
    {
      name: "Dark Circles",
      count: "1",
      id: 1,
    },
    {
      name: "Dark Spots",
      count: "4",
      id: 1,
    },
    {
      name: "Oily Skin",
      count: "4",
      id: 1,
    },
  ];
  return (
    <div className="flex w-full justify-center border-t border-black/30 px-4 py-2">
      {tags.map((tag) => {
        return (
          <>
            <div></div>
            <div className="hidden sm:flex">
              <span className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative cursor-pointer px-2 py-1 font-normal text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100">
                {tag.name} ({tag.count})
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
}
