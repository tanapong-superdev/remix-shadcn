import type { Gallery } from "./gallery";
import PagesMusicModuleGallery from "./gallery";
export default function PagesMusicModulesMadeYou() {
  const listenNow: Gallery[] = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75",
    },
  ];
  const madeYou: Gallery[] = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
  ];
  return (
    <div>
      <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Recently Played</span>
            <span className="text-slate-400 text-sm">
              Your top tracks from the past month.
            </span>
          </div>
          <hr className="mt-4" />
          <div className="sm:overflow-x-scroll py-4">
            <div className="flex flex-col  sm:flex-row gap-8">
              {listenNow.map((gallery, k1) => (
                <div key={k1}>
                  <PagesMusicModuleGallery
                    name={gallery.name}
                    artist={gallery.artist}
                    image={gallery.image}
                  ></PagesMusicModuleGallery>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Your Heavy Rotation</span>
            <span className="text-slate-400 text-sm">
              The songs you’ve been playing the most this month.
            </span>
          </div>
          <hr className="mt-4" />
          <div className="sm:overflow-x-scroll py-4  w-full">
            <div className="flex flex-col sm:flex-row gap-8">
              {listenNow.map((gallery, index) => (
                <div key={index}>
                  <PagesMusicModuleGallery
                    name={gallery.name}
                    artist={gallery.artist}
                    image={gallery.image}
                  ></PagesMusicModuleGallery>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Made For You</span>
        <span className="text-slate-400">
          Get better recommendations the more you listen.
        </span>
      </div>
      <div className="w-full mt-3 grid mb-6  gap-3  lg:gap-2 lg:space-y-0   grid-cols-12">
        {madeYou.map((gallery, index) => (
          <div
            key={index}
            className="md:col-span-3 sm:col-span-3 lg:col-span-2 col-span-6"
          >
            <PagesMusicModuleGallery
              height={150}
              width={150}
              isSmall
              name={gallery.name}
              artist={gallery.artist}
              image={gallery.image}
            ></PagesMusicModuleGallery>
          </div>
        ))}
      </div>
    </div>
  );
}
