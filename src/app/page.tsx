import Link from "next/link";
import {db} from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
    "https://utfs.io/f/6cbdee13-ae68-46f5-a3e0-52ea6ec084f4-1xcy7.jpg",
    "https://utfs.io/f/a8f324e1-b3e0-4ef4-8f78-9c1790a06cde-1xcy6.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {mockImages.map((image, index) => (
          <div key={image.id + index} className="w-48">
              <img src={image.url} alt="My image"/>
          </div>
        ))}
      </div>
    </main>
  );
}
